import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productimg from "../assets/productimg.jpg";
export default function ProductCard(props) {
  const [price, setPrice] = useState(props.data.pricePerUnit);
  const unit = props.data.unitQuantity;
  const [quntity, setQuntity] = useState(1);

  const sendOrder = async () => {
    const data = {
      retailer_id: props.retailer._id,
      products: [props.data._id],
      quantity: quntity,
      orderValue: price,
      mobile: props.retailer.mobile,
      status: "ordered",
    };
    fetch("http://54.163.126.38:4008/order/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then((data) => {
        if (res.status === 201) {
          toast.success("Order placed Successfully");
        } else {
          toast.error(data.message);
        }
      })
    );
  };
  return (
    <>
      <div className="card" style={{ width: "21rem", margin: "auto 15px" }}>
        <img src={productimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-start">{props.data.name}</h5>
          <div className="">Price Rs{price}</div>
          <div className="">
            {quntity}
            {unit}
          </div>
          <p className="card-text"></p>
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button className="btn btn-primary" onClick={sendOrder}>
              Buy Now
            </button>
            <div className="border" style={{ display: "flex" }}>
              <button
                className="btn border"
                onClick={() => {
                  if (quntity !== 1) {
                    setQuntity(quntity - 1);
                    setPrice(price - props.data.pricePerUnit);
                  }
                }}
              >
                -
              </button>
              <div className="btn ">
                {quntity}
                {unit}
              </div>
              <button
                className="btn border "
                onClick={() => {
                  setQuntity(quntity + 1);
                  setPrice(price + props.data.pricePerUnit);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
