import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
import {
  faContactBook,
  faShop,
  faSignIn,
  faSignOut,
  faSortAmountDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                  {currentUser.user.photo && (
                    <img
                      className="rounded-circle"
                      src={`data:image/png;base64,${currentUser.user.photo}`}
                      alt={currentUser.user.name}
                      style={{ width: 40, height: 40, marginRight: "5px" }}
                    />
                  )}
                  {!currentUser.user.photo && (
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ marginRight: "5px" }}
                    />
                  )}
                  {currentUser.user.name}
                </Link>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink">
                  <Link className="dropdown-item" to="/orders">
                    <FontAwesomeIcon
                      icon={faSortAmountDown}
                      style={{ marginRight: "5px" }}
                    />
                    Orders
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/login"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}>
                    <FontAwesomeIcon
                      icon={faSignOut}
                      style={{ marginRight: "5px" }}
                    />
                    LogOut
                  </Link>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/login">
                  <FontAwesomeIcon
                    icon={faSignIn}
                    style={{ marginRight: "5px" }}
                  />
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShop} style={{ marginRight: "5px" }} />
                Cart {cardState.cartItems.length}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <FontAwesomeIcon
                  icon={faContactBook}
                  style={{ marginRight: "5px" }}
                />
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
