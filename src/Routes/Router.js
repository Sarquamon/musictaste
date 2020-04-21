import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import Tests from "../Components/Tests/Tests";
import Pruebas from "../Components/Pruebas/Pruebas";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/tests" component={Tests} />
    <Route exact path="/pruebas" component={Pruebas} />
  </Switch>
);

export default Routes;
