import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="Nav">
      <p className="Nav-list">
        <Link to="/">Home</Link> <Link to="/cart">Cart</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>{" "}
      </p>
    </div>
  );
}

export default Nav;
