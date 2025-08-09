import React from "react";

export default function product(props) {
  return (
    <div className="row mt-2">
      <div className="col-6">
        <h3>
          {props.product.name}{" "}
          <span className="badge text-bg-secondary">
            Rs/-{props.product.price}
          </span>
        </h3>
      </div>
      <div className="col-2">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-3 d-flex align-items-center">
        Total price {""}
        {props.product.quantity * props.product.price}
      </div>
      <div
        className="col-1 btn bg-success text-white"
        onClick={() => {
          props.remove(props.index);
        }}
      >
        Remove
      </div>
    </div>
  );
}
