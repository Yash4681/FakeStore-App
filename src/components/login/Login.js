import React, { useState } from "react";
import axios from "axios";
import "./login.css";

const Login = ({ setUser, setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const loginHandeler = () => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: userName,
        password: password
      })
      .then((res) => {
        // console.log(res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.setItem("name", userName);
    setUser(userName);
  };
  return (
    <div className="con text-center">
      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="UserName"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div>
          <small>E.g.- username : mor_2314, password : 83r5^_ </small>
        </div>

        <button
          onClick={loginHandeler}
          className="w-100 btn btn-lg btn-primary"
        >
          Sign in
        </button>
      </main>
    </div>
  );
};

export default Login;
