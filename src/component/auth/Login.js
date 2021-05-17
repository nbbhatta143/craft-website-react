import React from "react";
import { Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="Login">
      <Form>
        <h2>Welcome Back!</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
      </Form>
    </div>
  );
};

export default Login;
