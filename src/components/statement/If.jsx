import React from "react";
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}
const If = () => {
  return <div>{text}</div>;
};

export default If;
