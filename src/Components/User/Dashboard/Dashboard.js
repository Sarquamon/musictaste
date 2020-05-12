import React, { useEffect, useState } from "react";
import Axios from "axios";

import Buttons from "./Buttons/Buttons";
import TracksCards from "./TracksCards/TracksCards";
import AlbumsCards from "./AlbumsCards/AlbumsCards";
import ArtistCards from "./ArtistsCards/ArtistsCards";
import TopArtistCards from "./TopArtistsCards/TopArtistsCards";
import { musicTasteAPI } from "../../../Routes/Router";

const Dashboard = (props) => {
  const [recommendations, setRecommendations] = useState({});
  const [view, setView] = useState("main");

  const getRecommendedSongs = () => {
    const userId = sessionStorage.getItem("userId");
    Axios.get(`${musicTasteAPI}/spotify/getRecommendedGenres/${userId}`)
      .then((result) => {
        setRecommendations({ ...recommendations, tracks: result.data.Tracks });
        setView("tracks");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecommendedAlbums = () => {
    const userId = sessionStorage.getItem("userId");
    Axios.get(`${musicTasteAPI}/spotify/getRecommendedGenres/${userId}`)
      .then((result) => {
        setRecommendations({ ...recommendations, albums: result.data.Tracks });
        setView("albums");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecommendedArtists = () => {
    const userId = sessionStorage.getItem("userId");

    Axios.get(`${musicTasteAPI}/spotify/getSpotifyRecommendations/${userId}`)
      .then((result) => {
        setRecommendations({ ...recommendations, artists: result.data.Tracks });
        setView("artists");
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
        setRecommendations({
          ...recommendations,
          topArtists: result.data.Details,
        });
        setView("topartists");
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
                  getRecommendedAlbums={getRecommendedAlbums}
                />
              </div>
            </div>

            {/* Tracks */}
            {view === "tracks" && (
              <>
                {recommendations.tracks ? (
                  <div className="row">
                    <TracksCards tracks={recommendations.tracks} />
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}

            {/* Albums */}
            {view === "albums" && (
              <>
                {recommendations.albums ? (
                  <div className="row">
                    <AlbumsCards albums={recommendations.albums} />
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}

            {/* Artists */}
            {view === "artists" && (
              <>
                {recommendations.artists ? (
                  <div className="row">
                    <ArtistCards artists={recommendations.artists} />
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}
            {view === "topartists" && (
              <>
                {recommendations.topArtists ? (
                  <div className="row">
                    <TopArtistCards topArtists={recommendations.topArtists} />
                  </div>
                ) : (
                  <></>
                )}
              </>
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
