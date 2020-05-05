import React from "react";

import "./TopArtistsCards.css";

const Cards = (props) => {
  return (
    <>
      {props.topArtists.map((track) => {
        return (
          <div
            className="col-sm-3 d-flex align-items-stretch mt-4 mb-3"
            key={track.id}
          >
            <div className="card">
              <img
                src={track.images[0].url}
                className="card-img-top"
                alt={track.images[0].url}
                height="150px"
                width="150px"
              />
              <div className="card-body">
                <h5 className="card-title customTitle">
                  <b>Artist:</b> {track.name}
                </h5>
                <button
                  onClick={() => window.open(track.external_urls.spotify)}
                  className="btn btn-primary"
                >
                  See on Spotify
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
