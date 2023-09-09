import { BadRequestException } from '@nestjs/common';
import { Types } from 'mongoose';

export const isExistPlayers = (
  userPlayersIds: (string | Types.ObjectId)[],
  foundedPlayers: (string | Types.ObjectId)[],
) => {
  const nonExistingIds = userPlayersIds.filter((id) => !foundedPlayers.includes(id));
  const idsNotFoundPlayers = nonExistingIds.join(',');
  if (nonExistingIds.length !== 0) throw new BadRequestException(`Players with ids: ${idsNotFoundPlayers} not found`);
};
