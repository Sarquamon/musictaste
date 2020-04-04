import React, { useState } from "react";
import Axios from "axios";

const musicTasteAPI = "http://localhost:9000";

const Tests = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const register = async e => {
    console.log("register");

    e.preventDefault();

    const registerUserData = {
      user__name: e.target.elements.userName.value,
      user__email: e.target.elements.userEmail.value,
      user__pwd: e.target.elements.registerUserPassword.value,
      user__first_name: e.target.elements.userFirstName.value,
      user__last_name: e.target.elements.userLastName.value
    };

    Axios.post(`${musicTasteAPI}/user/register`, registerUserData)
      .then(result => {
        console.log(`Result: ${result.data}`);
      })
      .catch(err => {
        console.log(`Error! ${err.response}`);
      });
  };

  const login = async e => {
    console.log("login");

    e.preventDefault();
    const loginUserData = {
      user__pwd: e.target.elements.loginUserPassword.value,
      user__name: e.target.elements.userNameEmail.value,
      user__email: e.target.elements.userNameEmail.value
    };
    Axios.post(`${musicTasteAPI}/user/login`, loginUserData)
      .then(result => {
        const resultUserData = result.data;
        console.log(resultUserData);
        setUserData(resultUserData);
        setUserLoggedIn(true);
        sessionStorage.setItem("USER__NAME", resultUserData.Data.USER__NAME);
        sessionStorage.setItem("USER__EMAIL", resultUserData.Data.USER__EMAIL);
        sessionStorage.setItem("token", resultUserData.Data.token);
      })
      .catch(err => {
        // console.log(`Error! ${err}`);
        console.log(err.response);
      });
  };

  const logout = e => {
    // console.log("logout");
    e.preventDefault();

    setUserLoggedIn(false);
    setUserData({});
    sessionStorage.removeItem("USER__NAME");
    sessionStorage.removeItem("USER__EMAIL");
    sessionStorage.removeItem("token");
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
      {userLoggedIn ? (
        <div>
          {userData.Data.USER__NAME}

          <button onClick={e => logout(e)}>Logout</button>
        </div>
      ) : (
        <div>User not logged in</div>
      )}
    </div>
  );
};

export default Tests;
