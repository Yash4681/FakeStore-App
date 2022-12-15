import React, { useContext } from "react";
import { Cartcontext } from "../context/Context";

const Item = (props) => {
  const {
    imageUrl,
    category,
    title,
    description,
    quantity,
    item,
    price
  } = props;

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  return (
    <>
      <div className="card my-3">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <small className="badge rounded-pill text-bg-primary">
              {category}
            </small>
          </p>
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{description}...</p>
          <h4 className="position-relative">
            <span class="badge bg-primary position">{price} ₹</span>
            <div
              class="btn-group position-absolute end-0"
              role="group"
              aria-label="Basic example"
            >
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}
                type="button"
                class="btn btn-secondary"
              >
                -
              </button>
              <button type="button" class="btn btn-outline-secondary">
                {quantity}
              </button>
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
                type="button"
                class="btn btn-secondary"
              >
                +
              </button>
            </div>
          </h4>
          <button
            onClick={() => dispatch({ type: "REMOVE", payload: item })}
            className="btn btn-md btn-primary"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
