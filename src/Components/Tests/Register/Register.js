import React from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  return (
    <div className="form-container">
      <h1 className="form-title">Registrarse</h1>
      <form onSubmit={props.registerFunc}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="registerUsername">Nombre de usuario:</label>
            <input
              className="form-control"
              id="registerUsername"
              name="registerUsername"
              placeholder="¡Ingresa algo genial!"
              type="text"
              autoComplete="on"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="registerUseremail">Correo:</label>
            <input
              className="form-control"
              id="registerUseremail"
              name="registerUseremail"
              placeholder="Pon tu genial correo acá"
              type="email"
              autoComplete="on"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="registerUserPassword">Contraseña:</label>
          <input
            className="form-control"
            id="registerUserPassword"
            name="registerUserPassword"
            placeholder="Namás no se la digas a nadie"
            type="password"
            autoComplete="off"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="registerUserFirstName">Nombre:</label>
            <input
              className="form-control"
              id="registerUserFirstName"
              name="registerUserFirstName"
              placeholder="Tu hermoso nombre"
              type="text"
              autoComplete="on"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="registerUserLastName">Apellido:</label>
            <input
              className="form-control"
              id="registerUserLastName"
              name="registerUserLastName"
              placeholder="Lo que le sigue a tu nombre"
              type="text"
              autoComplete="on"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary custom-register-btn" type="submit">
            ¡Registrame!
          </button>
        </div>
        <small className="">
          ¿Olvidaste la contraseña?
          <Link to="#"> Click aquí </Link>
          para recuperarla. Ó{" "}
          <Link
            to="#"
            onClick={() => {
              props.setFormView("login");
            }}
          >
            Inicia Sesión
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Register;
