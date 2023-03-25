import {combineReducers} from 'redux';
import authReducer, {authInitialState} from './auth';
import todoReducer, {todoInitialState} from './todo';
import expenseReducer, {expenseInitialState} from './expense';

export const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  expense: expenseReducer,
});

export const getInitialState = () => ({
  auth: authInitialState,
  todo: todoInitialState,
  expense: expenseInitialState,
});
