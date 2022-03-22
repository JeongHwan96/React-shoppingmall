import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import HorizonLine from "../../components/HorizonLine";
const SignInModal = ({ show, onHide }) => {
  return (
    <Modal
      style={{ opacity: "1" }}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Sign Up</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" placeholder="Enter Your ID" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button
              block
              variant="info"
              type="button"
              className="my-3"
              style={{ width: "100%" }}
            >
              Sign In
            </Button>
            <HorizonLine text={"OR"} />
            <GoogleLogin
              render={(renderProps) => {
                return (
                  <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    block
                    style={{
                      backgroundColor: "#176BEF",
                      borderColor: "#176BEF",
                      width: "100%",
                    }}
                  >
                    <i className="fab fa-google"></i>&nbsp; Sign In with Google
                  </Button>
                );
              }}
            />
          </Form>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer> */}
      </Container>
    </Modal>
  );
};

export default SignInModal;
