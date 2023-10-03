import { BadRequestException } from '@nestjs/common';

import { UpdateUserTeamReqDto } from '../dto/update-user-team-req.dto';

export const checkDuplicatesPlayerHelper = (updateUserTeamDto: UpdateUserTeamReqDto) => {
  const { main, bench, reserve } = updateUserTeamDto;

  const mainSquad = main ? Object.values(main) : [];
  const benchSquad = bench || [];
  const reserveSquad = reserve || [];
  const allPlayers = [...mainSquad, ...benchSquad, ...reserveSquad];
  const findDuplicates = allPlayers.filter((item, index) => allPlayers.indexOf(item) !== index);
  if (findDuplicates.length > 0)
    throw new BadRequestException(`Players with ids: ${findDuplicates.join(', ')} is duplicate`);
};
