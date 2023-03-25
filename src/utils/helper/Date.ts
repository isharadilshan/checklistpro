import moment from 'moment';

/**
 * Method to return date in required format by given todo item
 * @param todoItem
 * @returns create date in YYYY-MM-DD format
 * todo change the function name to meaningful one
 */
export const getDateName = (item: any) =>
  moment(item.createTime).format('YYYY-MM-DD');
