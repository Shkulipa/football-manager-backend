import { PipelineStage } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';

export const CommonCountryLookup: PipelineStage.Lookup['$lookup'] = {
  from: ECollectionName.COUNTRIES,
  let: { countryId: '$countryId' },
  pipeline: [
    {
      $match: {
        $expr: {
          $eq: ['$_id', '$$countryId'], // Comparing a related field to a variable
        },
      },
    },
    {
      $project: {
        _id: 1, // Specifying the fields you want to select
        country: 1,
        flag: 1,
      },
    },
  ],
  as: 'countryId',
};
