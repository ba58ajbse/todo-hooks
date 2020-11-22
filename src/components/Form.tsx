import React, { useContext } from 'react';
import useInput from '../hooks/useInput';
import { Store } from '../context/reducer';

const Form: React.FC = () => {
  const [value, onChange, reset] = useInput();
  const { state, dispatch } = useContext(Store);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') return;
    dispatch({ type: 'ADD_TODO', payload: { id: state.length, title: value } });
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
