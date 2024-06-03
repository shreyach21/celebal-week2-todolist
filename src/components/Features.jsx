import React, { useState } from "react";
import { useTodo } from "../context";

const Features = ({ filterOption, setFilterOption, setSortOption }) => {
  const filterOptions = ["complete", "incomplete", "default"];
  const sortOptions = ["default", "ascending", "descending"];
  const [text, setText] = useState("mark all complete");
  const { toggleComplete, todos } = useTodo();

  const changeCompleteStatus = () => {
    if (todos) {
      if (text === "mark all complete") {
        todos.map((todo) => {
          if (!todo.completed) toggleComplete(todo.id);
        });
      }
      if (text === "mark all incomplete") {
        todos.map((todo) => {
          if (todo.completed) toggleComplete(todo.id);
        });
      }
    }
  };

  return (
    <div className=" mb-4 w-full">
      <div className="flex justify-between w-full">
        <div className="">
          <select
            id="category"
            // defaultValue={filterOption}
            defaultValue="Filter by"
            onChange={(e) => setFilterOption(e.target.value)}
            className=" px-2 py-2 outline-none border-black/10 cursor-pointer bg-white shadow-sm border-b-2 border-r-2 rounded-full text-center text-gray-500"
          >
            <option value="Filter by" disabled>
              Filter By
            </option>
            {filterOptions.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
          <select
            id="sort"
            // defaultValue="default"
            defaultValue="Sort by"
            onChange={(e) => setSortOption(e.target.value)}
            className="px-2 py-2 outline-none border-black/10 cursor-pointer bg-white shadow-sm border-b-2 border-r-2 ml-4 rounded-full text-center text-gray-500"
          >
            <option value="Sort by" disabled>
              Sort By
            </option>
            {sortOptions.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {filterOption === "default" && (
          <button
            onClick={() => {
              changeCompleteStatus();
              setText((prevText) =>
                prevText === "mark all complete"
                  ? "mark all incomplete"
                  : "mark all complete"
              );
            }}
            className="bg-gradient-to-t from-blue-700 to-blue-500 hover:outline outline-blue-300 duration-200 text-white cursor-pointer px-5 py-2 ml-4 rounded-md shadow-md capitalize "
          >
            {text}
          </button>
        )}
      </div>
    </div>
  );
};

export default Features;
