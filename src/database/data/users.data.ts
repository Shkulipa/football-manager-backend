import { Types } from 'mongoose';

const { ObjectId } = Types;

export const usersData = [
  {
    _id: new ObjectId('64ee634dd0fc26396f0f2715'),
    email: 'admin@gmail.com',
  },
  {
    _id: new ObjectId('64ee63566cfe398fb2511bd1'),
    email: 'user-1@gmail.com',
  },
  {
    _id: new ObjectId('64ee6361a97d326da4b83a72'),
    email: 'user-2@gmail.com',
  },
  {
    _id: new ObjectId('64ccddefd3900d862c3b7e53'),
    email: 'user-3@gmail.com',
  },
];
