import React, { useState, createContext, useContext } from 'react';

type TodoListType = {
  todoList: {
    id: number;
    title: string;
  }[];
  setTodoList: (value: []) => void;
};

const TodoContext = createContext<TodoListType>({
  todoList: [],
  setTodoList: () => {}, //eslint-disable-line
});

const initialState = [
  { id: 0, title: 'JavaScript' },
  { id: 1, title: 'React' },
  { id: 2, title: 'Vue' },
];

const TodoProvider: React.FC = ({ children }) => {
  const [todoList, setTodoList] = useState(initialState);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => useContext<TodoListType>(TodoContext);

export { TodoProvider, useTodoContext };
