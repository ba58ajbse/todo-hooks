import React, { useContext } from 'react';
import { TodoContext } from '../context/todo';
import useInput from '../hooks/useInput';

const Form: React.FC = () => {
  const [value, onChange, reset] = useInput();
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') return;
    addTodo(value);
    reset();
  };
  return (
    <form className="form-wrap" onSubmit={handleSubmit}>
      <button type="submit" className="add-btn">
        <span className="plus" />
      </button>
      <input
        type="text"
        className="add-input"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default Form;
