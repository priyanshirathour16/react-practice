import React from "react";

const Events2 = () => {
  const shoot = (param) => {
    alert(param);
  };
  return (
    <div>
      <button onClick={shoot("Hello World!")}>Click me</button>
    </div>
  );
};

export default Events2;
