import React from 'react';
import './assets/App.css';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Hello, React</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
