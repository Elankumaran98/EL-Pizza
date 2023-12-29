import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const {loading,error}=loginstate
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.replace("/");
    }
  }, []);

  const handleLogin = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };

  return (
    <div>
      <div className="row mt-5 " style={{ justifyContent: "center" }}>
        <div
          className="col-md-5 mt-5 shadow p-3 mb-5 bg-body-tertiary rounded"
          style={{ textAlign: "left" }}>
          {loading && <Loading />}
          {error && <Error error="Invalid Credentials"/>}
          <h1
            className="m-2 shadow p-3 mb-5 bg-body-tertiary rounded"
            style={{ textAlign: "center" }}>
            Login
          </h1>
          <div>
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
            <button className="btn mt-3 mb-3" onClick={handleLogin}>
              LOGIN
            </button>
            <br />
            <Link className="nav-link" to="/register">
              Click Here To REGISTER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
