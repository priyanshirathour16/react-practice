import React, { useState } from "react";

const UpdatingUseState = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = (val) => {
    setCar((prev) => ({
      ...prev,
      color: val,
    }));
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={() => updateColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => updateColor("red")}>
        red
      </button>
    </>
  );
};

export default UpdatingUseState;
