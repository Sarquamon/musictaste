import React, { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import Register from "./Register/Register";
import Login from "./Login/Login";

import "./Tests.css";

const musicTasteAPI = "http://localhost:9000";

const Tests = () => {
  const [formView, setformview] = useState("login");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [spotifyUserData, setSpotifyUserData] = useState({});
  const [linkedSpotify, setLinkedSpotify] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // console.log("AL INICIO");
    if (sessionStorage.getItem("userLoggedIn")) {
      setUserData({
        Data: {
          USERNAME: sessionStorage.getItem("USERNAME"),
          USEREMAIL: sessionStorage.getItem("USEREMAIL"),
          token: sessionStorage.getItem("token"),
        },
      });
      //CHECK SECURITY!
      if (localStorage.getItem("linkedSpotify")) {
        setLinkedSpotify(true);
      }
      setUserLoggedIn(true);
    }
  }, []);

  // if (userLoggedIn && linkedSpotify) {
  // Axios.get(`${musicTasteAPI}/spotify/getUserName`)
  //   .then((result) => {
  //     console.log("Success!");
  //     console.log(result.data);
  //     setSpotifyUserData({ username: result.data.Details.display_name });
  //   })
  //   .catch((err) => {
  //     console.log("Error!");
  //     console.log(err);
  //   });
  //   setInterval(() => {
  //     Axios.get(`${musicTasteAPI}/spotify/refreshToken`);
  //   }, 3200);
  // }

  const register = async (e) => {
    // console.log("register");
    e.preventDefault();

    const registerUserData = {
      USERNAME: e.target.elements.registerUsername.value,
      USEREMAIL: e.target.elements.registerUseremail.value,
      USERPWD: e.target.elements.registerUserPassword.value,
      FIRST_NAME: e.target.elements.registerUserFirstName.value,
      LAST_NAME: e.target.elements.registerUserLastName.value,
    };

    Axios.post(`${musicTasteAPI}/user/register`, registerUserData)
      .then((result) => {
        console.log("Result:\n", result.data);
      })
      .catch((err) => {
        console.log("Error!\n", err.response);
      });
  };

  const login = async (e) => {
    // console.log("login");

    e.preventDefault();
    const loginUserData = {
      USERPWD: e.target.elements.loginUserPassword.value,
      USERNAME: e.target.elements.loginUsernameEmail.value,
      USEREMAIL: e.target.elements.loginUsernameEmail.value,
    };
    Axios.post(`${musicTasteAPI}/user/login`, loginUserData)
      .then((result) => {
        const resultUserData = result.data;
        console.log(resultUserData);
        setUserData(resultUserData);
        setUserLoggedIn(true);
        sessionStorage.setItem("USERNAME", resultUserData.Data.USERNAME);
        sessionStorage.setItem("USEREMAIL", resultUserData.Data.USEREMAIL);
        sessionStorage.setItem("userId", resultUserData.Data.ID_USER);
        sessionStorage.setItem("token", resultUserData.Data.token);
        sessionStorage.setItem("userLoggedIn", true);
      })
      .catch((err) => {
        console.log("Error!\n", err.response);
      });
  };

  const linkSpotify = (e) => {
    // console.log("Spotify");

    e.preventDefault();

    Axios.get(`${musicTasteAPI}/spotify/spotifyLinkGenerator`)
      .then((result) => {
        // console.log(result.data.authURL);

        localStorage.setItem("linkedSpotify", true);
        setLinkedSpotify(true);
        window.location.href = result.data.authURL;
      })
      .catch((err) => {
        console.log("Error!\n", err);
      });
  };

  const getSpotifyUserName = async (e) => {
    // console.log("Hello from get spoti username");

    e.preventDefault();

    Axios.get(`${musicTasteAPI}/spotify/getUserName`)
      .then((result) => {
        console.log("Success!\n", result.data);
        setSpotifyUserData({ username: result.data.Details.display_name });
      })
      .catch((err) => {
        console.log("Error!\n", err);
      });
  };

  const getSpotifyRecommendedGenres = (e) => {
    // console.log("Hello from get spoti genres");

    e.preventDefault();

    Axios.get(`${musicTasteAPI}/spotify/getRecommendedGenres`)
      .then((result) => {
        console.log("Data:\n", result.data.Details);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSpotifyRecommendations = (e) => {
    // console.log("Hello from spotify recommendations");

    const userId = sessionStorage.getItem("userId");

    Axios.get(`${musicTasteAPI}/spotify/getSpotifyRecommendations/${userId}`)
      .then((result) => {
        console.log("Success!\n");
        console.log(result.data.Tracks[0]);
      })
      .catch((err) => {
        console.log("Error!\n", err);
      });
  };

  const getMyTopArtists = (e) => {
    // console.log("Hello from spotify recommendations");

    const userId = sessionStorage.getItem("userId");

    Axios.get(`${musicTasteAPI}/spotify/getUsersTopArtists/${userId}`)
      .then((result) => {
        console.log("Success!\n", result.data.Details);
      })
      .catch((err) => {
        console.log("Error!\n", err);
      });
  };

  const logout = (e) => {
    // console.log("logout");
    e.preventDefault();

    setUserData({});
    setSpotifyUserData({});
    setLinkedSpotify(false);
    setUserLoggedIn(false);
    setformview("login");
    sessionStorage.removeItem("USERNAME");
    sessionStorage.removeItem("USEREMAIL");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userLoggedIn");
  };

  return (
    <section className="container-fluid section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="custom-container">
            {formView === "login" ? (
              <Login loginFunc={login} setFormView={setformview} />
            ) : (
              <Register registerFunc={register} setFormView={setformview} />
            )}
            {userLoggedIn ? (
              <div className="container">
                <h1>Hola {userData.Data.USERNAME}</h1>
                <div className="btn-group">
                  <button
                    className="btn btn-success"
                    onClick={(e) => linkSpotify(e)}
                  >
                    Unir Spotify
                  </button>
                  <button className="btn btn-danger" onClick={(e) => logout(e)}>
                    Cerrar Sesión
                  </button>
                </div>
                {linkedSpotify === true ? (
                  <div>
                    <h2>hola {spotifyUserData.username}</h2>
                    <div className="btn-group">
                      <button
                        className="btn btn-success"
                        onClick={(e) => getSpotifyUserName(e)}
                      >
                        Get user's name
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={(e) => getSpotifyRecommendedGenres(e)}
                      >
                        get genres
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={(e) => getSpotifyRecommendations(e)}
                      >
                        get recommendations
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={(e) => getMyTopArtists(e)}
                      >
                        get my top artists
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tests;
