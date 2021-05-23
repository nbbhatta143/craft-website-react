import { Button, Card, Form, Row } from "react-bootstrap";
import "./SignUp.css";

function SignUp(props) {
  return (
    <div className="SignUpMain">
      <div className="SignUp">
        <h2> Sing Up </h2>
        <Card>
          <Form>
            <Form.Control type="text" placeholder="First Name" required />
            <Form.Control type="text" placeholder="Last Name" required />
            <Form.Control type="email" placeholder="Email" required />
            <Form.Control type="password" placeholder="Password" required />
            <Form.Control type="password" placeholder="Re-Enter Password" required />
            <Form.Control type="submit" value="Submit" />
          </Form>
        </Card>
      </div>
    </div>
  );
}
export default SignUp;
