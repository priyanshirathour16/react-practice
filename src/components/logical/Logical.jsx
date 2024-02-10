import React from "react";

const Logical = (props) => {
  return (
    <div>
      {props.cars.length > 0 && <p>cars Arr Length is = {props.cars.length}</p>}
    </div>
  );
};

export default Logical;
