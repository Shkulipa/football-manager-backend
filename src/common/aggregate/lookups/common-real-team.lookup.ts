import { PipelineStage } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';

export const CommonRealTeamLookup: PipelineStage.Lookup['$lookup'] = {
  from: ECollectionName.REAL_TEAMS,
  let: { realTeamId: '$realTeamId' },
  pipeline: [
    {
      $match: {
        $expr: {
          $eq: ['$_id', '$$realTeamId'], // Comparing a related field to a variable
        },
      },
    },
    {
      $project: {
        _id: 1, // Specifying the fields you want to select
        clubName: 1,
        logoClub: 1,
      },
    },
  ],
  as: 'realTeamId',
};
