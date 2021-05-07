import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <footer className="border-top text-center small text-muted py-3">
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/cart">Cart</Link>
        {" | "}
        <Link to="/product">Product</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/login">Login</Link>
        {" | "}
        <Link to="signup">Sign Up</Link>
        <p className="m-0">
          Copyright &copy; {new Date().getFullYear()} <Link to="/">Sister's Craft</Link>. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
