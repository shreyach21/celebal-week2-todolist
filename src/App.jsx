import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import { TodoContextProvider } from "./context";
import TodoFeatures from "./components/TodoFeatures";
const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? {
              ...prevTodo,
              completed: !prevTodo.completed,
            }
          : prevTodo
      )
    );
  };
  useEffect(() => {
    const lstodos = JSON.parse(localStorage.getItem("todos"));
    if (lstodos && lstodos.length !== 0) setTodos(lstodos);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{
        addTodo,
        updateTodo,
        removeTodo,
        toggleComplete,
        todos,
      }}
    >
      <div className="min-h-screen w-full py-10 bg-blue-100">
        <div className="lg:max-w-4xl mx-auto py-4 rounded-md bg-slate-100 shadow-md text-slate-600 shadow-black/20 border-t-2 border-white/35 bg-white/55 ">
          <h1 className="uppercase font-bold text-center py-6 text-2xl">
            Personal todo app
          </h1>
          <TodoForm />
          <TodoFeatures />
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default App;
