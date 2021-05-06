import React from "react";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <footer className="border-top text-center small text-muted py-3">
        <Nav />
        <p className="m-0">
          Copyright &copy; 2020 <Link to="/">Sister's Craft</Link>. All rights reserved.{" "}
          <Link to="/login">Login</Link> | <Link to="signup">Sign Up</Link>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
