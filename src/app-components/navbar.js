import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black navbar-dark">
      <div className="container-fluid px-5">
        <div className="navbar-nav">
          <a className="navbar-brand me-5">Cart</a>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
