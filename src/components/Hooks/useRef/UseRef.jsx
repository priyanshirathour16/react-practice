import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Render Count : {count.current}</h1>
    </div>
  );
};

export default UseRef;
