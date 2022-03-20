import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import SignupModal from "./SignupModal";

const Header = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  return (
    <>
      <SignupModal
        show={signUpModalOn}
        onHide={() => setSignUpModalOn(false)}
      />
      <header>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ml-auto"
              style={{ position: "absolute", right: "3%" }}
            >
              <Nav.Link>
                <Button variant="primary">Sign In</Button>
              </Nav.Link>
              <Nav.Link>
                <Button
                  variant="secondary"
                  onClick={() => setSignUpModalOn(true)}
                >
                  Sign Up
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </header>
    </>
  );
};

export default Header;
