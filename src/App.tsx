import React, { useReducer } from 'react';
import './assets/App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Toggle from './components/Toggle';
import { useDark, ThemeContext } from './context/theme';
import { useTodo, TodoContext } from './context/todo';
import { Store, reducer, initialState } from './context/reducer';

const App: React.FC = () => {
  const darkState = useDark();
  const todoState = useTodo();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={darkState}>
      <TodoContext.Provider value={todoState}>
        <Store.Provider value={{ state, dispatch }}>
          <div className="App">
            <div className="wrapper">
              <h1>Hello, React</h1>
              <Toggle />
              <Form />
              <TodoList />
            </div>
          </div>
        </Store.Provider>
      </TodoContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
