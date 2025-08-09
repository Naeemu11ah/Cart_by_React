import React, { useState } from "react";

export default function AddItems(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (name.trim() && price > 0) {
      props.add(name, parseFloat(price)); // Call the add function passed as a prop
      setName(""); // Clear the input fields after submission
      setPrice("");
    } else {
      alert("Please enter a valid name and price.");
    }
  };

  return (
    <form className="row mb-4" onSubmit={handleSubmit}>
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          id="inputName"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state
        />
      </div>
      <div className="col-4">
        <input
          type="number"
          className="form-control"
          id="inputPrice"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)} // Update price state
        />
      </div>
      <div className="col-3">
        <button type="submit" className="btn btn-primary w-100">
          Add Item
        </button>
      </div>
    </form>
  );
}
