import React from "react";
import "./homepage.css";
import { NavLink } from "react-router-dom";
import HomeImage from "../assets/homeImg.png";
import About from "../About/About";

function Home() {
  return (
    <>
      <div className="Home">
        <div className="text">
          <h2>
            <span>Healthy</span> Dairy_Products
          </h2>
          <h5>This is a simple react website</h5>
          <h5>This is a simple react website react</h5>
          <h5>This is a simple react website react website</h5>

          <NavLink to="/product" style={{ textDecoration: "none" }}>
            <div className="btn">Order Now</div>
          </NavLink>
        </div>
        <div className="img">
          <img src={HomeImage} alt="" />
        </div>
      </div>
      <About />
    </>
  );
}

export default Home;
