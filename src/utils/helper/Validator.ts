import {EMAIL_VALIDATE_REGEX} from '../constants';

/**
 * Method to validate email using regex
 * @param email
 * @returns boolean
 */
export const validateEmail = (email: string) => {
  return EMAIL_VALIDATE_REGEX.test(email);
};

/**
 * Method to validate password length
 * @param password
 * @returns boolean
 */
export const validatePassword = (password: string) => {
  return password.length >= 8;
};

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (
    value !== null &&
    typeof value === 'object' &&
    !Object.keys(value).length
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * @method isNumber
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Number Check
 */
export const isNumber = (value: any) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
