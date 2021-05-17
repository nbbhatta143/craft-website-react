import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Width: 0,
      clickCounters: 1,
    };
  }
  OpenNav = (e) => {
    this.setState({ Width: 150 });

    this.setState((state, props) => ({
      clickCounters: state.clickCounters + 1,
    }));
    // console.log(this.state.clickCounters);
    if (this.state.clickCounters % 2 === 0) {
      this.setState({ Width: 0 });
    }
  };
  CloseNav = (e) => {
    this.setState({ Width: 0 });
    this.setState((state, props) => ({
      clickCounters: state.clickCounters + 1,
    }));
    // console.log(this.state.clickCounters);
    if (this.state.clickCounters % 2 === 1) {
      this.setState({ Width: 150 });
    }
  };
  render() {
    return (
      <div className="Nav">
        <p className="NavList" style={{ width: this.state.Width }}>
          <span className="Navigation">
            <Links />
          </span>
          <button className="closebtn" onClick={this.CloseNav}>
            <Links />
          </button>
        </p>
        <button id="smallScreen" className="openbtn" onClick={this.OpenNav}>
          ☰ Menu
        </button>
      </div>
    );
  }
}
function Links(params) {
  return (
    <>
      {" "}
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About</Link>{" "}
    </>
  );
}
export default Nav;
