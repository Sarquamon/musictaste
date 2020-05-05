import React from "react";

const Buttons = (props) => {
  return (
    <div className="btn-group">
      <button className="btn btn-success" onClick={props.getRecommendedSongs}>
        Recommend me some songs!
      </button>
      <button className="btn btn-success" onClick={props.getRecommendedAlbums}>
        How about some albums?
      </button>
      <button className="btn btn-success" onClick={props.getRecommendedArtists}>
        Maybe an artist
      </button>
      <button className="btn btn-success" onClick={props.getMyTopArtists}>
        Show me my top artists!
      </button>
    </div>
  );
};

export default Buttons;
