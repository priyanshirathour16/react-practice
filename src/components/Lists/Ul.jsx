import React from "react";
import Li from "./Li";

const Ul = () => {
  const list = ["apple", "banana", "grapes"];
  return (
    <div>
      {list.map((item) => {
        <ul>{<Li item={item} />}</ul>;
      })}
    </div>
  );
};

export default Ul;
