import React, { useState } from 'react';

const useInput = (
  initialValue = ''
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [inputData, setInputData] = useState<string>(initialValue);

  const value = inputData;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputData(e.target.value);
  const reset = () => setInputData('');

  return [value, onChange, reset];
};

export default useInput;
