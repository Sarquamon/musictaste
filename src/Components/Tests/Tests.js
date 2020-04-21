import React, { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import Register from "./Register/Register";
import Login from "./Login/Login";

import "./Tests.css";

const musicTasteAPI = "http://localhost:9000";

const Tests = () => {
  const [registerFormData, setRegisterFormData] = useState({
    registerUsername: null,
    registerUseremail: null,
    registerUserPassword: null,
    registerUserFirstName: null,
    registerUserLastName: null,
    rockCheckbox: false,
    latinoCheckBox: false,
    punkCheckBox: false,
    houseCheckBox: false,
    kpopCheckBox: false,
    reggaetonCheckBox: false,
    metalCheckBox: false,
    electronicCheckBox: false,
    frenchCheckBox: false,
    disneyCheckBox: false,
    hiphopCheckBox: false,
    popCheckBox: false,
  });

  const [loginFormData, setLoginFormData] = useState({
    loginUsernameEmail: null,
    loginUserPassword: null,
  });

  const handleRegisterFormChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  const handleLoginFormChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  const [formView, setformview] = useState("login");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [spotifyUserData, setSpotifyUserData] = useState({});
  const [linkedSpotify, setLinkedSpotify] = useState(false);
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

  //REFRESH TOKEN
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

  const handleRegister = (e) => {
    e.preventDefault();

    const checkBoxes = [];
    for (let key in registerFormData) {
      if (registerFormData[key] === true) {
        checkBoxes.push(key);
      }
    }
    Axios.post(`${musicTasteAPI}/user/register`, {
      ...registerFormData,
      checkBoxes,
    })
      .then((result) => {
        console.log("Result:\n", result.data);
      })
      .catch((err) => {
        console.log("Error!\n", err.response);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post(`${musicTasteAPI}/user/login`, { ...loginFormData })
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

  const getRecommendedGenres = (e) => {
    // console.log("Hello from get spoti genres");

    e.preventDefault();
    const userId = sessionStorage.getItem("userId");
    Axios.get(`${musicTasteAPI}/spotify/getRecommendedGenres/${userId}`)
      .then((result) => {
        console.log("Data:\n", result.data.Details);
        console.log("Data:\n", result.data.Tracks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecommendedArtists = (e) => {
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
              <Login
                loginForm={loginFormData}
                handleLogin={handleLogin}
                handleChange={handleLoginFormChange}
                setFormView={setformview}
              />
            ) : (
              <Register
                registerForm={registerFormData}
                handleRegister={handleRegister}
                handleChange={handleRegisterFormChange}
                setFormView={setformview}
              />
            )}
          </div>
        </div>

        {userLoggedIn ? (
          <div className="row">
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
                      onClick={(e) => getRecommendedGenres(e)}
                    >
                      get recommended genres
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={(e) => getRecommendedArtists(e)}
                    >
                      get recommended artists
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
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Tests;
