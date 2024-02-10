import React, { useEffect, useRef, useState } from "react";

const TrackingStateChange = () => {
  const preveiousValue = useRef();
  const [cirrentval, setCurrentValue] = useState("");
  useEffect(
    (e) => {
      preveiousValue.current = cirrentval;
    },
    [cirrentval]
  );
  return (
    <div>
      <input
        type="text"
        value={cirrentval}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
      <h1> preveiousValue : {preveiousValue.current}</h1>
      <h3>current: {cirrentval}</h3>
    </div>
  );
};

export default TrackingStateChange;
