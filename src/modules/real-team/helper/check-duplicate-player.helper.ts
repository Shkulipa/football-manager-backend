import { BadRequestException } from '@nestjs/common';
import { hasDuplicatesArrsIds, hasDuplicatesIds } from 'src/common/helpers/duplicates.helper';

import { CreateRealTeamReqDto } from '../dto/create-real-team-req.dto';
import { UpdateRealTeamReqDto } from '../dto/update-real-team-req.dto';

const checkDuplicatePlayerHelper = (realTeamDto: UpdateRealTeamReqDto | CreateRealTeamReqDto) => {
  const idsMain = realTeamDto.main ? Object.values(realTeamDto.main) : [];
  const idsBench = realTeamDto.bench ? Object.values(realTeamDto.bench) : [];

  const isMain = idsMain.length > 0;
  const isBench = idsBench.length > 0;
  const msgErrorDuplicate = 'Player repeated twice or more';
  if (isMain) {
    const isDuplicates = hasDuplicatesIds(idsMain);
    if (isDuplicates) throw new BadRequestException(msgErrorDuplicate);
  }
  if (isBench) {
    const isDuplicates = hasDuplicatesIds(idsBench);
    if (isDuplicates) throw new BadRequestException(msgErrorDuplicate);
  }
  if (isMain && isBench) {
    const isDuplicates = hasDuplicatesArrsIds(idsMain, idsBench);
    if (isDuplicates) throw new BadRequestException('A player cannot be in main & bench at the same time.');
  }
};

export default checkDuplicatePlayerHelper;
