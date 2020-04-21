import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="form-container">
      <h1 className="form-title">Iniciar Sesión</h1>
      <form onSubmit={props.handleLogin}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="loginUsernameEmail">Nombre de usuario:</label>
            <input
              className="form-control"
              id="loginUsernameEmail"
              name="loginUsernameEmail"
              placeholder="Pon tu usuario o correo"
              type="text"
              autoComplete="on"
              required
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="loginUserPassword">Contraseña:</label>
            <input
              className="form-control"
              id="loginUserPassword"
              name="loginUserPassword"
              placeholder="Tu secreto mejor guardado"
              type="password"
              autoComplete="off"
              required
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary custom-register-btn" type="submit">
            ¡Vamos!
          </button>
        </div>
        <small className="">
          ¿Olvidaste la contraseña?
          <Link to="#"> Click aquí </Link>
          para recuperarla. Ó{" "}
          <Link
            to="#"
            onClick={() => {
              props.setFormView("register");
            }}
          >
            Registrate
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Login;
