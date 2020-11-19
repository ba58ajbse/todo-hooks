import React from 'react';
import './assets/App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Toggle from './components/Toggle';
import { useDark, ThemeContext } from './context/theme';

const App: React.FC = () => {
  const darkState = useDark();
  return (
    <ThemeContext.Provider value={darkState}>
      <div className="App">
        <div className="wrapper">
          <h1>Hello, React</h1>
          <Toggle />
          <Form />
          <TodoList />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
