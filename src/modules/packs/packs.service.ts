import { BadRequestException, Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

import { GetRandomPlayerForPackDto } from '../real-player/dto/get-random-player-for-pack.dto';
import { UserRepository } from '../user/user.repository';
import { UserTeamRepository } from '../user-team/user-team.repository';
import { toId } from './../../common/helpers/transform.helper';
import { RealPlayerRepository } from './../real-player/real-player.repository';
import { GetPacksResDto } from './dto/get-packs-res.dto';
import { OpenPacksReqDto } from './dto/open-packs-req.dto';

@Injectable()
export class PacksService {
  private readonly logger = new Logger(PacksService.name);

  constructor(
    private readonly userRepository: UserRepository,
    private readonly userTeamRepository: UserTeamRepository,
    private readonly realPlayerRepository: RealPlayerRepository,
  ) {}

  async getPacks(user: IUserData): Promise<GetPacksResDto> {
    const { packs } = await this.userRepository.findById(user._id);
    return packs;
  }

  async openPack(user: IUserData, openPacksReqDto: OpenPacksReqDto): Promise<GetRandomPlayerForPackDto> {
    const { pack } = openPacksReqDto;
    const { packs } = await this.userRepository.findById(user._id);
    if (packs[pack] < 1) throw new BadRequestException(`You haven\'t enough ${pack} packs`);

    // get random players, and random money amount
    const openRes = await this.realPlayerRepository.getRandomPlayerForPack(pack);
    const newPlayersIds = openRes.players.map((p) => toId(p._id));

    // add  players into reserve
    await this.userTeamRepository.findOneAndUpdate(
      { userId: toId(user._id) },
      { $push: { reserve: { $each: newPlayersIds } } },
    );

    // decrement cases and increment money
    await this.userRepository.findOneAndUpdate(
      { _id: toId(user._id) },
      {
        $inc: {
          money: openRes.money, // increment money
          [`packs.${pack}`]: -1, // decrement one of cases
        },
      },
    );

    return openRes;
  }
}
