import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../signup/SignUp.css";

function ForgetPassword() {
  return (
    <div className="ForgetPassword">
      <h3>Reset your password.</h3>
      <hr />
      <Form>
        <Form.Control type="text" placeholder="First Name" required />
        <Form.Control type="text" placeholder="Last Name" required />
        <Form.Control type="email" placeholder="Email" required />
        <Form.Control type="submit" value="Submit" />
      </Form>
      <small>
        <Link type="submit" to="/">
          Home
        </Link>
      </small>
    </div>
  );
}

export default ForgetPassword;
