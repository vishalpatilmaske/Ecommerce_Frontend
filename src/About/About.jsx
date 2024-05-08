import React from "react";
import "./about.css";

function About() {
  return (
    <div className="About">
      <div className="About-Info">
        <h3>Dairy_Products</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Placeat animi reiciendis soluta eveniet, ex molestias.
          <br />
          Consectetur ab quae, maxime pariatur blanditiis ?
        </h5>
        <div className="Socialmedia-links">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="Company-Info">
        <h3>Company</h3>
        <div className="Company-Links">
          <h5>home</h5>
          <h5>products</h5>
          <h5>delivery</h5>
          <h5>privacy policy</h5>
        </div>
      </div>
      <div className="Contact-Info">
        <h3>Get In Touch</h3>
        <div className="Contact-mail">
          <h5>+91 1123212212</h5>
          <h5>dairyproducts@gmail.com</h5>
        </div>
      </div>
    </div>
  );
}

export default About;
