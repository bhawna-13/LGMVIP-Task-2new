import React from "react";

const Card = ({ val }) => {
  return (
    <div className="card">
      <img src={val.avatar} alt="" />
      <h3>
        {val.first_name} {val.last_name}{" "}
      </h3>
      <p> {val.email} </p>
    </div>
  );
};

export default Card;