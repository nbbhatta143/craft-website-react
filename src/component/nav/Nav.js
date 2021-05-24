import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Width: 0,
      clickCounters: 1,
      clickOutside: false,
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  myRef = React.createRef();

  handleClickOutside = (e) => {
    if (!this.myRef.current.contains(e.target)) {
      this.setState({ clickOutside: true });
      this.setState({ Width: 0 });
      this.setState({ clickCounters: 1 });
    }
  };
  handleClickInside = () => {
    this.setState({ clickOutside: false });
    this.setState({ Width: 0 });
  };
  OpenNav = (e) => {
    this.setState({ Width: 150 });
    //console.log(this.state.clickCounters);
    if (this.state.clickCounters % 2 === 0) {
      this.setState({ Width: 0 });
    }
    this.setState((state, props) => ({
      clickCounters: state.clickCounters + 1,
    }));
  };
  CloseNav = (e) => {
    this.setState({ Width: 0 });
    this.setState((state, props) => ({
      clickCounters: state.clickCounters + 1,
    }));
  };
  render() {
    return (
      <div className="Nav" ref={this.myRef} onClick={this.handleClickOutside}>
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
      <Link to="/about">About</Link>
      <Link to="/signup">SignUp</Link>
      {/* <Link to="/login">Login</Link> */}
    </>
  );
}
export default Nav;
