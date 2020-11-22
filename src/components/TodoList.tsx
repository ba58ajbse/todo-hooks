import React, { useContext } from 'react';
import { Store } from '../context/reducer';
import Todo from './Todo';

type Todo = {
  id: number;
  title: string;
};

const TodoList: React.FC = () => {
  const { state } = useContext(Store);

  return (
    <ul className="todolist-wrapper">
      {state.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
