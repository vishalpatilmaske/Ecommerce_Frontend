import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function Products(props) {
  const [product, setProducts] = useState([]);
  const [manufactures, setManufacturer] = useState();
  const getProducts = async () => {
    await fetch("http://54.163.126.38:4008/product/getproducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => {
        if (res.status === 200) {
          setProducts(data);
        }
      })
    );
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div
        className="d"
        style={{
          width: "90%",
          justifyContent: "space-evenly",
          padding: "auto",
          margin: "8% auto",
          display: "flex",
        }}
      >
        <div
          className="products"
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          {product.map((d, index) => {
            return (
              <>
                <ProductCard key={index} data={d} retailer={props.retailer} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
