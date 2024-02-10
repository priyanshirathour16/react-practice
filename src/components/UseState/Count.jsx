import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const countHandlerincrement = () => {
    setCount((prev) => prev + 1);
  };
  const countHandlerDecrement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countHandlerincrement}>increase</button>
      <button onClick={countHandlerDecrement}>decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Count;
