import { createContext, useState } from 'react';

type TodoContext = {
  todoList: {
    id: number;
    title: string;
  }[];
  addTodo: (value: string) => void;
};

const initialContext: TodoContext = {
  todoList: [],
  addTodo: () => {}, // eslint-disable-line  @typescript-eslint/no-empty-function
};

export const TodoContext = createContext<TodoContext>(initialContext);

export const useTodo = (): TodoContext => {
  const [todoList, setTodoList] = useState(initialContext.todoList);
  const [idNum, setIdNum] = useState(0);

  const addTodo = (value: string) => {
    setTodoList([...todoList, { id: idNum, title: value }]);
    setIdNum(idNum + 1);
  };

  return {
    todoList,
    addTodo,
  };
};
