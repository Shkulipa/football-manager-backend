import { PipelineStage, Types } from 'mongoose';

/**
 * commonItemsMatch - using for parse match for getting result with array that contain mongo ids & null
 * @param {(Types.ObjectId | null)[]} arr - array of mongo ids or null
 * @returns {PipelineStage.Match['$match']} - PipelineStage of mongoose
 */
export const commonItemsMatch = (arr: (Types.ObjectId | null)[], fieldName: string): PipelineStage.Match['$match'] =>
  arr.length > 0
    ? {
        $expr: {
          $or: [
            arr.length > 0 && {
              $in: [`$${fieldName}`, arr.filter((item) => item !== null)],
            },
            arr.length > 0 &&
              arr.includes(null) && {
                $eq: [`$${fieldName}`, null],
              },
          ],
        },
      }
    : {};
