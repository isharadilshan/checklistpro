import {Axios} from '../rest-client';
import {TODOS} from '../endpoints';

// fetch todo list
export const getTodoList = () => {
  return Axios.get(`${TODOS}`);
};

// get todo by id
export const getExpenseById = (id) => {
  return Axios.get(`${TODOS}/${id}`);
};

// create new todo
export const createTodo = (data: {}) => {
  return Axios.post(`${TODOS}`, data);
};

// update existing expense
export const updateExpense = (id: string, data: {}) => {
  return Axios.put(`${TODOS}/${id}`, data);
};

// delete existing todo
export const deleteTodo = (id: string) => {
  return Axios.delete(`${TODOS}/${id}`);
};
