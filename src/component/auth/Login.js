import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <Form>
        <h2>Welcome Back!</h2>
        <h5>Please log in</h5>

        <Form.Control type="email" placeholder="Email" required />
        <Form.Control type="password" placeholder="Password" required />

        {/* <FormGroup>
          <Form.Control className="custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </Form.Control> 
        </FormGroup>*/}

        <Form.Control type="submit" value="Sign In" />
        <p className="forgot-password">
          Forgot <a href="#">password?</a>
        </p>
      </Form>
    </div>
  );
};

export default Login;
