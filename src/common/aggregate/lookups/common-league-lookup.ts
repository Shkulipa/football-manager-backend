import { PipelineStage } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';

import { CommonCountryLookup } from './common-country.lookup';

export const CommonLeagueLookup: PipelineStage.FacetPipelineStage[] = [
  {
    $lookup: {
      from: ECollectionName.LEAGUES,
      let: { leagueId: '$leagueId' },
      as: 'leagueId',
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ['$_id', '$$leagueId'], // Comparing a related field to a variable
            },
          },
        },
        {
          $lookup: CommonCountryLookup,
        },
        {
          $project: {
            _id: 1, // Specifying the fields you want to select,
            name: 1,
            logoLeague: 1,
            countryId: { $arrayElemAt: ['$countryId', 0] },
          },
        },
      ],
    },
  },
  {
    $addFields: {
      leagueId: {
        $cond: {
          if: { $eq: ['$leagueId', []] }, // Check if realTeamId is an empty array
          then: null, // If true, set leagueId to null
          else: '$leagueId', // If false, keep the original value of leagueId
        },
      },
    },
  },
];
