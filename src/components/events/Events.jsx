import React from "react";

const Events = () => {
  const shoot = () => {
    alert("Hello World!");
  };
  return (
    <div>
      <button onClick={shoot}>Click me</button>
    </div>
  );
};

export default Events;
