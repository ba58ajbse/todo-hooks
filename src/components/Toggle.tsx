import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';

const Toggle: React.FC = () => {
  const darkState = useContext(ThemeContext);
  const handleClick = () => {
    darkState.setIsDark(!darkState.dark);
  };

  return (
    <button
      type="button"
      style={{
        background: darkState.theme.background,
        color: darkState.theme.foreground,
      }}
      onClick={handleClick}
    >
      I am styled by theme context!
    </button>
  );
};

export default Toggle;
