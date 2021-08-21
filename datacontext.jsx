import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        setData(response.data);
        setLoading(true);
      })

      .catch((error) => console.log(error));
  }, []);
  // console.log(loading);
  return (
    <DataContext.Provider value={{ data, loading }}>
      {props.children}
    </DataContext.Provider>
  );
};