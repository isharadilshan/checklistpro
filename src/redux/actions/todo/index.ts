import {getTodoList} from '../../../services/todos';
import {GET_TODOS, SET_TODOS} from '../../action-types';

export const getTodos = () => {
  return {type: GET_TODOS};
};

export const setTodos = (payload) => {
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
      console.log(
        'TODO LIST FETCH ERROR----------------------------------------------------------------',
        err,
      );
      dispatch(setTodos([]));
      return false;
    }
  };
};
