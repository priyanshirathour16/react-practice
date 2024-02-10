import React, { memo } from "react";

const Todos = ({ todo, addToTodo }) => {
  console.log("child run --> todo process");
  return (
    <>
      {todo.map((to, index) => (
        <div key={index}>{to}</div>
      ))}
      <button onClick={addToTodo}> Add To Todo</button>
    </>
  );
};

export default memo(Todos);
