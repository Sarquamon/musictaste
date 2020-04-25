import React from "react";

const Recover = (props) => {
  return (
    <div className="form-container">
      <h1 className="form-title">Reinicia tu contraseña</h1>
      <form onSubmit={props.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="userPwd">Ingresa tu nueva contraseña:</label>
            <input
              className="form-control"
              id="userPwd"
              name="userPwd"
              placeholder="Pon tu nueva contraseña"
              type="password"
              autoComplete="on"
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
      </form>
    </div>
  );
};

export default Recover;
