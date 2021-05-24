import React from "react";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";
import { Badge } from "react-bootstrap";

function Header(props) {
  return (
    <div className="Header">
      <Nav />{" "}
      <h1 className="Name">
        <Link to="/craft-website-react">Mother's Craft</Link>
      </h1>
      <div className="Auth">
        <Badge variant="secondary">
          <Link to="/login">Login</Link>
        </Badge>
      </div>
    </div>
  );
}
export default Header;
