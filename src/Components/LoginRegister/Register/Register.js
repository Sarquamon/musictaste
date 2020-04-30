import React from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  return (
    <div className="form-container">
      <h1 className="form-title">Registrarse</h1>
      <form onSubmit={props.handleRegister}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="registerUsername">Nombre de usuario:</label>
            <input
              className="form-control"
              id="registerUsername"
              name="registerUsername"
              onChange={props.handleChange}
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
              onChange={props.handleChange}
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
            onChange={props.handleChange}
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
              onChange={props.handleChange}
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
              onChange={props.handleChange}
              placeholder="Lo que le sigue a tu nombre"
              type="text"
              autoComplete="on"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <h3 className="form-subtitle">Select your favourite genres!</h3>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="rockCheckbox"
                id="rockCheckbox"
                className="form-check-input"
                checked={props.registerForm.rockCheckbox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="rockCheckbox">
                Rock
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="latinoCheckBox"
                id="latinoCheckBox"
                className="form-check-input"
                checked={props.registerForm.latinoCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="latinoCheckBox">
                Latino
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="punkCheckBox"
                id="punkCheckBox"
                className="form-check-input"
                checked={props.registerForm.punkCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="punkCheckBox">
                Punk
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="houseCheckBox"
                id="houseCheckBox"
                className="form-check-input"
                checked={props.registerForm.houseCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="houseCheckBox">
                House
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="kpopCheckBox"
                id="kpopCheckBox"
                className="form-check-input"
                checked={props.registerForm.kpopCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="kpopCheckBox">
                K-pop
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="reggaetonCheckBox"
                id="reggaetonCheckBox"
                className="form-check-input"
                checked={props.registerForm.reggaetonCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="reggaetonCheckBox">
                Reggaeton
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="metalCheckBox"
                id="metalCheckBox"
                className="form-check-input"
                checked={props.registerForm.metalCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="metalCheckBox">
                Metal
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="electronicCheckBox"
                id="electronicCheckBox"
                className="form-check-input"
                checked={props.registerForm.electronicCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="electronicCheckBox">
                Electronic
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="frenchCheckBox"
                id="frenchCheckBox"
                className="form-check-input"
                checked={props.registerForm.frenchCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="frenchCheckBox">
                French
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="disneyCheckBox"
                id="disneyCheckBox"
                className="form-check-input"
                checked={props.registerForm.disneyCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="disneyCheckBox">
                Disney
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="hiphopCheckBox"
                id="hiphopCheckBox"
                className="form-check-input"
                checked={props.registerForm.hiphopCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="hiphopCheckBox">
                Hip-Hop
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                name="popCheckBox"
                id="popCheckBox"
                className="form-check-input"
                checked={props.registerForm.popCheckBox}
                onChange={props.handleChange}
              />
              <label className="form-check-label" htmlFor="popCheckBox">
                Pop
              </label>
            </div>
          </div>{" "}
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary custom-register-btn" type="submit">
            ¡Registrame!
          </button>
        </div>
        <small className="">
          ¿Olvidaste la contraseña?
          <Link to="/forgotPassword"> Click aquí </Link>
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
