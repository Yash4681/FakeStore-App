import React, { useContext } from "react";
// import cart from "../data";
import { Cartcontext } from "../context/Context";

const Item = (props) => {
  let { title, item, description, imageUrl, price, category, rating } = props;

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  // console.log(Globalstate);
  return (
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

        <span className="badge bg-primary">{rating} ⭐</span>
        <h4 className="position-relative">
          <span className="badge bg-primary position-absolute end-0">
            {price} ₹
          </span>
        </h4>
        <button
          onClick={() => dispatch({ type: "ADD", payload: item })}
          className="btn btn-md btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
