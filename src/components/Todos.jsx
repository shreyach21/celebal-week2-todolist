import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../context";

const Todos = ({ filterOption, sortTodos }) => {
  const { todos } = useTodo();

  const filteredTodos = todos.filter((todo) =>
    filterOption === "default"
      ? true
      : filterOption === "complete"
      ? todo.completed
      : !todo.completed
  );

  const sortedTodos = sortTodos(filteredTodos);

  return (
    <div className="my-8 w-[90%] mx-auto">
      {sortedTodos.length === 0 ? (
        <p className="text-2xl text-center my-8 text-slate-400 tracking-widest">
          ..No todos available..
        </p>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold text-center mb-8 shadow-md w-[7rem] mx-auto border-r-2 border-b-2 border-black/15 rounded-md px-5 py-1 text-slate-600 tracking-wider capitalize bg-white/55">
            Todos
          </h1>
          <div>
            {sortedTodos.map((todo) => (
              <div key={todo.id}>
                <TodoItem {...todo} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
