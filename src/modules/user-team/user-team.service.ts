import { Injectable } from '@nestjs/common';

import { CreateUserTeamDto } from './dto/create-user-team.dto';
import { UpdateUserTeamDto } from './dto/update-user-team.dto';

@Injectable()
export class UserTeamService {
  create(createUserTeamDto: CreateUserTeamDto) {
    return 'This action adds a new userTeam';
  }

  findAll() {
    return `This action returns all userTeam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTeam`;
  }

  update(id: number, updateUserTeamDto: UpdateUserTeamDto) {
    return `This action updates a #${id} userTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTeam`;
  }
}
