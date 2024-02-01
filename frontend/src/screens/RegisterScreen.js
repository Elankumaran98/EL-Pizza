import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
import Layout from "../components/Layout";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;
  const dispatch = useDispatch();

  const register = () => {
    if (password !== conformPassword) {
      alert("Your Password Not Matched");
    } else {
      const user = {
        name,
        email,
        phone,
        password,
        photo
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  };
  return (
    <Layout title={"Register - EL Pizza App"}>
      <div>
        <div className="row mt-5 " style={{ justifyContent: "center" }}>
          <div
            className="col-md-5 mt-5 shadow p-3 mb-5 bg-body-tertiary rounded home"
            style={{ textAlign: "left" }}>
            {loading && <Loading />}
            {success && <Success success="User Registered Successfully" />}
            {error && <Error error="Email Already Registered" />}
            <h1
              className="m-2 shadow p-3 mb-5 bg-body-tertiary rounded myhead"
              style={{ textAlign: "center" }}>
              REGISTER
            </h1>
            <div>
              <input
                required
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                type="text"
                placeholder="Phone Number"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                required
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                required
                type="password"
                placeholder="Conform Password"
                className="form-control"
                value={conformPassword}
                onChange={(e) => setConformPassword(e.target.value)}
              />
              <input
                required
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              <br />
              <button className="btn mt-3 mb-3" onClick={register}>
                REGISTER
              </button>
              <br />
              <Link className="nav-link" to="/login">
                Click Here To LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterScreen;
