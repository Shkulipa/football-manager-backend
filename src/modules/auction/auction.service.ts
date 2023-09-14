import { BadRequestException, ForbiddenException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { toId } from 'src/common/helpers/transform.helper';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

import { UserRepository } from '../user/user.repository';
import { UserTeamRepository } from './../user-team/user-team.repository';
import { AuctionRepository } from './auction.repository';
import { CreateLotReqDto } from './dto/create-lot-req.dto';
import { GetQueryLotsReqDto } from './dto/get-lots-req.dto';

@Injectable()
export class AuctionService {
  private readonly logger = new Logger(AuctionService.name);

  constructor(
    private readonly userRepository: UserRepository,
    private readonly userTeamRepository: UserTeamRepository,
    private readonly auctionRepository: AuctionRepository,
  ) {}

  async getLots(getQueryLotsReqDto: GetQueryLotsReqDto): Promise<any> {
    return await this.auctionRepository.getLots(getQueryLotsReqDto);
  }

  async createLot(user: IUserData, createLotReqDto: CreateLotReqDto): Promise<CommonSuccessResDto> {
    const { price, playerId } = createLotReqDto;

    const team = await this.userTeamRepository.findOne({ userId: toId(user._id) });
    if (!team) throw new NotFoundException("Team for user wasn't found");

    const mainSquad = Object.values(team.main);
    const parsePlayerId = playerId.toString();
    const userId = toId(user._id);
    const isMainPlayer = mainSquad.map((p) => p.toString()).includes(parsePlayerId);
    const isBenchPlayer = team.bench.map((p) => p.toString()).includes(parsePlayerId);
    const isReservePlayer = team.reserve.map((p) => p.toString()).includes(parsePlayerId);

    // delete player from main squad
    if (isMainPlayer) {
      this.logger.debug(`Player(${playerId}) is in main squad`);
      const arrUpdatedSquad = Object.entries(team.main).map(([key, value]) => {
        if (value.toString() === playerId) return [key, null];
        return [key, value];
      });
      const updatedSquad = Object.fromEntries(arrUpdatedSquad);
      await this.userTeamRepository.findOneAndUpdate({ userId }, { $set: { main: updatedSquad } });
    }

    // delete player from bench squad
    if (isBenchPlayer) {
      this.logger.debug(`Player(${playerId}) is in bench squad`);
      await this.userTeamRepository.findOneAndUpdate({ userId }, { $pull: { bench: toId(playerId) } });
    }

    // delete player from reserve squad
    if (isReservePlayer) {
      this.logger.debug(`Player(${playerId}) is in reserve squad`);
      await this.userTeamRepository.findOneAndUpdate({ userId }, { $pull: { reserve: toId(playerId) } });
    }

    // error if player doesn't exist in user's team
    if (!isMainPlayer && !isBenchPlayer && !isReservePlayer)
      throw new NotFoundException(`Player(${playerId}) didn't found in your team`);

    // create lot with this player
    await this.auctionRepository.create({ userId: toId(user._id), playerId: toId(playerId), price });

    return { success: true };
  }

  async buyLot(id: string, user: IUserData): Promise<CommonSuccessResDto> {
    const lot = await this.auctionRepository.validation(id);

    // protect from own buying
    if (lot.userId.toString() === user._id.toString())
      throw new BadRequestException("You can't buy your lot, you can delete it if you want cancel it");

    // check on enough money
    const userData = await this.userRepository.findById(user._id);
    if (userData.money < lot.price) throw new BadRequestException('Not enough money');

    // check existing team
    const team = await this.userTeamRepository.findOne({ userId: toId(user._id) });
    if (!team) throw new NotFoundException("Team for user wasn't found");

    // check on duplication players
    const allPlayersIds = [
      ...Object.values(team.main).map((p) => p.toString()),
      team.bench.map((p) => p.toString()),
      team.reserve.map((p) => p.toString()),
    ];
    const isExistDuplicatePlayer = allPlayersIds.includes(lot.playerId.toString());
    if (isExistDuplicatePlayer)
      throw new BadRequestException("You have already this player, you can't have duplicate players");

    // add  players into reserve
    await this.userTeamRepository.findOneAndUpdate(
      { userId: toId(user._id) },
      { $push: { reserve: toId(lot.playerId) } },
    );

    // decrement money
    await this.userRepository.findOneAndUpdate(
      { _id: toId(user._id) },
      {
        $inc: {
          money: -lot.price,
        },
      },
    );

    // increment money
    await this.userRepository.findOneAndUpdate(
      { _id: toId(lot.userId) },
      {
        $inc: {
          money: lot.price,
        },
      },
    );

    // delete lot
    await this.auctionRepository.findByIdAndRemove(id);

    this.logger.debug(`Lot(${id}) was successfully bought by user(${user._id.toString()})`);

    return { success: true };
  }

  async cancelLot(id: string, user: IUserData): Promise<CommonSuccessResDto> {
    // validate on existing lot
    const lot = await this.auctionRepository.validation(id);

    // protect on the owner
    if (lot.userId.toString() !== user._id.toString()) throw new ForbiddenException("You are't owner this lot");

    // return player into reserve
    await this.userTeamRepository.findOneAndUpdate(
      { userId: toId(user._id) },
      { $push: { reserve: toId(lot.playerId) } },
    );

    // delete lot from DB
    await this.auctionRepository.findByIdAndRemove(id);

    return { success: true };
  }
}
