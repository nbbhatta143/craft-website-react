import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <Form>
        <h2>Welcome Back!</h2>
        <h5>Please log in</h5>

        <Form.Control type="email" placeholder="Email" required />
        <Form.Control type="password" placeholder="Password" required />

        <Form.Control type="submit" value="Sign In" />
        <p className="forgot-password">
          Forgot <Link to="/">password?</Link>
          <br />
          Forgot <Link to="/">User Name?</Link>
        </p>
        <br />
        <div className="signUpDiv">
          {" "}
          <small>Don't have an account?</small>
          <br />
          <Link type="submit" to="/signup">
            Sign Up
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
