import { Button, Form } from "react-bootstrap";

function SignUp(props) {
  return (
    <div className="SignUp">
      <Form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
export default SignUp;
