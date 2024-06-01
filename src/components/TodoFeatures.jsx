// import React, { useState } from "react";
// import Features from "./Features";
// import Todos from "./Todos";

// const TodoFeatures = () => {
//   const [filterOption, setFilterOption] = useState("default");
//   const [isSorted, setIsSorted] = useState(false);

//   return (
//     <div>
//       <Features
//         filterOption={filterOption}
//         setFilterOption={setFilterOption}
//         setIsSorted={setIsSorted}
//       />
//       <div className=" h-[3px] bg-slate-200 mb-8 mx-auto w-[90%] mt-6"></div>
//       <Todos
//         filterOption={filterOption}
//         isSorted={isSorted}
//         setIsSorted={setIsSorted}
//       />
//     </div>
//   );
// };

// export default TodoFeatures;
import React, { useState } from "react";
import Features from "./Features";
import Todos from "./Todos";

const TodoApp = () => {
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

  return (
    <div>
      <Features
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        setSortOption={setSortOption}
      />
      <Todos filterOption={filterOption} sortTodos={sortTodos} />
    </div>
  );
};

export default TodoApp;
