import React from 'react';
import Todo from './Todo';

type Todo = {
  id: number;
  title: string;
};
const TodoList: React.FC = () => {
  const todos: Todo[] = [
    { id: 0, title: 'JavaScript' },
    { id: 1, title: 'React' },
    { id: 2, title: 'Vue' },
  ];

  return (
    <ul className="todolist-wrapper">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
