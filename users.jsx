import React from "react";
import Data from "./Data";
import { DataContextProvider } from "./DataContext";
const Users = () => {
  return (
    <>
      <DataContextProvider>
        <Data />
      </DataContextProvider>
    </>
  );
};

export default Users;