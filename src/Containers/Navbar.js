import React,{useState} from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Redirect,Link } from "react-router-dom";




const Navbarfun = (props) => {
  const [isAuth, setAuth] = useState(false);

  if (isAuth) {
    return <Redirect to="/"></Redirect>;
  }
  const nextPath= () =>{
    setAuth(true);
    localStorage.clear();
   

  }
  return (
    // console.log(props.); 
   
    <>
    
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>IOT</Navbar.Brand>
        
        <Nav className="mr-auto">
         
          <Nav.Link >
            <Link to="/Dashboard">Dashboard</Link></Nav.Link>
          <Nav.Link >
            <Link to="/Demo">Demo</Link>
          </Nav.Link>
          {/* <Nav.Link > */}
            {/* <Link to="/Fetchpi">Dashboard</Link>
          </Nav.Link> */}
        </Nav>
        <Form inline>
  {/* <p>{props.oldname.fname}</p> */}
          <Button
            variant="outline-info"
            onClick={
              // props.history.push('/');
              nextPath
              // localStorage.clear();
            }
          >
            Logout
          </Button>
        </Form>
      </Navbar>
      <br />
    </>
  );
};

export default Navbarfun;
