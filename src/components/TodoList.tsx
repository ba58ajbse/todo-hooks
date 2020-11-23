import React, { useContext } from 'react';
import { TodosContext } from '../context/reducer';
import Todo from './Todo';

const TodoList: React.FC = () => {
  const { state } = useContext(TodosContext);

  return (
    <ul className="todolist-wrapper">
      {state.todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
