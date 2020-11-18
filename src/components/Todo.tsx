import React from 'react';

type Props = {
  todo: { id: number; title: string };
};
const Todo: React.FC<Props> = ({ todo }) => {
  return (
    <li key={todo.id}>
      <p>{todo.title}</p>
    </li>
  );
};

export default Todo;
