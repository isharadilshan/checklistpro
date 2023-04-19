import {Axios} from '../rest-client';
import {TODOS} from '../endpoints';

// fetch list
export const getTodoList = () => {
  return Axios.get(`${TODOS}`);
};

// get by id
export const getTodoById = (id) => {
  return Axios.get(`${TODOS}/${id}`);
};

// create new
export const createTodo = (data: {}) => {
  return Axios.post(`${TODOS}`, data);
};

// update existing
export const updateTodo = (id: string, data: {}) => {
  return Axios.put(`${TODOS}/${id}`, data);
};

// delete existing
export const deleteTodo = (id: string) => {
  return Axios.delete(`${TODOS}/${id}`);
};
