import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      vPassword: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  resetForm = (event) => {
    this.setState({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      vPassword: "",
      submitted: false,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    console.log(this.state);
  };
  render() {
    if (this.state.vPassword) {
      if (this.state.vPassword !== this.state.password) {
        var error = <mark>Password didn't match!</mark>;
      }
    }
    if (this.state.submitted === true) {
      return (
        <div className="success">
          <span>Account successfully created!</span>
          <br />
          <p>
            Please{" "}
            <Link type="submit" to="/Login">
              Login
            </Link>{" "}
            now.
          </p>
        </div>
      );
    }
    return (
      <div className="SignUpMain">
        <div className="SignUp">
          <h2> Sing Up </h2>
          <Card>
            <Form action="" onSubmit={this.handleSubmit}>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
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
              <Form.Control
                type="password"
                placeholder="Re-Enter Password"
                name="vPassword"
                value={this.state.vPassword}
                onChange={this.handleChange}
                required
              />
              <div className="displayError">
                {error}
                <br />
                <Form.Control type="submit" value="Submit" />
              </div>
            </Form>
          </Card>{" "}
          <small>
            <span>Already have an account?</span>
            <br />
            <Link type="submit" to="/Login">
              Login
            </Link>
          </small>
        </div>
      </div>
    );
  }
}
export default SignUp;
