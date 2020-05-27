import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import LoginRegister from "../Components/LoginRegister/LoginRegister";
import LinkSpotify from "../Components/LinkSpotify/LinkSpotify";
import Dashboard from "../Components/User/Dashboard/Dashboard";
import ForgotPassword from "../Components/Tests/ForgotPassword/ForgotPassword";
import RecoverPassword from "../Components/Tests/ForgotPassword/RecoverPassword";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/loginregister"
      render={() => (
        <LoginRegister
          userLoggedIn={props.userLoggedIn}
          setUserLoggedIn={props.setUserLoggedIn}
          userData={props.userData}
          setUserData={props.setUserData}
          linkedSpotify={props.linkedSpotify}
          setLinkedSpotify={props.setLinkedSpotify}
        />
      )}
    />
    <Route
      exact
      path="/linkSpotify"
      render={() => (
        <LinkSpotify
          userLoggedIn={props.userLoggedIn}
          setUserLoggedIn={props.setUserLoggedIn}
          userData={props.userData}
          setUserData={props.setUserData}
          linkedSpotify={props.linkedSpotify}
          setLinkedSpotify={props.setLinkedSpotify}
          spotifyUserData={props.spotifyUserData}
          setSpotifyUserData={props.setSpotifyUserData}
        />
      )}
    />
    <Route
      exact
      path="/user/dashboard"
      render={() => (
        <Dashboard
          userLoggedIn={props.userLoggedIn}
          setUserLoggedIn={props.setUserLoggedIn}
          userData={props.userData}
          setUserData={props.setUserData}
          linkedSpotify={props.linkedSpotify}
          setLinkedSpotify={props.setLinkedSpotify}
          spotifyUserData={props.spotifyUserData}
          setSpotifyUserData={props.setSpotifyUserData}
        />
      )}
    />
    <Route exact path="/forgotPassword" component={ForgotPassword} />
    <Route exact path="/recoverpwd" component={RecoverPassword} />
  </Switch>
);

// export const musicTasteAPI = "http://localhost:9000";
export const musicTasteAPI = "https://musictasteapi2.azurewebsites.net";
export default Routes;
