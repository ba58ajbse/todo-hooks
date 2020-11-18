import React from 'react';
import './assets/App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Hello, React</h1>
        <Form />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
