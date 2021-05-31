import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div className="footerLinks">
          <button type="submit">
            <Link to="/">Home</Link>
          </button>
          <em>{"\t|\t"}</em>
          <button type="submit">
            <Link to="/cart">Cart</Link>
          </button>
          <em>{"\t|\t"}</em>
          <button type="submit">
            <Link to="/product">Product</Link>
          </button>
          <em>{"\t|\t"}</em>
          <button type="submit">
            <Link to="/about">About</Link>
          </button>
          <em>{"\t|\t"}</em>
          <span>
            <br />
          </span>
          <button type="submit">
            <Link to="/login">Login</Link>
          </button>
          <em>{"\t|\t"}</em>
          <button type="submit">
            <Link to="signup">Sign Up</Link>
          </button>
        </div>{" "}
        <small>
          Copyright &copy; {new Date().getFullYear()} <Link to="/">Mother's Craft</Link>. All rights reserved.
        </small>
      </footer>
    </div>
  );
}

export default Footer;
