import React from "react";

const Events3 = () => {
  const shoot = (a, b) => {
    alert(b.type);
  };
  return (
    <div>
      <button onClick={(event) => shoot("Goal", event)}>Click me</button>
    </div>
  );
};

export default Events3;
