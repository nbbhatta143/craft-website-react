import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Width: 0,
    };
  }
  OpenNav = (e) => {
    this.setState({ Width: 150 });
  };
  CloseNav = (e) => {
    this.setState({ Width: 0 });
  };
  render() {
    return (
      <div className="Nav">
        <p className="NavList" style={{ width: this.state.Width }}>
          <button className="closebtn" onClick={this.CloseNav}>
            ×
          </button>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>{" "}
        </p>
        <button id="smallScreen" className="openbtn" onClick={this.OpenNav}>
          ☰ Menu
        </button>
      </div>
    );
  }
}

export default Nav;
