import React from "react";
import Axios from "axios";

const musicTasteAPI = "https://musictasteapi.azurewebsites.net";
// const musicTasteAPI = "http://localhost:9000";

const LinkSpotify = (props) => {
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
        <div className="container">
          <div className="row">
            <div className="container mt-3">
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <h1>Hola {props.userData.Data.USERNAME}</h1>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <p>
                    To be able to recommend you stuff you have to connect to
                    Spotify
                  </p>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center"></div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
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
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LinkSpotify;
