import React, { useContext } from "react";
import UserContext from "./Context.jsx";

const Component4 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1> Component 5</h1>
      <h2> hello {user}</h2>
    </>
  );
};

export default Component4;
