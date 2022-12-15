import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const Product = () => {
  const [productItem, setproductItem] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setproductItem(res.data);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1
        className="text-center my-4"
        style={{ marginTop: "90px" }}
      >{`FakeStore - Top Products`}</h1>

      <div className="container my-3">
        <div className="row">
          {productItem.map((productItem, index) => {
            productItem.quantity = 1;
            return (
              <div className="col-md-4" key={index}>
                <Item
                  key={index}
                  title={productItem.title ? productItem.title : ""}
                  description={productItem.description.substring(0, 90)}
                  imageUrl={productItem.image}
                  rating={productItem.rating.rate}
                  price={productItem.price}
                  category={productItem.category}
                  item={productItem}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
