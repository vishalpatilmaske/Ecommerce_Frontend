import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <div className="Navleft">
          <img
            src="https://media.istockphoto.com/id/1226425136/photo/various-kinds-of-dairy-products-on-a-dark-bluish-background.jpg?s=612x612&w=0&k=20&c=QMkChyZK9sy9V-4wVKvxhNSqECAjThQ488T9uKM3vmE="
            alt=""
          />
          <h3>Dairy_Products</h3>
        </div>

        <div className="Navlink">
          <div className="NavLinkList">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <b>Home</b>
            </NavLink>
            <NavLink to="/product" style={{ textDecoration: "none" }}>
              <b>products</b>
            </NavLink>
            <NavLink to="/services" style={{ textDecoration: "none" }}>
              <b>Services</b>
            </NavLink>
            <NavLink to="/profile" style={{ textDecoration: "none" }}>
              <b>Profile</b>
            </NavLink>
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              <b>About</b>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
