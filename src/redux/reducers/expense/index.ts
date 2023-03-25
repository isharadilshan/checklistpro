import {GET_EXPENSES, SET_EXPENSES} from '../../action-types';

export const expenseInitialState = {
  expenseList: [],
  isFetchingExpenses: false,
};

const expenseReducer = (state = expenseInitialState, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {...state, isFetchingExpenses: true};
    case SET_EXPENSES:
      return {...state, isFetchingExpenses: false, expenseList: action.payload};
    default:
      return state;
  }
};

export default expenseReducer;
