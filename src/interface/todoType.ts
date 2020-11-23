export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodosState = {
  todoList: TodoType[];
  nextTodoId: number;
};

type AddTodoType = {
  type: 'ADD_TODO';
  payload: { id: number; title: string };
};

type RemoveTodoType = {
  type: 'REMOVE_TODO';
  payload: { id: number };
};

export type TodoActionType = AddTodoType | RemoveTodoType;

export type TodoProvider = {
  state: TodosState;
  dispatch: React.Dispatch<TodoActionType>;
};
