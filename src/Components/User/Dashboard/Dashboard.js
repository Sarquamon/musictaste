import React, { useEffect, useState } from "react";
import TracksCards from "./TracksCards/TracksCards";
import Axios from "axios";

import Buttons from "./Buttons/Buttons";

const musicTasteAPI = "https://musictasteapi.azurewebsites.net";
// const musicTasteAPI = "http://localhost:9000";

const Dashboard = (props) => {
  const [recommendations, setRecommendations] = useState({});

  const getRecommendedSongs = () => {
    const userId = sessionStorage.getItem("userId");
    Axios.get(`${musicTasteAPI}/spotify/getRecommendedGenres/${userId}`)
      .then((result) => {
        setRecommendations({ ...recommendations, tracks: result.data.Tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecommendedArtists = () => {
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

  const getMyTopArtists = () => {
    const userId = sessionStorage.getItem("userId");

    Axios.get(`${musicTasteAPI}/spotify/getUsersTopArtists/${userId}`)
      .then((result) => {
        console.log("Success!\n", result.data.Details);
      })
      .catch((err) => {
        console.log("Error!\n", err);
      });
  };

  const checkLogStatus = () => {
    if (sessionStorage.getItem("userLoggedIn")) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (checkLogStatus()) {
      props.setUserData({
        Data: {
          USERNAME: sessionStorage.getItem("USERNAME"),
          USEREMAIL: sessionStorage.getItem("USEREMAIL"),
          token: sessionStorage.getItem("token"),
        },
      });
      //CHECK SECURITY! --PRIORITY
      if (localStorage.getItem("linkedSpotify")) {
        props.setLinkedSpotify(true);
      }
      props.setUserLoggedIn(true);
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        {props.userLoggedIn ? (
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                <h2>Welcome {props.userData.Data.USERNAME}</h2>
                <p>Select an option</p>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <Buttons
                  getMyTopArtists={getMyTopArtists}
                  getRecommendedArtists={getRecommendedArtists}
                  getRecommendedSongs={getRecommendedSongs}
                />
              </div>
            </div>
            {recommendations.tracks ? (
              <div className="row">
                <TracksCards tracks={recommendations.tracks} />
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="col-lg-12">
            <h3>You have to be logged in to be here!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
