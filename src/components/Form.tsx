import React from 'react';
import useInput from '../hooks/useInput';

const Form: React.FC = () => {
  const [value, onChange, reset] = useInput();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') return;
    // eslint-disable-next-line no-console
    console.log({ value });
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
