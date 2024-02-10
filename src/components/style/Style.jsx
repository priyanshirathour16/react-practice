import React from "react";

const Style = () => {
  const myStle = {
    color: "white",
    backgroundColor: "yellow",
    fontFamily: "Sans-Serif",
  };
  return (
    <div>
      <h1 style={myStle}>object styling</h1>
      <p style={{ color: "red" }}>Inline stle</p>
    </div>
  );
};

export default Style;
