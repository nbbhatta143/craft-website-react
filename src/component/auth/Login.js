import React from "react";
import { Button, Form } from "react-bootstrap";

function Login(props) {
  return (
    <div className="Login">
      <Form>
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
export default Login;
