import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { isEmpty } from 'lodash';
import getKeyS3Helper from 'src/common/helpers/get-key-s3.helper';
import { toId } from 'src/common/helpers/transform.helper';
import { S3Service } from 'src/services/s3/s3.service';

import { CountryRepository } from '../country/country.repository';
import { RealTeamRepository } from './../real-team/real-team.repository';
import { CreateLeagueReqDto } from './dto/create-league-req.dto';
import { QueryGetLeaguesReqDto } from './dto/query-get-leagues-req.dto';
import { UpdateLeagueReqDto } from './dto/update-league-req.dto';
import { LeagueRepository } from './league.repository';

@Injectable()
export class LeagueService {
  constructor(
    private readonly leagueRepository: LeagueRepository,
    private readonly countryRepository: CountryRepository,
    private readonly realTeamRepository: RealTeamRepository,
    private readonly s3Service: S3Service,
  ) {}

  private readonly path = 'public/leagues';

  async findAll(query: QueryGetLeaguesReqDto) {
    return await this.leagueRepository.getLeagues(query);
  }

  async findById(id: string) {
    await this.leagueRepository.validation(id);
    return await this.leagueRepository.getLeague(id);
  }

  async create(file: Express.Multer.File, createLeagueDto: CreateLeagueReqDto) {
    // load file in s3
    await this.countryRepository.validation(createLeagueDto.countryId.toString());
    const urlFile = await this.s3Service.create(file, this.path);
    await this.leagueRepository.createLeague(urlFile, createLeagueDto);

    return { success: true };
  }

  async update(id: string, updateLeagueDto: UpdateLeagueReqDto, file: Express.Multer.File) {
    const league = await this.leagueRepository.validation(id);
    const newLeagueData = {
      logoLeague: league.logoLeague,
      name: updateLeagueDto.name,
    };

    if (file) {
      const key = getKeyS3Helper(league.logoLeague);
      await this.s3Service.delete(key);
      const logoLeague = await this.s3Service.create(file, this.path);
      const updatedObj = { logoLeague };
      Object.assign(newLeagueData, updatedObj);
    }

    const isEmptyBody = isEmpty(updateLeagueDto);
    if (!isEmptyBody) Object.assign(newLeagueData, updateLeagueDto);

    // https://mongoosejs.com/docs/tutorials/findoneandupdate.html
    await this.leagueRepository.findOneAndUpdate(
      { _id: league._id },
      {
        $set: newLeagueData,
      },
      {
        new: true,
      },
    );

    return { success: true };
  }

  async delete(id: string) {
    const league = await this.leagueRepository.validation(id);

    if (league.logoLeague) {
      const key = getKeyS3Helper(league.logoLeague);
      await this.s3Service.delete(key);
    }

    await this.leagueRepository.findByIdAndRemove(id);
    await this.realTeamRepository.updateMany(
      { leagueId: toId(id) },
      {
        $set: {
          leagueId: null,
        },
      },
    );
    return { success: true };
  }
}
