export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodosState = {
  todoList: TodoType[];
  nextTodoId: number;
};

export type TodoActionType = {
  type: 'ADD_TODO';
  payload: { id: number; title: string };
};

export type TodoProvider = {
  state: TodosState;
  dispatch: React.Dispatch<TodoActionType>;
};
