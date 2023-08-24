import { PipelineStage } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';

export const CommonUserLookup: PipelineStage.Lookup['$lookup'] = {
  from: ECollectionName.USERS,
  let: { userId: '$userId' },
  pipeline: [
    {
      $match: {
        $expr: {
          $eq: ['$_id', '$$userId'], // Comparing a related field to a variable
        },
      },
    },
    {
      $project: {
        _id: 1, // Specifying the fields you want to select
        username: 1,
      },
    },
  ],
  as: 'userId',
};
