import {Axios} from '../rest-client';
import {EXPENSES} from '../endpoints';

// get expenses list
export const getExpenseList = () => {
  return Axios.get(`${EXPENSES}`);
};

// create new expense
export const createExpense = (data: any) => {
  return Axios.post(`${EXPENSES}`, data);
};

// delete existing expense
export const deleteExpense = (id: string) => {
  return Axios.delete(`${EXPENSES}/${id}`);
};
