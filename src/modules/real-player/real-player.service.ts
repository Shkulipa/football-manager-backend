import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import getKeyS3Helper from 'src/common/helpers/get-key-s3.helper';
import { toId } from 'src/common/helpers/transform.helper';
import { S3Service } from 'src/services/s3/s3.service';

import { CountryRepository } from '../country/country.repository';
import { RealTeamRepository } from '../real-team/real-team.repository';
import { CreateRealPlayerReqDto } from './dto/create-real-player-req.dto';
import { QueryGetRealPlayersReqDto } from './dto/query-get-real-players-req.dto';
import { UpdateRealPlayerReqDto } from './dto/update-real-player-req.dto';
import { RealPlayerRepository } from './real-player.repository';

@Injectable()
export class RealPlayerService {
  constructor(
    private readonly realPlayerRepository: RealPlayerRepository,
    private readonly realTeamRepository: RealTeamRepository,
    private readonly countryRepository: CountryRepository,
    private readonly s3Service: S3Service,
  ) {}

  private readonly path = 'public/players-photos';

  async findAll(query: QueryGetRealPlayersReqDto) {
    return await this.realPlayerRepository.getRealPlayers(query);
  }

  async findById(id: string) {
    await this.realPlayerRepository.validation(id);
    return await this.realPlayerRepository.getRealPlayer(id);
  }

  async create(createRealPlayerReqDto: CreateRealPlayerReqDto, file: Express.Multer.File) {
    // check on existing country & league
    const { countryId, realTeamId } = createRealPlayerReqDto;
    await this.countryRepository.validation(countryId.toString());
    if (realTeamId) await this.realTeamRepository.validation(realTeamId.toString());

    // load img
    let urlFile = '';
    if (file) {
      urlFile = await this.s3Service.create(file, this.path);
    }

    await this.realPlayerRepository.createNewRealPlayer(createRealPlayerReqDto, urlFile);

    return { success: true };
  }

  async update(id: string, updateRealPlayerReqDto: UpdateRealPlayerReqDto, file: Express.Multer.File) {
    const { countryId, realTeamId } = updateRealPlayerReqDto;
    const { agility, jumping, passing, penalty_taking, saving, shooting, tackling, strength } = updateRealPlayerReqDto;
    const skills = { agility, jumping, passing, penalty_taking, saving, shooting, tackling, strength };

    if (countryId) await this.countryRepository.validation(id);
    if (realTeamId) await this.realTeamRepository.validation(id);
    const realPlayer = await this.realPlayerRepository.validation(id);

    const newRealPlayerData = {
      name: realPlayer.name,
      number: realPlayer.number,
      position: realPlayer.positions,
      photo: realPlayer.photo,
      skills,
      countryId: realPlayer.countryId,
      realTeamId: realPlayer.realTeamId,
    };

    if (file) {
      const key = getKeyS3Helper(newRealPlayerData.photo);
      await this.s3Service.delete(key);
      const photo = await this.s3Service.create(file, this.path);
      const updatedObj = { photo };
      Object.assign(newRealPlayerData, updatedObj);
    }

    const isEmptyBody = isEmpty(updateRealPlayerReqDto);
    if (!isEmptyBody) Object.assign(newRealPlayerData, updateRealPlayerReqDto);

    await this.realPlayerRepository.findOneAndUpdate(
      { _id: toId(id) },
      {
        $set: newRealPlayerData,
      },
      {
        new: true,
      },
    );

    // delete from main or bench squad
    if (realPlayer.realTeamId.toString() !== id) {
      await this.realTeamRepository.deletePlayerFromRealTeam(id);
    }

    return { success: true };
  }

  async delete(id: string) {
    const realPlayer = await this.realPlayerRepository.validation(id);

    if (realPlayer.photo) {
      const key = getKeyS3Helper(realPlayer.photo);
      await this.s3Service.delete(key);
    }

    await this.realPlayerRepository.findByIdAndRemove(id);
    await this.realTeamRepository.deletePlayerFromRealTeam(id);
    return { success: true };
  }
}
