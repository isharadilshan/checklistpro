import {getTodoList} from '../../../services/todos';
import {ToDo} from '../../../shared/models';
import {GET_TODOS, SET_TODOS} from '../../action-types';

export const getTodos = () => {
  return {type: GET_TODOS};
};

export const setTodos = (payload: ToDo[]) => {
  return {type: SET_TODOS, payload};
};

export const fetchTodoList = () => {
  return async (dispatch) => {
    try {
      dispatch(getTodos());
      const response = await getTodoList();
      dispatch(setTodos(response.data.data || []));
      return true;
    } catch (err) {
      dispatch(setTodos([]));
      return false;
    }
  };
};
