import {getExpenseList} from '../../../services/expenses';
import {GET_EXPENSES, SET_EXPENSES} from '../../action-types';

export const getExpenses = () => {
  return {type: GET_EXPENSES};
};

export const setExpenses = (payload) => {
  return {type: SET_EXPENSES, payload};
};

export const fetchExpenseList = () => {
  return async (dispatch) => {
    try {
      dispatch(getExpenses());
      const response = await getExpenseList();
      dispatch(setExpenses(response.data.data || []));
      return true;
    } catch (err) {
      console.log(
        'ERR_RRR ----------------------------------------------------------------',
        err,
      );
      dispatch(setExpenses([]));
      return false;
    }
  };
};
