import React, { useState } from "react";
import "./Button.css";

const Button = () => {
  const [change, setChange] = useState(false);
  const changeHandler = () => {
    setChange(!change);
  };
  return (
    <>
      <button onClick={changeHandler} className={change ? "button" : ""}>
        click me
      </button>
    </>
  );
};

export default Button;
