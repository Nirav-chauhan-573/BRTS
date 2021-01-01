import React from "react";
import Navbarfun from "../Containers/Navbar";
import Comtable from "../Containers/Table";

const Dashboard = (props) => {
  
  return (
    <>
    {/* <Sidebaro/> */}
      <Navbarfun />
      <Comtable />
      
      {/* <button
        className=""
        onClick={() => {
          props.history.push("/");
          localStorage.clear();
        }}
      >
        Logout
      </button> */}
    </>
  );
};
export default Dashboard;
