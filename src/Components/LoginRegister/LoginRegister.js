import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Register from "../LoginRegister/Register/Register";
import Login from "../LoginRegister/Login/Login";

const musicTasteAPI = "https://musictasteapi.azurewebsites.net";
// const musicTasteAPI = "http://localhost:9000";

const LoginRegister = (props) => {
  const [registerFormData, setRegisterFormData] = useState({
    registerUsername: null,
    registerUseremail: null,
    registerUserPassword: null,
    registerUserFirstName: null,
    registerUserLastName: null,
    rockCheckbox: false,
    latinoCheckBox: false,
    punkCheckBox: false,
    houseCheckBox: false,
    kpopCheckBox: false,
    reggaetonCheckBox: false,
    metalCheckBox: false,
    electronicCheckBox: false,
    frenchCheckBox: false,
    disneyCheckBox: false,
    hiphopCheckBox: false,
    popCheckBox: false,
  });

  const [loginFormData, setLoginFormData] = useState({
    loginUsernameEmail: null,
    loginUserPassword: null,
  });

  const history = useHistory();
  const [formView, setformview] = useState("login");

  const handleRegisterFormChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  const handleLoginFormChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const checkBoxes = [];
    for (let key in registerFormData) {
      if (registerFormData[key] === true) {
        checkBoxes.push(key);
      }
    }
    if (checkBoxes.length > 0) {
      Axios.post(`${musicTasteAPI}/user/register`, {
        ...registerFormData,
        checkBoxes,
      })
        .then((result) => {
          console.log("Result:\n", result.data);
          history.push("/");
        })
        .catch((err) => {
          console.log("Error!\n", err.response);
        });
    } else {
      //Improve visuals
      alert("Debes seleccionar al menos un genero!");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post(`${musicTasteAPI}/user/login`, { ...loginFormData })
      .then((result) => {
        const resultUserData = result.data;
        console.log(resultUserData);
        props.setUserData(resultUserData);
        props.setUserLoggedIn(true);
        sessionStorage.setItem("USERNAME", resultUserData.Data.USERNAME);
        sessionStorage.setItem("USEREMAIL", resultUserData.Data.USEREMAIL);
        sessionStorage.setItem("userId", resultUserData.Data.ID_USER);
        sessionStorage.setItem("token", resultUserData.Data.token);
        sessionStorage.setItem("userLoggedIn", true);
        history.push("/linkSpotify");
      })
      .catch((err) => {
        console.log("Error!\n", err.response);
      });
  };

  return (
    <section className="container-fluid section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="custom-container">
            {formView === "login" ? (
              <Login
                loginForm={loginFormData}
                handleLogin={handleLogin}
                handleChange={handleLoginFormChange}
                setFormView={setformview}
              />
            ) : (
              <Register
                registerForm={registerFormData}
                handleRegister={handleRegister}
                handleChange={handleRegisterFormChange}
                setFormView={setformview}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginRegister;
