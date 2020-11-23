import { createContext } from 'react';
import { TodosState, TodoActionType } from '../interface/todoType';

export const initialTodosState: TodosState = {
  todoList: [],
  nextTodoId: 0,
};

export const TodosContext = createContext(
  {} as {
    state: TodosState;
    dispatch: React.Dispatch<TodoActionType>;
  }
);

export const todoReducer = (
  state: TodosState,
  action: TodoActionType
): TodosState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            title: action.payload.title,
            completed: false,
          },
        ],
        nextTodoId: state.nextTodoId + 1,
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case 'TOGGLE_TODO_STATE':
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};
