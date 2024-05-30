import React from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import Features from "./components/Features";
const App = () => {
  return (
    <div className="min-h-screen w-full pt-10 bg-slate-200 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300">
      <div className="max-w-4xl mx-auto py-4 rounded-md bg-slate-100 shadow-md text-gray-900 shadow-black/20 border-t-2 border-white/25">
        <h1 className="uppercase font-bold text-center py-6 text-2xl">
          Personal todo app
        </h1>
        <TodoForm />
        <Features />
        <Todos />
      </div>
    </div>
  );
};

export default App;
