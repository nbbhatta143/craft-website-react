import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isAuth: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...this.state };

    console.log(this.state.isAuth);
  };
  render() {
    return (
      <div className="Login">
        <Form action="" onSubmit={this.handleSubmit}>
          <h2>Welcome Back!</h2>
          <h5>Please log in</h5>

          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <Form.Control type="submit" value="Sign In" />
          <p className="forgot-password">
            Forgot <Link to="/passwordReset">password?</Link>
          </p>
          <br />
        </Form>
        <div className="signUpDiv">
          {" "}
          <small>
            Don't have an account?
            <br />
            <Link type="submit" to="/signup">
              Sign Up
            </Link>
            <Link type="submit" to="/">
              Guest?
            </Link>
          </small>
        </div>
      </div>
    );
  }
}

export default Login;
