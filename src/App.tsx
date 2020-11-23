import React, { useReducer } from 'react';
import './assets/App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Toggle from './components/Toggle';
import { useDark, ThemeContext } from './context/theme';
import {
  todoReducer,
  initialTodosState,
  TodosContext,
} from './context/reducer';

const App: React.FC = () => {
  const darkState = useDark();
  const [state, dispatch] = useReducer(todoReducer, initialTodosState);
  return (
    <ThemeContext.Provider value={darkState}>
      <TodosContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <div className="wrapper">
            <h1>Hello, React</h1>
            <Toggle />
            <Form />
            <TodoList />
          </div>
        </div>
      </TodosContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
