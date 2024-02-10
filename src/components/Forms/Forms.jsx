import React, { useState } from "react";

const Forms = () => {
  const [feild, setFeild] = useState({});
  const feildHandler = (e) => {
    const { name, value } = e.target;
    setFeild((values) => ({ ...values, [name]: value }));
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    alert(feild);
  };

  return (
    <form onSubmit={SubmitHandler}>
      <label>Enter your name:</label>
      <input
        type="text"
        value={feild.firstName || ""}
        onChange={feildHandler}
        name="firstName"
      />
      <label>Enter your city: </label>
      <input
        type="text"
        value={feild.city || ""}
        onChange={feildHandler}
        name="city"
      />
      <button>Submit</button>
    </form>
  );
};

export default Forms;
