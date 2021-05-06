import React from "react";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "react-bootstrap";

function Header(props) {
  return (
    <div className="Header">
      <Nav />{" "}
      <h1 className="name">
        <Link to="/">Sister's Craft</Link>
      </h1>
      <div className="Auth">
        <Button>
          <Link to="/login">Login</Link>
        </Button>
        <Button>
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}
export default Header;
