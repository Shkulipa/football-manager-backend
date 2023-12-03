import { IUserData } from 'src/common/interfaces/user-data.interfaces';

export interface IMsgDto {
  id: string;
  user: IUserData;
  msg: string;
  date: number;
}
