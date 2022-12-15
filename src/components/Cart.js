import React, { useContext } from "react";
import CartItem from "./CartItem";
import { Cartcontext } from "../context/Context";

const Item = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <>
      <div className="container my-3 ">
        {total === 0 ? null : (
          <h1 className="position-relative">
            <span className="badge bg-secondary position-absolute end-0">
              Total : {total} ₹
            </span>
          </h1>
        )}

        <h1 className="text-center">Your Cart</h1>
        {state.length > 0 ? (
          <div className="row">
            {state.map((item, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <CartItem
                    title={item.title}
                    description={item.description}
                    imageUrl={item.image}
                    quantity={item.quantity}
                    price={item.price * item.quantity}
                    category={item.category}
                    item={item}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="container">
            <p className="text-center my-5"> Cart is empty</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Item;
