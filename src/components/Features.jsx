import React, { useState } from "react";
import { useTodo } from "../context";

const Features = () => {
  const options = ["completed", "incomplete", "default"];
  const [text, setText] = useState("mark all complete");
  const { toggleComplete, todos, filterTodos, sortTodos } = useTodo();
  const markAllComplete = () => {
    if (todos) {
      todos.map((todo) => {
        toggleComplete(todo.id);
      });
    }
  };
  // const sortTodos = () => {
  //   return todos.sort((a, b) => {
  //     const t1 = a.todo ? a.todo : "";
  //     const t2 = b.todo ? b.todo : "";
  //     console.log("T1:", t1, "T2:", t2);
  //     if (t1 < t2) return -1;
  //     if (t1 > t2) return 1;
  //     return 0;
  //   });
  // };

  return (
    <div className="flex mb-4 justify-between w-[90%] mx-auto">
      <div className="flex">
        <select
          options={options}
          id="category"
          defaultValue="default"
          className="rounded-sm px-1 py-2 outline-none border-black/10 cursor-pointer bg-white shadow-sm border-b-2 border-r-2"
        >
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            markAllComplete();
            setText((prevText) =>
              prevText === "mark all complete"
                ? "mark all incomplete"
                : "mark all complete"
            );
          }}
          className="bg-gradient-to-t from-purple-800 to-purple-600 hover:outline outline-purple-300 duration-200 text-white cursor-pointer px-5 py-2 ml-4 rounded-md shadow-md capitalize"
        >
          {text}
        </button>
      </div>
      <div className="w-[1/4] text-center">
        <button
          onClick={sortTodos}
          className="rounded-sm bg-gradient-to-b from-blue-600 to-blue-800 text-white cursor-pointer px-3 py-2 w-full duration-200 hover:outline outline-blue-200 shadow-md"
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export default Features;
