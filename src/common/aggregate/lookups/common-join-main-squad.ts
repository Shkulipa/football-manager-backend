import { PipelineStage } from 'mongoose';

import { CommonRealPlayerLookup } from './common-real-player.lookup';

export const CommonJoinMainSquad: PipelineStage.FacetPipelineStage[] = [
  {
    $addFields: {
      mainArray: { $objectToArray: '$main' }, // Convert main object to an array of key-value pairs
    },
  },
  {
    $addFields: {
      mainArray: {
        $filter: {
          input: '$mainArray',
          as: 'item',
          cond: { $ne: ['$$item.v', null] },
        },
      },
    },
  },
  {
    $lookup: CommonRealPlayerLookup('mainArray.v', 'mainArrayObj'),
  },
  {
    $addFields: {
      mainWithJoinedValues: {
        $map: {
          input: '$mainArray',
          as: 'entry',
          in: {
            k: '$$entry.k',
            v: { $arrayElemAt: ['$mainArrayObj', { $indexOfArray: ['$mainArrayObj._id', '$$entry.v'] }] },
          },
        },
      },
    },
  },
  {
    $addFields: {
      main: { $arrayToObject: '$mainWithJoinedValues' },
    },
  },
  {
    $project: {
      mainWithJoinedValues: 0,
      mainArrayObj: 0,
      mainArray: 0,
    },
  },
];
