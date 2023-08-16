import { Injectable } from '@nestjs/common';
import { isEmpty, pick } from 'lodash';
import { Types } from 'mongoose';
import getKeyS3Helper from 'src/common/helpers/get-key-s3.helper';
import { toId, toIdsArr } from 'src/common/helpers/transform.helper';
import { S3Service } from 'src/services/s3/s3.service';

import { LeagueRepository } from '../league/league.repository';
import averageSkillPlayerHelper from '../real-player/helpers/average-skills-players-helper';
import { attackers, defenders, midfielders } from '../real-player/helpers/group-players-by-position.helper';
import { RealPlayerRepository } from './../real-player/real-player.repository';
import { CreateRealTeamReqDto } from './dto/create-real-team-req.dto';
import { QueryGetRealTeamsReqDto } from './dto/query-get-real-teams-req.dto';
import { UpdateRealTeamReqDto } from './dto/update-real-team-req.dto';
import { TSquad } from './interfaces/squad.interface';
import { RealTeamRepository } from './real-team.repository';

@Injectable()
export class RealTeamService {
  constructor(
    private readonly leagueRepository: LeagueRepository,
    private readonly realPlayerRepository: RealPlayerRepository,
    private readonly realTeamRepository: RealTeamRepository,
    private readonly s3Service: S3Service,
  ) {}

  private readonly path = 'public/real-teams';

  async findAll(query: QueryGetRealTeamsReqDto) {
    return await this.realTeamRepository.getRealTeams(query);
  }

  async findById(id: string) {
    return await this.realTeamRepository.getRealTeam(id);
  }

  async create(file: Express.Multer.File, createRealTeamDto: CreateRealTeamReqDto) {
    // load file in s3
    const urlFile = await this.s3Service.create(file, this.path);

    await this.leagueRepository.validation(createRealTeamDto.leagueId);

    const players = await this.realTeamRepository.validateSquad(createRealTeamDto);

    // get skill of team
    const att = averageSkillPlayerHelper(attackers(players));
    const mid = averageSkillPlayerHelper(midfielders(players));
    const def = averageSkillPlayerHelper(defenders(players));
    const skills = { att, mid, def };

    const parsedMainSquad = {};
    if (createRealTeamDto.main) {
      for (const key in createRealTeamDto.main) {
        if (createRealTeamDto.main.hasOwnProperty(key)) {
          parsedMainSquad[key] = toId(createRealTeamDto.main[key]);
        }
      }
    }

    const newRealTeam = {
      clubName: createRealTeamDto.clubName,
      leagueId: new Types.ObjectId(createRealTeamDto.leagueId),
      logoClub: urlFile,
      ...(Object.values(parsedMainSquad).length > 0 ? { main: parsedMainSquad as TSquad } : []),
      ...(createRealTeamDto.bench ? { bench: toIdsArr(createRealTeamDto.bench) } : []),
      skills,
    };

    const playersIds = toIdsArr([...Object.values(createRealTeamDto.main), ...(createRealTeamDto.bench || [])]);

    const newTeam = await this.realTeamRepository.create(newRealTeam);
    await this.realPlayerRepository.updateMany({ _id: { $in: playersIds } }, { $set: { realTeamId: newTeam._id } });
    return { success: true };
  }

  async update(file: Express.Multer.File, updateRealTeamDto: UpdateRealTeamReqDto, id: string) {
    const realTeam = await this.realTeamRepository.validation(id);
    if (updateRealTeamDto.leagueId) await this.leagueRepository.validation(updateRealTeamDto.leagueId);

    const newRealTeamData = {
      ...pick(realTeam, ['leagueId', 'logoClub', 'clubName', 'key', 'main', 'bench']),
    };

    const players = await this.realTeamRepository.validateSquad(updateRealTeamDto);

    if (file) {
      const key = getKeyS3Helper(realTeam.logoClub);
      await this.s3Service.delete(key);
      const logoClubUrl = await this.s3Service.create(file, this.path);
      const updatedObj = { logoClub: logoClubUrl };
      Object.assign(newRealTeamData, { ...updatedObj });
    }

    const isEmptyBody = isEmpty(updateRealTeamDto);
    if (!isEmptyBody) Object.assign(newRealTeamData, updateRealTeamDto);

    // update skill of team
    const att = averageSkillPlayerHelper(attackers(players));
    const mid = averageSkillPlayerHelper(midfielders(players));
    const def = averageSkillPlayerHelper(defenders(players));
    const skills = { att, mid, def };
    Object.assign(newRealTeamData, skills);

    // https://mongoosejs.com/docs/tutorials/findoneandupdate.html
    await this.realTeamRepository.findOneAndUpdate(
      { _id: realTeam._id },
      {
        $set: newRealTeamData,
      },
      {
        new: true,
      },
    );

    const playersIds = toIdsArr([...Object.values(updateRealTeamDto.main), ...(updateRealTeamDto.bench || [])]);
    await this.realPlayerRepository.updateMany({ _id: { $in: playersIds } }, { $set: { realTeamId: toId(id) } });

    return { success: true };
  }

  async delete(id: string) {
    const realTeam = await this.realTeamRepository.validation(id);
    await this.realTeamRepository.findByIdAndRemove(id);

    if (realTeam.logoClub) {
      const key = getKeyS3Helper(realTeam.logoClub);
      await this.s3Service.delete(key);
    }

    await this.realPlayerRepository.updateMany(
      { realTeamId: toId(id) },
      {
        $set: { realTeamId: null },
      },
    );

    return { success: true };
  }
}
