import React from "react";
import MadeGoal from "./MadeGoal";
import MissGoal from "./MissGoal";

const If = (props) => {
  const isGoal = props.isGoal;
  console.log(isGoal);
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissGoal />;
};

export default If;
