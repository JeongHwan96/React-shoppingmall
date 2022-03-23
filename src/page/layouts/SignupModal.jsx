import { React, useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import HorizonLine from "../../components/HorizonLine";
import styled from "@emotion/styled";
const Error = styled.div`
  color: red;
`;

const SignupModal = ({ show, onHide }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [id, setId] = useState("");
  const [idError, setIdError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value !== "") {
      setNameError("");
    }
  };

  const onChangeId = (e) => {
    setId(e.target.value);
    if (e.target.value !== "") {
      setIdError("");
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.includes("@")) {
      setEmailError("");
    }
  };

  const onChangepassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value === confirmpassword) {
      setPasswordError("");
    }
  };

  const onChangeconfirmpassword = (e) => {
    setConfirmpassword(e.target.value);
    if (e.target.value === password) {
      setPasswordError("");
    }
  };

  const onClickRegister = () => {
    if (name === "") {
      setNameError("Please enter your name in the name input field");
    }

    if (id === "") {
      setNameError("Please enter your id in the id input field");
    }

    if (!email.includes("@")) {
      setEmailError(
        "Invalid email format please please check your email input"
      );
    }

    if (password === "") {
      setPasswordError(
        "Please enter your password in the password input field"
      );
    }
    if (password !== confirmpassword) {
      setPasswordError("The password you entered is different. Please check");
      console.log(password);
      console.log(confirmpassword);
    }
    if (email.includes("@") && password === confirmpassword) {
      const userInfo = { id, password };
      localStorage.setItem("userinfo", JSON.stringify(userInfo));
      alert("Congratulations, you have signed up");
    }
  };

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
            <Form.Group className="mb-3" controlId="formBasicNAME">
              <Form.Label>NAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your NAME"
                onChange={onChangeName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your ID"
                onChange={onChangeId}
              />
              <Error>{idError}</Error>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={onChangeEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Error>{emailError}</Error>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={onChangepassword}
              />
              <Error>{passwordError}</Error>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Comfirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Comfirm Password"
                onChange={onChangeconfirmpassword}
              />
              <Error>{passwordError}</Error>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button
              variant="info"
              type="button"
              className="my-3"
              style={{ width: "100%" }}
              onClick={onClickRegister}
            >
              Sign Up
            </Button>
            <HorizonLine text={"OR"} />
            <GoogleLogin
              render={(renderProps) => {
                return (
                  <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    style={{
                      backgroundColor: "#176BEF",
                      borderColor: "#176BEF",
                      width: "100%",
                    }}
                  >
                    <i className="fab fa-google"></i>&nbsp; Sign Up with Google
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

export default SignupModal;
