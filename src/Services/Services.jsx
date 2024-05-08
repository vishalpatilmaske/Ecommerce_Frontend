import React from "react";
import "./services.css";

function Services() {
  return (
    <div className="Services">
      <div className="ServicesItem ButterMilk">
        <div className="ServicesImg">
          <img
            src="https://media.istockphoto.com/id/1226425133/photo/various-kinds-of-dairy-products-on-a-dark-bluish-background.webp?b=1&s=170667a&w=0&k=20&c=1A2JnvoWbx9dwvNUDPl4td1DmwucfaxXhnDmXy6CmO4="
            alt=""
          />
        </div>
        <div className="ServicesInfo">
          <h5>We Make Fresh and Healthy</h5>
          <h5>Dairy_Products</h5>
        </div>
      </div>

      <div className="ServicesContainer">
        <div className="ServicesName">
          <h2>SERVICES</h2>
        </div>

        <div className=" ServicesItem RasMalai">
          <div className="ServicesImg">
            <img
              src="https://plus.unsplash.com/premium_photo-1661331688227-1a7799658e0b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="ServicesInfo">
            <h5>Delivered Items Directly To</h5>
            <h5>Your Shops</h5>
          </div>
        </div>
      </div>

      <div className="ServicesItem CupCakes">
        <div className="ServicesImg">
          <img
            src="https://img.freepik.com/free-vector/cash-delivery-concept-with-man-woman_23-2148770581.jpg"
            alt=""
          />
        </div>
        <div className="ServicesInfo">
          <h5>Payment Cash On Delivery</h5>
          <h5>Cash / UPI</h5>
        </div>
      </div>
    </div>
  );
}

export default Services;
