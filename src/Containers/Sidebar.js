import React from "react";
import {Link} from 'react-router-dom';
import Sidebar from "react-sidebar";
 
const Sidebaro=()=>{
    return(
        <>
    <div className="header"></div>
    <div className="sidebar">
        <ul className="menu">
      <li>  <Link to="/about">About</Link></li>
      <li> <Link to="/Dashboard">Dashboard</Link> </li>
      <li> <Link to="/Fetchpi">Get Data</Link> </li>

        
        </ul>
    </div>
    </>
    )
}
 
export default Sidebaro;