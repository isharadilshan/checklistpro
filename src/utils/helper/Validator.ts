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
