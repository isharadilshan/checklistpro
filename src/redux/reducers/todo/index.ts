import {GET_TODOS, SET_TODOS} from '../../action-types';

export const todoInitialState = {
  todoList: [],
  isFetchingTodos: false,
};

const todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {...state, isFetchingTodos: true};
    case SET_TODOS:
      return {...state, isFetchingTodos: false, todoList: action.payload};
    default:
      return state;
  }
};

export default todoReducer;
