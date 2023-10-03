/**
 * getKeyS3Helper - get key from url to file in S3
 * @param {string} url - url to the file
 * @returns {string} - get key from url
 */
const getKeyS3Helper = (url: string): string => url.split('.com/')[1];

export default getKeyS3Helper;
