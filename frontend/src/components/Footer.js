import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faAddressBook,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Right Reserved &copy; ELankumaran</h4>
      <p className="text-center">
        <Link className="flink" to="/about">
          <FontAwesomeIcon
            style={{ marginRight: "5px" }}
            icon={faAddressCard}
          />
          About
        </Link>
        |
        <Link className="flink" to="/contact">
          <FontAwesomeIcon
            style={{ marginRight: "5px" }}
            icon={faAddressBook}
          />
          Contact
        </Link>
        |
        <Link className="flink" to="/policy">
          <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faUserShield} />
          Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
