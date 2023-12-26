import React, { useState, useEffect } from "react";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

    
    const register = () => {
        if (password !== conformPassword) {
            alert("Your Password Not Matched")
        }
        else {
            const user = {
                name,email,password
            }
            console.log(user)
        }
    }
  return (
    <div>
      <div className="row mt-5" style={{ justifyContent: "center" }}>
        <div className="col-md-5 mt-5" style={{ textAlign: "left" }}>
          <h1 className="m-2" style={{ textAlign: "center" }}>
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
            <button className="btn mt-3" onClick={register}>REGISTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
