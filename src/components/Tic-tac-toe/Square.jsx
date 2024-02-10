import React, { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);
  const buttonHandler = () => {
    setValue("X");
  };
  return (
    <>
      <button
        className="square"
        onClick={buttonHandler}
        style={{ width: "20px", height: "20px" }}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
