import React, { useEffect, useState } from "react";
import Product from "../products/Products";
import { Route, Routes, useNavigate } from "react-router-dom";
import Userprofile from "./Userprofile";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import About from "../About/About";
import HomePage from "../Home/HomePage";
export default function Home() {
  const [retailer, setRetailer] = useState();
  const [rid, setRid] = useState("");
  const navigate = useNavigate();
  const auth = async () => {
    fetch("http://54.163.126.38:4008/retailer/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("access_token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        if (res.status === 200) {
          setRetailer(data.user);
          console.log(data.user._id);
          setRid(data.user._id);
        } else {
          navigate("/login");
        }
      });
    });
  };

  useEffect(() => {
    auth();
  }, [1]);
  return (
    <>
      <div className="homepage" style={{ width: "100%", margin: "0px" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product retailer={retailer} />} />
          <Route
            path="/profile"
            element={<Userprofile retailer={retailer} />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
