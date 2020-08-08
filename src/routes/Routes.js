import React from "react";
import { Route, Switch } from "react-router-dom";
import Error from "../components/views/Error";
import Home from '../components/views/Home'
import PropertiesCatalog from "../components/views/PropertiesCatalog";
import Login from "../components/views/Login";
import Signin from "../components/views/Signin"
import PropertyPanel from "../components/views/PropertyPanel";

function Routes() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/properties" component= {PropertiesCatalog}/>
          <Route exact path="/property/:property_uuid" component={PropertyPanel}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signin" component={Signin}/>
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
  
  export default Routes;