import React, { useContext } from 'react';
import { TodosContext } from '../context/reducer';

type Props = {
  todo: { id: number; title: string };
};
const Todo: React.FC<Props> = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);
  return (
    <li key={todo.id}>
      <p>{todo.title}</p>
      <button
        type="button"
        className="remove-btn"
        onClick={() =>
          dispatch({ type: 'REMOVE_TODO', payload: { id: todo.id } })
        }
      >
        <span className="batsu" />
      </button>
    </li>
  );
};

export default Todo;
