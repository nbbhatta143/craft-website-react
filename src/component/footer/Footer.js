import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div className="footerLinks">
          <button type="submit">
            <Link to="/craft-website-react">Home</Link>
          </button>

          <button type="submit">
            <Link to="/cart">Cart</Link>
          </button>

          <button type="submit">
            <Link to="/product">Product</Link>
          </button>

          <button type="submit">
            <Link to="/about">About</Link>
          </button>

          <span>
            <br />
          </span>
          <button type="submit">
            <Link to="/login">Login</Link>
          </button>

          <button type="submit">
            <Link to="signup">Sign Up</Link>
          </button>
        </div>
      </footer>
      <p className="m-0">
        Copyright &copy; {new Date().getFullYear()} <Link to="/">Mother's Craft</Link>. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
