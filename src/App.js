import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Router from "./Routes/Router";

import "./App.css";

const App = () => {
  const history = useHistory();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [linkedSpotify, setLinkedSpotify] = useState(false);
  const [spotifyUserData, setSpotifyUserData] = useState({});
  const [userData, setUserData] = useState({});

  //CHECK IF USER IS STILL LOGGED IN AT STARTUP
  useEffect(() => {
    if (sessionStorage.getItem("userLoggedIn")) {
      setUserData({
        Data: {
          USERNAME: sessionStorage.getItem("USERNAME"),
          USEREMAIL: sessionStorage.getItem("USEREMAIL"),
          token: sessionStorage.getItem("token"),
        },
      });
      //CHECK SECURITY! --PRIORITY
      if (localStorage.getItem("linkedSpotify")) {
        setLinkedSpotify(true);
      }
      setUserLoggedIn(true);
    }
  }, []);

  const logout = (e) => {
    e.preventDefault();

    setLinkedSpotify(false);
    setUserLoggedIn(false);
    sessionStorage.removeItem("USERNAME");
    sessionStorage.removeItem("USEREMAIL");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userLoggedIn");
    sessionStorage.removeItem("userId");
    history.push("/");
  };

  return (
    <div>
      <Navbar userLoggedIn={userLoggedIn} logout={logout} />
      <Router
        userLoggedIn={userLoggedIn}
        userData={userData}
        linkedSpotify={linkedSpotify}
        setLinkedSpotify={setLinkedSpotify}
        setUserData={setUserData}
        setUserLoggedIn={setUserLoggedIn}
        spotifyUserData={spotifyUserData}
        setSpotifyUserData={setSpotifyUserData}
      />
    </div>
  );
};

export default App;
