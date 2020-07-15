import React from "react";
import { Route, Switch } from "react-router-dom";
import Error from "../components/views/Error";
import Home from '../components/views/Home'
import Houses from "../components/views/Houses";
import Login from "../components/views/Login";
import Signin from "../components/views/Signin"

function Routes() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/houses/" component= {Houses}/>        
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signin" component={Signin}/>
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
  
  export default Routes;