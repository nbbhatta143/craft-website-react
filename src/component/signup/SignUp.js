import { Button, Col, Form, Row } from "react-bootstrap";
import "./SignUp.css";

function SignUp(props) {
  return (
    <div className="SignUp">
      <h2> Sing Up </h2>
      <Form>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="First Name" required />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Last Name" required />
          </Col>
        </Row>
        <Form.Control type="email" placeholder="Email" required />
        <Form.Control type="password" placeholder="Password" required />
        <Form.Control type="password" placeholder="Re-Enter Password" required />
        <Form.Control type="submit" value="Submit" />
      </Form>
    </div>
  );
}
export default SignUp;
