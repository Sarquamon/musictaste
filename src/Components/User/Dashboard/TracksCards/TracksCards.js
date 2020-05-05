import React from "react";

import "./Cards.css";

const Cards = (props) => {
  return (
    <>
      {props.tracks.map((track) => {
        console.log(track);

        return (
          <div
            className="col-sm-3 d-flex align-items-stretch mt-4 mb-3"
            key={track.id}
          >
            <div className="card">
              <img
                src={track.album.images[0].url}
                className="card-img-top"
                alt={track.album.images[0].url}
                height="150px"
                width="150px"
              />
              <div className="card-body">
                <h5 className="card-title customTitle">
                  <b>Title:</b> {track.name}
                </h5>
                <p className="card-text customTitle">
                  <b>Artist:</b> {track.artists[0].name}
                </p>
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

/*
(
							<div className="col-lg-4 mt-4 mb-2" key={product._id}>
								<div className="card">
									<img
										src={`${product.productImage}`}
										className="card-img-top"
										alt={product.productName}
										height="190px"
									/>
									<div className="card-body">
										<h5 className="card-title">{product.productName}</h5>
										<p className="card-text">{product.productDesc}</p>
										<h6 className="card-subtitle text-right">
											{product.productPrice} $
										</h6>
										<Link
											to={{
												pathname: `/store/product/${product._id}`,
												state: {
													productID: product._id
												}
											}}
										>
											<button
												onClick={() => props.onHistoryAdd(product._id)}
												className="btn btn-primary"
											>
												Ver producto
											</button>
										</Link>
									</div>
								</div>
							</div>
						);

*/
