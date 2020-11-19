import React from 'react';
import './assets/App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Toggle from './components/Toggle';
import { useDark, ThemeContext } from './context/theme';
import { useTodo, TodoContext } from './context/todo';

const App: React.FC = () => {
  const darkState = useDark();
  const todoState = useTodo();
  return (
    <ThemeContext.Provider value={darkState}>
      <TodoContext.Provider value={todoState}>
        <div className="App">
          <div className="wrapper">
            <h1>Hello, React</h1>
            <Toggle />
            <Form />
            <TodoList />
          </div>
        </div>
      </TodoContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
