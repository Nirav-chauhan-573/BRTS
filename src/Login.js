import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import Dashboard from './Dashboard';

const Login = () => {
  const [isAuth, setAuth] = useState(false);
  const [oldname, newname] = useState({
    fname: "",
    lname: "",
  });

  if (localStorage.getItem('name')) {
    return <Redirect to="/Dashboard"></Redirect>;
  }
  const inputevent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    newname((preValue) => {
      // console.log(oldname.fname);
      // console.log(oldname.lname);  

      if (name === "name") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "pass") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };

  const validate = (name) => {
    if (oldname.fname === obj.uname && oldname.lname === obj.pass) {
        localStorage.setItem('name',JSON.stringify(oldname));
      setAuth(true);
    
    } else {
      console.log("invalid");
    }
  };

  const obj = {
    uname: "Nirav",
    pass: "Chauhan",
  };

  return (
    <>
    <div className="div">
      
      <h3 className="h3">Login </h3>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name "
        onChange={inputevent}
      />
      <br /> <br/>
      <input
        type="password"
        name="pass"
        placeholder="Enter Your Password "
        onChange={inputevent}
      />
      <br />
      <br /> 

      <button onClick={validate} className="btn">Submit</button>
      </div>
    </>
  );
};
export default Login;
