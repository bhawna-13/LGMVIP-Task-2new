import React, { useContext } from "react";
import Card from "./Card";
import "./style.scss";
import { DataContext } from "./DataContext";
import Loading from "./Loading";

const Data = (props) => {
  const { data, loading } = useContext(DataContext);
  console.log(loading);
  return (
    <div className="card_container">
      <div className="card_holder">
        {loading ? (
          data ? (
            data.data.map((values, index) => <Card val={values} key={index} />)
          ) : (
            ""
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Data;