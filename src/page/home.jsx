import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { axios } from "axios";

import { Navbar, Container, Nav } from "react-bootstrap";
/* 이미지 */
import exam from "./img/exam.png";
import logo from "./img/logo3.png";
import favicon from "./img/favicon.ico";

/* css */
import "../scss/style.scss";

/* swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const Home = () => {
  const ListButton = styled.li`
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
    width: 60%;
    padding: 6%;
    margin-left: 15px;
    margin-top: 40px;
  `;
  const [showItem, setShowItem] = useState(false);
  const [winter, setWinter] = useState(false);
  const [showItem2, setShowItem2] = useState();
  const setShowItemFalse = () => {
    setShowItem(false);
    setShowItem2(false);
    setWinter(false);
  };
  const setShowItemTrue = () => {
    setShowItem(true);
    setShowItem2(true);
    setWinter(true);
  };

  return (
    <div className="container1">
      <div className="header container-xl">
        <Navbar
          bg="dark"
          variant="dark"
          style={{
            position: "absolute",
            width: "100%",
            left: "0",
            height: "10%",
          }}
        >
          <Container>
            <Link to="/">
              <img
                src={logo}
                alt=""
                style={{
                  position: "absolute",
                  width: "13%",
                  left: "0",
                  top: "0",
                  marginTop: "-0.3%",
                }}
              />
            </Link>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  setShowItemFalse();
                }}
                style={{ fontSize: "2.5rem" }}
              >
                방한 물품
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setShowItemTrue();
                }}
                style={{ fontSize: "2.5rem" }}
              >
                캠핑 용품
              </Nav.Link>
              <Nav.Link style={{ fontSize: "2.5rem" }}>여름 용품</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {showItem ? (
        <div
          className="main_product"
          style={{ width: "50%", margin: "0 auto" }}
        >
          <Link style={{ textDecoration: "none" }} to="/product_detail"></Link>
        </div>
      ) : (
        <>
          <div
            className="main_product"
            style={{ width: "50%", margin: "0 auto" }}
          >
            <Link
              style={{ textDecoration: "none" }}
              to="/product_detail"
            ></Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Home;
