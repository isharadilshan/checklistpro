import auth from '@react-native-firebase/auth';

/**
 * Method to sign in
 * @param email user email
 * @param password user password
 * @returns promise user signs in with username and email
 */
export const signUpWithEmailPassword = (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

/**
 * Method to sign in
 * @param email user email
 * @param password user password
 * @returns promise user signs in with username and email
 */
export const loginWithEmailPassword = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

/**
 * Method to sign out
 * @returns promise user signs out
 */
export const signOut = () => {
  return auth().signOut();
};
