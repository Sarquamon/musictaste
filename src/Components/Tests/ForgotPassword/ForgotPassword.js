import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import SuccessForgot from "./SuccessForgot";
import { musicTasteAPI } from "../../../Routes/Router";

import "../Tests.css";

const ForgotPassword = () => {
  const [userNameEmail, setUserNameEmail] = useState({
    forgotUsernameEmail: null,
  });
  const [view, setView] = useState("forgot");

  const handleChange = (event) => {
    setUserNameEmail({
      ...userNameEmail,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const recieved = await Axios.post(`${musicTasteAPI}/user/forgot`, {
        ...userNameEmail,
      });
      if (recieved) {
        setView("successForgot");
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
            {view === "forgot" ? (
              <div className="form-container">
                <h1 className="form-title">Forgot password?</h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="forgotUsernameEmail">
                        Ingresa tu nombre de usuario o correo:
                      </label>
                      <input
                        className="form-control"
                        id="forgotUsernameEmail"
                        name="forgotUsernameEmail"
                        placeholder="Pon tu usuario o correo"
                        type="text"
                        autoComplete="on"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary custom-register-btn"
                      type="submit"
                    >
                      ¡Vamos!
                    </button>
                  </div>
                  <small className="">
                    ¿Recordaste la contraseña?
                    <Link to="/"> Click aquí </Link>
                    para regresar.
                  </small>
                </form>
              </div>
            ) : (
              <SuccessForgot userNameEmail={userNameEmail} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
