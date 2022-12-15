import React, { useState, useEffect } from "react";
import axios from "axios";
const ui = [
  "johnd",
  "mor_2314",
  "kevinryan",
  "donero",
  "derek",
  "david_r",
  "snyder",
  "hopkins",
  "kate_h",
  "jimmie_k"
];
const UserDetails = () => {
  const [{ phone, username, email, password }, setUser] = useState({});
  const [id, setId] = useState(localStorage.getItem("name"));
  const a = ui.indexOf(id);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/users/${a + 1}`).then((res) => {
      setUser(res.data);
      // console.log(res.data);
    });

    // eslint-disable-next-line
  }, []);
  return (
    <div className="container my-4">
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">User Details</h4>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={username}
                required
              />
              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              value={email}
            />
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              value={password}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              value={phone}
              required
            />
          </div>
        </div>
      </div>
      {/* <h1> User Details </h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Phone: {phone}</p> */}
    </div>
  );
};

export default UserDetails;
