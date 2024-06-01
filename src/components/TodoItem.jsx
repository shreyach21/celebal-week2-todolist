import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";
import { FaSave } from "react-icons/fa";
import { useTodo } from "../context";

const TodoItem = ({ todo, completed, id }) => {
  const [text, setText] = useState(todo);
  const [isChecked, setIsChecked] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const { updateTodo, removeTodo, toggleComplete } = useTodo();

  return (
    <div
      className={`w-full flex justify-between items-center rounded-md shadow-md  mb-4  ${
        completed ? " py-1 bg-blue-100 " : "bg-white py-2"
      }`}
    >
      <div className="pl-2 flex items-center w-[90%]">
        {/* <input
          type="checkbox"
          name=""
          id=""
          defaultChecked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        /> */}
        <div
          onClick={() => {
            // setIsChecked((prev) => !prev);
            toggleComplete(id);
            setIsEditable(false);
          }}
        >
          {completed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </div>
        <input
          type="text"
          value={text}
          className={`text-md ml-4  w-full outline-none border rounded-lg bg-transparent ${
            isEditable ? "border border-black/10 px-2" : "border-transparent"
          } ${completed ? "line-through" : "bg-transparent"}
          }`}
          onChange={(e) => setText(e.target.value)}
          readOnly={!isEditable}
        />
      </div>
      <div
        className="flex gap-x-2 mr-2 overflow-hidden"
        // onClick={() => {
        //   if (!completed) setIsEditable((prev) => !prev);
        // }} ....here onclick toggle isEditable does not properly work
      >
        {!isEditable ? (
          <MdEdit
            className={completed ? "text-gray-400" : "text-black"}
            onClick={() => {
              if (!completed) setIsEditable((prev) => !prev);
            }}
          />
        ) : (
          <FaSave
            onClick={() => {
              if (!completed) setIsEditable((prev) => !prev);
              updateTodo(id, { todo: text, id, completed });
            }}
          />
        )}
        <MdDelete onClick={() => removeTodo(id)} />
      </div>
    </div>
  );
};

export default TodoItem;
