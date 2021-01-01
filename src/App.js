import React from "react";
// import './App.css';
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Login from "./Login";
import Error from "./Containers/Error";
import Protected from "./Containers/Protected";
import Demo from "./Component/Demo";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fetchapi from "./Containers/Fetchapi";
import "../src/Component/App.css";
// import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          {/* <Button>abcd</Button> */}
          <Route exact path="/" component={Login} />
          {/* <Protected exact path='/' component={Login}/> */}
          {/* <Route path='/Dashboard' component={Dashboard}/> */}
          <Protected exact path="/Dashboard" component={Fetchapi} />
          <Protected exact path="/Demo" component={Demo} />
          {/* <Protected path="/Fetchpi" component={Fetchapi} /> */}
          <ReactBootstrap.Button bsStyle="success" bsSize="small">
            {" "}
            Something
          </ReactBootstrap.Button>

          <Route component={Error} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
