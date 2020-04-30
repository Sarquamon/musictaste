import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

// const musicTasteAPI = "https://musictasteapi.azurewebsites.net";
const musicTasteAPI = "http://localhost:9000";

const LinkSpotify = (props) => {
  const getSpotifyUserName = async (e) => {
    e.preventDefault();

    Axios.get(`${musicTasteAPI}/spotify/getUserName`)
      .then((result) => {
        console.log("Success!\n", result.data);
        props.setSpotifyUserData({
          username: result.data.Details.display_name,
        });
      })
      .catch((err) => {
        console.log("Error!\n", err);
      });
  };

  const getRecommendedGenres = (e) => {
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
    const userId = sessionStorage.getItem("userId");

    Axios.get(`${musicTasteAPI}/spotify/getUsersTopArtists/${userId}`)
      .then((result) => {
        console.log("Success!\n", result.data.Details);
      })
      .catch((err) => {
        console.log("Error!\n", err);
      });
  };

  const linkSpotify = (e) => {
    e.preventDefault();

    Axios.get(`${musicTasteAPI}/spotify/spotifyLinkGenerator`)
      .then((result) => {
        localStorage.setItem("linkedSpotify", true);
        props.setLinkedSpotify(true);
        window.location.href = result.data.authURL;
      })
      .catch((err) => {
        console.log("Error!\n", err);
      });
  };

  return (
    <div>
      {props.userLoggedIn ? (
        <div className="row">
          <div className="container">
            <h1>Hola {props.userData.Data.USERNAME}</h1>
            <div className="btn-group">
              <button
                className="btn btn-success"
                onClick={(e) => linkSpotify(e)}
              >
                Unir Spotify
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {props.linkedSpotify === true ? (
        <div>
          <h2>hola {props.spotifyUserData.username}</h2>
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
  );
};

export default LinkSpotify;
