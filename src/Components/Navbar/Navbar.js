import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="d-flex flex-grow-1">
        <Link className="navbar-brand d-none d-lg-inline-block" to="/">
          MusicTaste
        </Link>
        <Link
          className="navbar-brand-two mx-auto d-lg-none d-inline-block"
          to="/"
        >
          <img src="//placehold.it/40?text=LOGO" alt="logo" />
        </Link>
        <div className="w-100 text-right">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div
        className="collapse navbar-collapse flex-grow-1 text-right"
        id="myNavbar"
      >
        <ul className="navbar-nav ml-auto flex-nowrap">
          <li className="nav-item">
            <Link to="/" className="nav-link m-2 menu-item nav-active">
              Home
            </Link>
          </li>
          {props.userLoggedIn ? (
            <ul className="navbar-nav ml-auto flex-nowrap">
              <li className="nav-item">
                <Link to="/linkSpotify" className="menu-item">
                  <button className="m-2 btn btn-outline-success">
                    Link Spotify
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="m-2 menu-item btn btn-outline-danger"
                  onClick={props.logout}
                >
                  Log out
                </button>
              </li>
            </ul>
          ) : (
            <li className="nav-item">
              <Link to="/loginregister" className="nav-link m-2 menu-item">
                Login / Register
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
