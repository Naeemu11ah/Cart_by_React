import React from "react";

export default function About() {
  return (
    <div className=" d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <div className="card bg-light" style={{ width: "18rem" }}>
        <img
          src="https://image.made-in-china.com/2f0j00wMpWQcSqCHoE/Unique-Food-Cart-Design-Logo.jpg"
          className="card-img-top"
          alt="cart's pic"
        />
        <div className="card-body">
          <h5 className="card-title fon">Cart</h5>
          <p className="card-text">
            This is a cart web-application. You can easily add and
            remove items from the cart.
          </p>
        </div>
      </div>
    </div>
  );
}
