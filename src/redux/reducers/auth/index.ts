import {
  SET_USER_AUTHENTICATED,
  GET_USER_INFO,
  SET_USER_INFO,
} from '../../action-types';

export const authInitialState = {
  userInfo: {},
  isFetchingUser: false,
  isAuthenticated: false,
};

const authReducer = (
  state = authInitialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case SET_USER_AUTHENTICATED:
      return {...state, isAuthenticated: action.payload};
    case GET_USER_INFO:
      return {...state, isFetchingUser: true};
    case SET_USER_INFO:
      return {...state, isFetchingUser: false, userInfo: action.payload};
    default:
      return state;
  }
};

export default authReducer;
