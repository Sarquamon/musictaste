import React from "react";
import { Link } from "react-router-dom";

const SuccessForgot = (props) => {
  return (
    <div className="form-container">
      <h1 className="form-title">Success!</h1>
      <p>
        If {props.userNameEmail.forgotUsernameEmail} exists you'll get an email
        to recover password
      </p>
      <small>
        <Link to="/"> Click aquí </Link>
        para regresar.
      </small>
    </div>
  );
};

export default SuccessForgot;
