import React from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  return (
    <div className="my-8 w-[90%] mx-auto">
      {/* {!todos ? (
        <p className="text-2xl text-center my-8 text-gray-400 tracking-widest">
          ..Todos will appear here..
        </p>
      ) : ( */}
      <div className="">
        <h1 className="text-2xl font-semibold text-center mb-6">Todos</h1>
        {/* <div>
            {todos.map((todo, index) => (
              <TodoItem />
            ))}
          </div> */}
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      {/* )} */}
    </div>
  );
};

export default Todos;
