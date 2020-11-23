import React, { useContext } from 'react';
import useInput from '../hooks/useInput';
import { TodosContext } from '../context/reducer';

const Form: React.FC = () => {
  const [value, onChange, reset] = useInput();
  const { state, dispatch } = useContext(TodosContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') return;
    dispatch({
      type: 'ADD_TODO',
      payload: { id: state.nextTodoId, title: value },
    });
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
