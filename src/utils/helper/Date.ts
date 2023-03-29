import moment from 'moment';

/**
 * Method to return date in human readable format
 * @param timestamp
 * @returns date in Monday, June 9 2014 9:32 PM format
 */
export const getHumanReadableDate = (timestamp: number) =>
  moment(timestamp).format('LLLL');

/**
 * Method to return date in required format for given timestamp
 * @param timestamp
 * @returns date in 2023-03-29T17:09:37.358Z format
 */
export const timestampToString = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toISOString().split('T')[0];
};
