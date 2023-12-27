import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

const Navbar = () => {
  const cardState = useSelector((state) => state.cartReducer);
  return (
    <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          EL PIZZA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/register">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart {cardState.cartItems.length}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
