import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };

  return (
    <div>
      <div className="row mt-5" style={{ justifyContent: "center" }}>
        <div className="col-md-5 mt-5" style={{ textAlign: "left" }}>
          <h1 className="m-2" style={{ textAlign: "center" }}>
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
            <button className="btn mt-3" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
