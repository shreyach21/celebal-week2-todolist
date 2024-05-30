import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const TodoItem = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full flex justify-between items-center rounded-md shadow-md  mb-4 bg-white py-2">
      <div className="pl-2 flex items-center">
        <input
          type="checkbox"
          name=""
          id=""
          defaultChecked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <p className="text-md ml-4">my todo will be added soon</p>
      </div>
      <div className="flex gap-x-2 mr-2">
        <MdEdit />
        <MdDelete />
      </div>
    </div>
  );
};

export default TodoItem;
