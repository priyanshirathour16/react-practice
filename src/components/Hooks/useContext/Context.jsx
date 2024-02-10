import React, { createContext, useState } from "react";
import Component1 from "./Component1";
const UserContext = createContext();
const Context = () => {
  const [user, setUser] = useState("Priyanshi");
  return (
    <UserContext.Provider value={user}>
      <Component1 />
    </UserContext.Provider>
  );
};

export default UserContext;
