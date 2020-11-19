import React, { useContext } from 'react';
import { TodoContext } from '../context/todo';
import Todo from './Todo';

type Todo = {
  id: number;
  title: string;
};

const TodoList: React.FC = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <ul className="todolist-wrapper">
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
