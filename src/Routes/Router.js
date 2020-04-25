import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import Tests from "../Components/Tests/Tests";
import ForgotPassword from "../Components/Tests/ForgotPassword/ForgotPassword";
import RecoverPassword from "../Components/Tests/ForgotPassword/RecoverPassword";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/tests" component={Tests} />
    <Route exact path="/forgotPassword" component={ForgotPassword} />
    <Route exact path="/recoverpwd" component={RecoverPassword} />
  </Switch>
);

export default Routes;
