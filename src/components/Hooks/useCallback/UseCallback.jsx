import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  const clickHandler = () => {
    setCount((count) => count + 1);
  };
  const addToTodo = useCallback(() => {
    setTodo((t) => [...t, "new todo"]);
  }, [todo]);

  return (
    <div>
      <Todos todo={todo} addToTodo={addToTodo} />
      <button onClick={clickHandler}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseCallback;
