import React, { useState } from "react";
import "./singup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";

export default function Singup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    password: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    fetch("http://54.163.126.38:4008/retailer/singup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      res.json().then((data) => {
        if (res.status === 200) {
          console.log(res.status);
          console.log(data);
          toast.success(data);
          navigate("/login");
        } else {
          console.log(res.status);
          console.log(data);
          toast.error(data.message);
        }
      })
    );
  };
  return (
    <>
      <div className="containerr">
        <div className="title">Signup</div>
        <div className="content">
          <form method="post" onSubmit={submitHandler}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  autoComplete="off"
                  onChange={(e) => (user.name = e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  autoComplete="off"
                  onChange={(e) => (user.email = e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  required
                  autoComplete="off"
                  onChange={(e) => (user.mobile = e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  required
                  autoComplete="off"
                  onChange={(e) => (user.password = e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Your location</span>
                <input
                  type="text"
                  placeholder="Enter your Location"
                  required
                  autoComplete="off"
                  onChange={(e) => (user.location = e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{ width: "99%", margin: "auto" }}
              className="btn btn-primary"
            >
              Register
            </button>

            <br />
            <br />
            <div className="text-center">
              Already i have an Accounts? <NavLink to="/login">Login</NavLink>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
