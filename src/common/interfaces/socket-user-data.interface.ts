import { Socket } from 'socket.io';

import { IUserData } from './user-data.interfaces';

export type SocketUserData = Socket & { user: IUserData };
