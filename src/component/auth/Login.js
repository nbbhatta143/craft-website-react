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
};

export default Login;
