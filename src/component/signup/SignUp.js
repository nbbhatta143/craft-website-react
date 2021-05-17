import { Button, Col, Form, Row } from "react-bootstrap";
import "./SignUp.css";

function SignUp(props) {
  return (
    <div className="SignUp">
      <h2> Sing Up </h2>
      <Form>
        <Row>
          <Col>
            <input type="text" placeholder="First Name" required />
          </Col>
          <Col>
            <input type="text" placeholder="Last Name" required />
          </Col>
        </Row>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Re-Enter Password" required />
        <input type="submit" value="Submit" />
      </Form>
    </div>
  );
}
export default SignUp;
