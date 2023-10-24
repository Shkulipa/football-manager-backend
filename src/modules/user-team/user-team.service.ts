import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { isEmpty, pick } from 'lodash';
import getKeyS3Helper from 'src/common/helpers/get-key-s3.helper';
import { toId, toIdsArr } from 'src/common/helpers/transform.helper';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';
import { RealPlayerRepository } from 'src/services/repositories/real-player/real-player.repository';
import { UserTeamRepository } from 'src/services/repositories/user-team/user-team.repository';
import { S3Service } from 'src/services/s3/s3.service';

import { CreateUserTeamReqDto } from './dto/create-user-team-req.dto';
import { UpdateUserTeamReqDto } from './dto/update-user-team-req.dto';
import { checkDuplicatesPlayerHelper } from './helpers/check-duplicates-player.helper';

@Injectable()
export class UserTeamService {
  private readonly path = 'public/user-team-logo';

  constructor(
    private readonly userTeamRepository: UserTeamRepository,
    private readonly s3Service: S3Service,
    private readonly realPlayerRepository: RealPlayerRepository,
  ) {}

  async create(user: IUserData, createUserTeamDto: CreateUserTeamReqDto, file: Express.Multer.File) {
    const { clubName } = createUserTeamDto;

    const isAlreadyCreated = await this.userTeamRepository.findOne({ userId: toId(user._id) });
    if (isAlreadyCreated) throw new BadRequestException('You have already team, you can manage only 1 team');

    const team = await this.userTeamRepository.findOne({
      clubName,
    });
    if (team) throw new BadRequestException('club with name already been taken');

    const newUserTeamData = {
      clubName,
      userId: toId(user._id),
      logoClub: '',
      reserve: [],
    };

    if (file) {
      // load file in s3
      const urlFile = await this.s3Service.create(file, this.path);
      newUserTeamData.logoClub = urlFile;
    }

    const players = await this.realPlayerRepository.formRandomPlayers();
    newUserTeamData.reserve = players;

    await this.userTeamRepository.create(newUserTeamData);

    return { success: true };
  }

  async findById(id: string) {
    const team = await this.userTeamRepository.findById(id);
    if (!team) throw new NotFoundException("Team wasn't found");
    return team;
  }

  async getOwnTeam(user: IUserData) {
    const userTeam = await this.userTeamRepository.findOne({ userId: toId(user._id) });
    if (!userTeam) throw new NotFoundException("Team wasn't found");
    return await this.userTeamRepository.findById(userTeam._id.toString());
  }

  async update(id: string, user: IUserData, updateUserTeamDto: UpdateUserTeamReqDto, file?: Express.Multer.File) {
    const { clubName, main, bench, reserve } = updateUserTeamDto;

    const userTeam = await this.userTeamRepository.validation(id);
    if (userTeam.userId.toString() !== user._id.toString()) throw new ForbiddenException('You not owner this club');

    // check name club
    if (clubName) {
      const team = await this.userTeamRepository.findOne({
        clubName,
      });
      if (team) throw new BadRequestException('club with name already been taken');
    }

    // concat data
    const newUserTeamData = {
      ...pick(userTeam, ['clubName', 'logoClub', 'skills', 'main', 'bench', 'reserve']),
    };
    const isEmptyBody = isEmpty(updateUserTeamDto);
    if (!isEmptyBody) Object.assign(newUserTeamData, { ...updateUserTeamDto });

    // update logo link
    if (file) {
      const key = getKeyS3Helper(userTeam.logoClub);
      await this.s3Service.delete(key);
      const logoClubUrl = await this.s3Service.create(file, this.path);
      const updatedObj = { logoClub: logoClubUrl };
      Object.assign(newUserTeamData, { ...updatedObj });
    }

    // check duplicates
    checkDuplicatesPlayerHelper(updateUserTeamDto);

    const playersUserTeam = [
      ...(userTeam.main ? Object.values(newUserTeamData.main) : []),
      ...(userTeam.bench || []),
      ...(userTeam.reserve || []),
    ].map((p) => p.toString());

    const mainSquad = main ? Object.values(main) : [];
    const benchSquad = bench || [];
    const reserveSquad = reserve || [];
    const allNewPlayers = [...mainSquad, ...benchSquad, ...reserveSquad];

    // check if all user were taken in squads
    const missingPlayers = playersUserTeam.filter((id) => !allNewPlayers.includes(id));
    if (missingPlayers.length > 0)
      throw new BadRequestException(
        `identify all players with ids: ${missingPlayers.join(', ')} between main, bench, reserve squad`,
      );

    // check if not added players that not belong to this user team
    const notBelongsPlayers = allNewPlayers.filter((id) => !playersUserTeam.includes(id.toString()));
    if (notBelongsPlayers.length > 0)
      throw new BadRequestException(`players with ids: ${notBelongsPlayers.join(', ')} not belong to your team`);
    await this.realPlayerRepository.checkExistPlayersForUserTeam(allNewPlayers);

    // update user team
    if (newUserTeamData.main && Object.values(newUserTeamData.main).length > 0) {
      for (const key in newUserTeamData.main) {
        newUserTeamData.main[key] = toId(newUserTeamData.main[key]);
      }
    }

    newUserTeamData.bench =
      newUserTeamData.bench && newUserTeamData.bench.length > 0 ? toIdsArr(newUserTeamData.bench) : [];
    newUserTeamData.reserve =
      newUserTeamData.reserve && newUserTeamData.reserve.length > 0 ? toIdsArr(newUserTeamData.reserve) : [];

    await this.userTeamRepository.findByIdAndUpdate(
      { _id: toId(id) },
      {
        $set: newUserTeamData,
      },
    );

    // update skills
    this.userTeamRepository.countSkillUserTeam(id);

    return { success: true };
  }

  async delete(id: string, user: IUserData) {
    const userTeam = await this.userTeamRepository.validation(id);
    if (userTeam.userId.toString() !== user._id.toString()) throw new ForbiddenException('You not owner this club');

    await this.userTeamRepository.findByIdAndRemove(id);

    if (userTeam.logoClub) {
      const key = getKeyS3Helper(userTeam.logoClub);
      await this.s3Service.delete(key);
    }

    return { success: true };
  }
}
