import React, { useState } from "react";
import Axios from "axios";

const musicTasteAPI = "http://localhost:9000";

const Tests = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState();

  const register = async e => {
    e.preventDefault();

    const userData = {
      user__name: e.target.elements.userName.value,
      user__email: e.target.elements.userEmail.value,
      user__pwd: e.target.elements.registerUserPassword.value,
      user__first_name: e.target.elements.userFirstName.value,
      user__last_name: e.target.elements.userLastName.value
    };

    Axios.post(`${musicTasteAPI}/user/register`, userData)
      .then(result => {
        console.log(`Result: ${result.data}`);
      })
      .catch(err => {
        console.log(`Error! ${err.response}`);
      });
  };

  const login = async e => {
    e.preventDefault();
    const userData = {
      user__pwd: e.target.elements.loginUserPassword.value,
      user__name: e.target.elements.userNameEmail.value,
      user__email: e.target.elements.userNameEmail.value
    };
    Axios.post(`${musicTasteAPI}/user/login`, userData)
      .then(result => {
        console.log(result.data);
        setUserData(result.data);
        setUserLoggedIn(true);
        sessionStorage.setItem("userData", result.data);
      })
      .catch(err => {
        console.log(`Error! ${err}`);
        console.log(err.response);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={register}>
          <div>
            <input
              id="userName"
              name="userName"
              placeholder="Usuario"
              type="text"
            />
          </div>
          <div>
            <input
              id="userEmail"
              name="userEmail"
              placeholder="Email"
              type="email"
            />
          </div>
          <div>
            <input
              id="registerUserPassword"
              name="registerUserPassword"
              placeholder="Password"
              type="password"
            />
          </div>
          <div>
            <input
              id="userFirstName"
              name="userFirstName"
              placeholder="Nombre"
              type="text"
            />
          </div>
          <div>
            <input
              id="userLastName"
              name="userLastName"
              placeholder="Apellido"
              type="text"
            />
          </div>
          <button type="submit">Click Me!</button>
        </form>
      </div>
      <div>
        <form onSubmit={login}>
          <div>
            <input
              id="userNameEmail"
              name="userNameEmail"
              placeholder="Usuario o correo"
              type="text"
            />
          </div>
          <div>
            <input
              id="loginUserPassword"
              name="loginUserPassword"
              placeholder="Password"
              type="password"
            />
          </div>
          <button type="submit">Click Me!</button>
        </form>
      </div>
      {userLoggedIn ? userData && <div>{userData.Data.USER__NAME}</div> : <></>}
    </div>
  );
};

export default Tests;
