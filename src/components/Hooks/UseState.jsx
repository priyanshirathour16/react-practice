import React from "react";
import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState("red");
  return (
    <div>
      <h1> My Favourite fruits is {state}</h1>
      <button onClick={() => setState("red")}>Red</button>
      <button onClick={() => setState("blue")}>blue</button>
    </div>
  );
};

export default UseState;
