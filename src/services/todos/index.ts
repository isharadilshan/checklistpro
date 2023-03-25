import {Axios} from '../rest-client';
import {TODOS} from '../endpoints';

// fetch todo list
export const getTodoList = () => {
  return Axios.get(`${TODOS}`);
};

// create new todo
export const createTodo = (data: any) => {
  return Axios.post(`${TODOS}`, data);
};

// delete existing todo
export const deleteTodo = (id: string) => {
  return Axios.delete(`${TODOS}/${id}`);
};
