import React, { useEffect, useState } from "react";
import "./userprofile.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

export default function Userprofile(props) {
  const navigate = useNavigate();
  const [orders, setOrder] = useState([]);
  const id = props.retailer._id;
  const getRetailerOrder = async () => {
    fetch(`http://54.163.126.38:4008/order/retailerorders/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => {
        if (res.status === 200) {
          setOrder(data.order);
          console.log(data.order);
        } else {
          console.log(data);
        }
      })
    );
  };

  useEffect(() => {
    getRetailerOrder();
  }, [1]);
  return (
    <>
      <div className="profile">
        <div className="start">
          <div className="info" style={{ display: "flex" }}>
            <img
              src="programmer.jpg"
              className="rounded-circle "
              style={{
                width: "15%",
                height: "20vh",
                backgroundColor: "red",
                margin: "5% 3%",
                padding: "auto",
              }}
            />
            <div
              className="text-data"
              style={{ display: "block", margin: "8% 0px" }}
            >
              <div
                className="username h3"
                style={{ color: "white", fontWeight: "700" }}
              >
                {props.retailer.name}
              </div>
              <div
                className="email h6"
                style={{ color: "white", fontWeight: "300" }}
              >
                {props.retailer.email}
              </div>
              <div
                className="mobile h6"
                style={{ color: "white", fontWeight: "300" }}
              >
                {props.retailer.mobile}
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-start h3"
          style={{ margin: "5% auto", width: "auto" }}
        >
          Your Orders
        </div>
        <div
          className="box border  border-dark"
          style={{
            display: "flex",
            width: "100%",
            fontSize: "15px",
            fontWeight: "700",
            height: "10vh",
          }}
        >
          <div
            className="product-name "
            style={{ width: "20%", margin: "auto 20px" }}
          >
            Product Name
          </div>
          <div
            className="product-quntity "
            style={{ width: "20%", margin: "auto 0px" }}
          >
            Product Quntity
          </div>
          <div
            className="product-price "
            style={{ width: "20%", margin: "auto 0px" }}
          >
            Price
          </div>
          <div
            className="order-status"
            style={{ width: "20%", margin: "auto 0px" }}
          >
            Status
          </div>
        </div>
        {orders ? (
          <>
            {orders.map((d, index) => {
              return <Orders key={index} data={d} />;
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

//show orders function
const Orders = (props) => {
  const deleteOrder = async () => {
    fetch(`http://54.163.126.38:4008/order/delete/${props.data._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => {
        if (res.status === 200) {
          toast.warning(data.message);
        } else {
          toast.error(data.message);
        }
      })
    );
  };

  return (
    <div
      className="box border border-dark"
      style={{
        display: "flex",
        width: "100%",
        fontSize: "15px",
        fontWeight: "400",
        height: "10vh",
      }}
    >
      <div
        className="product-name "
        style={{ width: "20%", margin: "auto 20px" }}
      >
        {props.data.products[0].name}
      </div>
      <div
        className="product-quntity "
        style={{ width: "20%", margin: "auto 0px" }}
      >
        {props.data.quantity + "" + props.data.products[0].unitQuantity}
      </div>
      <div
        className="product-price "
        style={{ width: "20%", margin: "auto 0px" }}
      >
        Rs.{props.data.orderValue}
      </div>
      <div
        className="order-status"
        style={{ width: "20%", margin: "auto 0px" }}
      >
        {props.data.status}
      </div>
      <div className="text" style={{ width: "18%", margin: "auto 0px" }}>
        <button className="btn btn-danger" onClick={deleteOrder}>
          Order cancel
        </button>
      </div>
      <ToastContainer />
    </div>

    // orderCancel button action code
  );
};
