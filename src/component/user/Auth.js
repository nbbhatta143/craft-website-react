import React from "react";

function Login(props) {
  return (
    <>
      <div className="Login">
        <h1>Hello From Login Page</h1>
        <SignUp />
      </div>
    </>
  );
}
function SignUp(props) {
  return (
    <>
      <div className="SignUp">
        <h1>Hello from Sign up</h1>
      </div>
    </>
  );
}
export default Login;
