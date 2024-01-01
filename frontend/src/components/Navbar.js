import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const cardState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
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
            {currentUser ? (
              <div className="dropdown ">
                <Link
                  className=" dropdown-toggle nav-link"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  {currentUser.user.name}
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink">
                  <Link className="dropdown-item" to="/orders">
                    Orders
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/login"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}>
                    <li>LogOut</li>
                  </Link>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
            )}

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
