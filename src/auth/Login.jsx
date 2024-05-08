import React, { useState } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    mobile: "",
    password: "",
  });

  const loginHandler = async (event) => {
    event.preventDefault();
    fetch("http://54.163.126.38:4008/retailer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      res.json().then((data) => {
        if (res.status === 200) {
          toast.success("Successful login");
          console.log(data.access_token);
          localStorage.setItem("access_token", data.access_token);
          navigate("/");
        } else {
          console.log(data);
          console.log(res.status);
          toast.error(data);
        }
      })
    );
  };

  return (
    <>
      <div className="wrapper">
        <header>Login Form</header>
        <form onSubmit={loginHandler}>
          <div className="field mobile">
            <div className="input-area">
              <input
                type="text"
                placeholder="Mobile no."
                required
                onChange={(e) => (user.mobile = e.target.value)}
              />
              <i className="icon fas fa-envelope" />
              <i className="error error-icon fas fa-exclamation-circle" />
            </div>
          </div>
          <div className="field password">
            <div className="input-area">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => (user.password = e.target.value)}
              />
              <i className="icon fas fa-lock" />
              <i className="error error-icon fas fa-exclamation-circle" />
            </div>
          </div>

          <input type="submit" defaultValue="Login" />
        </form>
        <div className="sign-txt">
          Not yet member? <NavLink to="/singup">Signup now</NavLink>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
