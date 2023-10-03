import { Request } from 'express';

import { IUserData } from './user-data.interfaces';

export interface ExpressRequestInterface extends Request {
  user?: IUserData;
}
