import React, { createContext, useState } from "react";
import Component2 from "./Component2";
import UserContext from "./Context";

const Component1 = () => {
  const user = useContext(UserContext);
  return (
    <>
      {/* <UserContext.Provider value={user}> */}
      <h1> Hellow from Component1</h1>
      <h2>
        {user}
        <Component2 />
      </h2>
      {/* </UserContext.Provider> */}
    </>
  );
};

export default Component1;
