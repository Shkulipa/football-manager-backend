import { Types } from 'mongoose';

/**
 * toId - using for adduction string to mongo object
 * @param {string} idStr - id in string
 * @returns {ObjectId} - mongo object id
 */
export const toId = (idStr: string | Types.ObjectId): Types.ObjectId => {
  return new Types.ObjectId(idStr);
};

/**
 * toIdsArr - using for adduction arr of strings to arr of mongo objects
 * @param {(string | Types.ObjectId)[]} idStrArr - array of ids strings
 * @returns {ObjectId[] } - array of mongo object ids
 */
export const toIdsArr = (idStrArr: (string | Types.ObjectId)[]): Types.ObjectId[] => {
  return idStrArr.map((id) => toId(id));
};

/**
 * parsedIdsWithNull - using in get requests for parse query params
 * @param {string[]} arr - array of ids strings
 * @returns {(ObjectId | null)[] } - array of mongo object ids or null
 */
export const parsedIdsWithNull = (arr?: string[]): (Types.ObjectId | null)[] =>
  arr
    ? arr.map((v) => {
        if (v === 'null') return null;
        return toId(v);
      })
    : [];
