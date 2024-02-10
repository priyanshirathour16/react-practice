import React, { useRef } from "react";

const UseRef2 = () => {
  const UserRef = useRef();
  const focusHandler = () => {
    UserRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={UserRef} />
      <button onClick={focusHandler}>Focus Input</button>
    </div>
  );
};

export default UseRef2;
