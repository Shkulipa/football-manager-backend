import { Types } from 'mongoose';

type TArrIds = (string | Types.ObjectId)[];

/**
 * hasDuplicates - using for checking duplicates id in arr
 * @param {string[]} ids - array if ids
 * @returns {boolean} - is true of false of duplications
 */
export const hasDuplicatesIds = (ids: TArrIds): boolean => {
  return new Set(ids).size !== ids.length;
};

/**
 * hasDuplicates - using for checking duplicates id in arrays
 * @param {string[]} ids1 - array if ids
 * @param {string[]} ids2 - array if ids
 * @returns {boolean} - is true of false of duplications
 */
export const hasDuplicatesArrsIds = (ids1: TArrIds, ids2: TArrIds): boolean => {
  const set1 = new Set(ids1);
  const set2 = new Set(ids2);

  for (const num of set1) {
    if (set2.has(num)) {
      return true;
    }
  }

  return false;
};
