import React, { useContext } from 'react';
import { TodosContext } from '../context/reducer';

type Props = {
  todo: { id: number; title: string; completed: boolean };
};
const Todo: React.FC<Props> = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);
  return (
    <li key={todo.id} className={todo.completed ? 'todo-row done' : 'todo-row'}>
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        className="checkbox-done"
        checked={todo.completed}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
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
