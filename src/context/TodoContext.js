import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: Date.now(),
      todo: "",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  removeTodo: (id) => {},
  toggleComplete: (id) => {},
  sortTodos: () => {},
  filterTodos: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;
