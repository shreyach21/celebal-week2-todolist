import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../context";
import Features from "./Features";

const Todos = () => {
  const { todos } = useTodo();
  const [filterOption, setFilterOption] = useState("default");
  const [sortOption, setSortOption] = useState("default");

  const sortTodos = (todos) => {
    if (sortOption === "default") return todos;
    return todos.sort((a, b) => {
      const t1 = a.todo.toLowerCase();
      const t2 = b.todo.toLowerCase();
      if (sortOption === "ascending") {
        return t1 < t2 ? -1 : t1 > t2 ? 1 : 0;
      } else if (sortOption === "descending") {
        return t1 > t2 ? -1 : t1 < t2 ? 1 : 0;
      }
    });
  };

  const filteredTodos = todos.filter((todo) =>
    filterOption === "default"
      ? true
      : filterOption === "complete"
      ? todo.completed
      : !todo.completed
  );

  const sortedTodos = sortTodos(filteredTodos);

  return (
    <div className="mb-8 my-2 w-[90%] mx-auto">
      {todos.length === 0 ? (
        <p className="text-2xl text-center text-slate-400 tracking-widest">
          ..No todos available..
        </p>
      ) : (
        <div className="w-full">
          <Features
            filterOption={filterOption}
            setFilterOption={setFilterOption}
            setSortOption={setSortOption}
          />
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
