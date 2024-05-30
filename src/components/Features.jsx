import React from "react";

const Features = () => {
  const options = ["completed", "incomplete", "default"];
  return (
    <div className="flex mb-4 justify-between w-[90%] mx-auto">
      <div className="flex">
        <select
          options={options}
          id="category"
          defaultValue="default"
          className="rounded-sm px-1 py-2 outline-none cursor-pointer bg-white"
        >
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
        <button className="bg-gradient-to-t from-purple-800 to-purple-600 hover:outline outline-purple-300 duration-200 text-white cursor-pointer px-5 py-2 ml-4 rounded-md shadow-sm hover:shadow-black/60">
          Mark as Completed
        </button>
      </div>
      <div className="w-[1/4] text-center">
        <button className="rounded-sm bg-gradient-to-b from-blue-600 to-blue-800 text-white cursor-pointer px-3 py-2 w-full duration-200 hover:outline outline-blue-200">
          Sort
        </button>
      </div>
    </div>
  );
};

export default Features;
