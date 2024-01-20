import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout title={"Contact US"}>
      <div className="container">
        <h2 className="text-center mb-4">Contact Information</h2>
        <div className="row ">
          <div className="col-md-4">
            <div className="card text-center">
              <FontAwesomeIcon icon={faUser} className="card-img-top mt-2" />
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">Elankumaran.S</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="card-img-top mt-2"
              />
              <div className="card-body">
                <h5 className="card-title">Email</h5>
                <p className="card-text">siva98kumarane@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <FontAwesomeIcon icon={faHome} className="card-img-top mt-2" />
              <div className="card-body">
                <h5 className="card-title">Address</h5>
                <p className="card-text">
                  "Annavasa", Kaithady West Kaithady, Jaffna
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 offset-md-4">
            <div className="card text-center">
              <FontAwesomeIcon icon={faPhone} className="card-img-top mt-2" />
              <div className="card-body">
                <h5 className="card-title">Phone Numbers</h5>
                <p className="card-text">(+94) 763762180</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
