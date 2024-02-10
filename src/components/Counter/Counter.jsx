import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}> increment</button>
      <h1> Count : {count}</h1>
      <button onClick={() => dispatch(decrement())}> decrement</button>
    </div>
  );
};

export default Counter;
