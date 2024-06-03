import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useTodo } from "../context";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");

  const { addTodo } = useTodo();

  const validateTodo = () => {
    let errorMsg = /^.{1,100}$/.test(todoString)
      ? /^[a-zA-Z0-9 ,]*$/.test(todoString)
        ? ""
        : "Todo must be alphanumeric only! no special character allowed!!"
      : "Todo must be a maximum of 100 characters";
    return errorMsg;
  };
  const addTodoHandler = (e) => {
    e.preventDefault();
    // if (todoString.trim().length === 0) return;
    if (!todoString) return;

    const errormsg = validateTodo();
    if (!errormsg) {
      toast.success("Todo added successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      addTodo({ todo: todoString, compleled: false });
    } else {
      toast.error(errormsg, { position: "top-right", autoClose: 3000 });
    }
    setTodoString("");
  };

  return (
    <div className="w-[90%] mx-auto">
      <form
        className="flex flex-col justify-center w-full"
        onSubmit={addTodoHandler}
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
      {/* {error && <p className="text-md text-red-500 mb-2 px-2">{error}</p>} */}
      <ToastContainer />
    </div>
  );
};

export default TodoForm;
