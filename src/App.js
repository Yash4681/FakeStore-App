import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import User from "./components/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  const [user, setUser] = useState("");
  console.log(user);

  return (
    <div>
      {!token ? (
        <Login
          token={token}
          setToken={setToken}
          user={user}
          setUser={setUser}
        />
      ) : (
        <BrowserRouter>
          <NavBar setToken={setToken} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home key="home" url="https://fakestoreapi.com/products" />
              }
            />
            <Route
              exact
              path="/cart"
              element={<Cart key="cart" />}
            />
            <Route exact path="/user" element={<User key="user" />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
