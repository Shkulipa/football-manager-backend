import { Types } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';

interface IBuffer {
  type: 'string';
  data: number[];
}

export interface IFile extends Omit<Express.Multer.File, 'buffer'> {
  file: Buffer;
  buffer: IBuffer;
}

export interface IUploadFileDataDto {
  file: Buffer;
  itemId: string | Types.ObjectId;
  type:
    | ECollectionName.COUNTRIES
    | ECollectionName.LEAGUES
    | ECollectionName.REAL_PLAYERS
    | ECollectionName.USERS_TEAM
    | ECollectionName.REAL_TEAMS;
}

export interface IJobUploadFile extends Pick<IUploadFileDataDto, 'itemId' | 'type'> {
  file: IFile;
}
