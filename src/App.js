import Navbar from "./app-components/navbar";
import ProductList from "./app-components/productList";
import Footer from "./app-components/Footer";
import React, { useState } from "react";
import AddItems from "./app-components/addItems";
import About from "./app-components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  let productList = [
    {
      name: "Realme C11",
      price: 22000,
      quantity: 0,
    },
  ];

  let [count, setCount] = useState(productList);
  let [totalAmount, setAmout] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...count];
    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    newProductList[index].quantity++;
    setCount(newProductList);
    setAmout(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...count];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setCount(newProductList);
    setAmout(newTotalAmount);
  };

  const reset = () => {
    let newProductList = [...count];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setCount(newProductList);
    setAmout(0);
  };

  const remove = (index) => {
    let newProductList = [...count];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setAmout(newTotalAmount);
    setCount(newProductList);
  };

  const add = (name, price) => {
    let newProductList = [...count];
    newProductList.push({ name: name, price: price, quantity: 0 });
    setCount(newProductList);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="container mt-3">
                <AddItems add={add} />
                <ProductList
                  productList={count}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  remove={remove}
                />
                <Footer totalAmount={totalAmount} reset={reset} />
              </main>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}
