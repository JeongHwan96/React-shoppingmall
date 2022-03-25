import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import HorizonLine from "../../components/HorizonLine";
import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { HistoryOutlined } from "@material-ui/icons";
const Error = styled.div`
  color: red;
`;

const SigninModal = ({ show, onHide }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [id, setId] = useState("");
  const [idError, setIdError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const origin_data = JSON.parse(localStorage.getItem("userinfo"));

  const history = useHistory();

  const onChangeid = (e) => {
    setId(e.target.value);
    if (e.target.value !== "") {
      setIdError("");
    }
  };

  const onChangepassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value === confirmpassword) {
      setPasswordError("");
    } else if (e.target.value !== "") {
      setPasswordError("");
    }
  };

  const onClickLogin = () => {
    if (id === "") {
      setIdError("Please enter your id in the id input field");
    }

    if (password === "") {
      setPasswordError(
        "Please enter your password in the password input field"
      );
    }

    if (id === origin_data.id && password === origin_data.password) {
      alert("Congratulations, you have signed up");
      history.push("/cart");
      Location.reload();
    } else {
      alert("oops");
      console.log(id);
      console.log(password);
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
            <h4>Sign In</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your ID"
                onChange={onChangeid}
              />
              <Error>{idError}</Error>
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

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button
              variant="info"
              type="button"
              className="my-3"
              style={{ width: "100%" }}
              onClick={onClickLogin}
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

export default SigninModal;
