import { PipelineStage } from 'mongoose';
import { ECollectionName } from 'src/common/constants/collection-name.enum';

import { CommonCountryLookup } from './common-country.lookup';

export const CommonRealPlayerLookup = (localField: string, as: string): PipelineStage.Lookup['$lookup'] => ({
  from: ECollectionName.REAL_PLAYERS,
  localField, // Use the value from the unwound mainArray
  foreignField: '_id',
  as, // Use a different name for the array
  pipeline: [
    {
      $lookup: CommonCountryLookup,
    },
    {
      $project: {
        _id: 1, // Specifying the fields you want to select,
        name: 1,
        number: 1,
        country: { $arrayElemAt: ['$countryId', 0] },
        age: 1,
        positions: 1,
        skills: 1,
        rating: 1,
      },
    },
  ],
});
