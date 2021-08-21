import React from "react";
import "./Loading.scss";
const Loading = () => {
  return (
    <div className="loading_con">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;