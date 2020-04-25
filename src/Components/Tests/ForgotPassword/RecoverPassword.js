import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

import Recover from "./RecoverView";

import "../Tests.css";

const musicTasteAPI = "https://musictasteapi.azurewebsites.net";
// const musicTasteAPI = "http://localhost:9000";

const RecoverPassword = () => {
  const [User, setUser] = useState({
    userPwd: null,
    userEmail: null,
  });

  const history = useHistory();

  const [view, setView] = useState("recover");

  useEffect(() => {
    const url = window.location.href;
    const params = url.match(/\?token=.*/g);
    if (params) {
      const paramsValues = params.toString().split("&anduseremail=");
      const token = paramsValues[0].split("token=")[1];
      const email = paramsValues[1];

      const fetchData = async () => {
        try {
          const valid = await Axios.post(`${musicTasteAPI}/user/checkToken`, {
            token: token,
          });

          if (valid) {
            setUser({ ...User, userEmail: email });
            setView("recover");
          } else {
            history.push("/");
          }
        } catch (e) {
          history.push("/");
        }
      };

      fetchData();
    } else {
      history.push("/");
    }
  }, []);

  const handleChange = (event) => {
    setUser({
      ...User,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const recieved = await Axios.post(`${musicTasteAPI}/user/recoverPwd`, {
        ...User,
      });
      if (recieved) {
        alert("Contraseña actualizada!");
        history.push("/");
      }
    } catch (error) {
      alert("Hubo un error! Intentelo mas tarde.");
    }
  };

  return (
    <section className="container-fluid section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="custom-container">
            {view === "loading" ? (
              <div className="d-flex justify-content-center align-items-center">
                <ReactLoading type={"bubbles"} color={"black"} />
              </div>
            ) : (
              <Recover
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoverPassword;
