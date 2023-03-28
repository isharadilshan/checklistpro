import {Axios} from '../rest-client';
import {EXPENSES} from '../endpoints';
import {Expense} from '../../shared/models';

// get expenses list
export const getExpenseList = () => {
  return Axios.get(`${EXPENSES}`);
};

// get expenses by id
export const getExpenseById = (id) => {
  return Axios.get(`${EXPENSES}/${id}`);
};

// create new expense
export const createExpense = (data: {}) => {
  return Axios.post(`${EXPENSES}`, data);
};

// update existing expense
export const updateExpense = (id: string, data: {}) => {
  return Axios.put(`${EXPENSES}/${id}`, data);
};

// delete existing expense
export const deleteExpense = (id: string) => {
  return Axios.delete(`${EXPENSES}/${id}`);
};
