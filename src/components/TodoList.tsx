import React from 'react';
import Todo from './Todo';
import { useTodoContext } from '../context/todoList';

type Todo = {
  id: number;
  title: string;
};
const TodoList: React.FC = () => {
  const { todoList } = useTodoContext();

  return (
    <ul className="todolist-wrapper">
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
