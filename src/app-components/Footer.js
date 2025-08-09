import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom bg-dark">
      <button className="col-2 btn btn-danger" onClick={props.reset}>Resest</button>
      <div className="col-8 bg-dark text-white d-flex justify-content-center align-items-center">
        Total price is {props.totalAmount}
      </div>
      <button className="col-2 btn btn-primary">Pay Now</button>
    </div>
  );
}
