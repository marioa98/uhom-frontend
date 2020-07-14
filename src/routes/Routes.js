import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../components/views/Home'
import Houses from "../components/views/Houses";






function Routes() {
    return (
      <>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/houses/" component= {Houses}/>        
          <Route component={Error} />
        </Switch>
      </>
    );
  }
  
  export default Routes;