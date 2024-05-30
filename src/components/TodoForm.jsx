import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevdata) => [...prevdata, todoString]);
  };
  const options = ["completed", "incomplete", "default"];
  return (
    <div className="w-[90%] mx-auto">
      <form
        className="flex flex-col justify-center w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex text-md w-full mb-6 gap-x-2">
          <input
            type="text"
            placeholder="Write todo here.."
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
            className="px-2 py-2 text-gray-900 w-full rounded-sm mx-auto shadow-md shadow-black/10 bg-white outline-none "
          />
          <button
            type="submit"
            className="rounded-sm text-white cursor-pointer px-3 py-2 duration-100 shadow-md shadow-black/60 bg-gradient-to-b from-blue-600 to-blue-800"
          >
            <FaPlus />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
