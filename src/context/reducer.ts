import React, { createContext } from 'react';

export type TodoType = {
  id: number;
  title: string;
};

export type ActionType = {
  type: 'ADD_TODO';
  payload: TodoType;
};

export const initialState: TodoType[] = [];

export const Store = createContext(
  {} as {
    state: TodoType[];
    dispatch: React.Dispatch<ActionType>;
  }
);

export const reducer: React.Reducer<TodoType[], ActionType> = (
  state: TodoType[],
  action: ActionType
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.payload.id, title: action.payload.title }];
    default:
      return state;
  }
};
