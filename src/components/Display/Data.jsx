import React from "react";

const Data = () => {
  const data = {
    name: "Priyanshi Rathour",
    img: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
    occupation: "student",
    width: "200px",
    style: {
      textAlign: "center",
    },
  };
  return (
    <div style={{ textAlign: data.style.textAlign }}>
      <h1>{data.name}</h1>
      <img src={data.img} alt={data.name} style={{ width: data.width }} />
      <p>occupation :{data.occupation}</p>
    </div>
  );
};

export default Data;
