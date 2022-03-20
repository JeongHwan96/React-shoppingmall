import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { axios } from "axios";
import { Navbar, Container, Nav } from "react-bootstrap";
import ProductCard from "../data/ProductCard";
import CapmingProductCard from "../data/CapmingProductCard";
import Header from "./layouts/Header";
import { Row, Col } from "react-bootstrap";

/* 이미지 */
import exam from "./img/exam.png";
import logo from "./img/logo3.png";
import favicon from "./img/favicon.ico";

/* css */
import "../scss/style.scss";

/* swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

/*API*/
import { fetchProductList } from "../apis/shoppingApis";
import { fetchCampingProductList } from "./../apis/shoppingApis";

const Home = () => {
  const [winter, setWinter] = useState(false);
  const [showItem2, setShowItem2] = useState();
  const [products, setProducts] = useState();
  const [campingproducts, setcampingProducts] = useState();
  const setShowItemFalse = () => {
    setShowItem2(false);
    setWinter(false);
  };
  const setShowItemTrue = () => {
    setShowItem2(true);
    setWinter(true);
  };
  useEffect(() => {
    _fetchProductList();
    _campingfetchProductList();
  }, []);

  const _fetchProductList = async () => {
    const response = await fetchProductList();
    console.log(response.winter);
    setProducts(response.winter);
  };

  const _campingfetchProductList = async () => {
    const response = await fetchCampingProductList();
    console.log(response.camping);
    setcampingProducts(response.camping);
  };

  const ListButton = styled.li`
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
    width: 60%;
    padding: 6%;
    margin-left: 15px;
    margin-top: 40px;
  `;

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
            <Header />
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
            {/* <Link to="/cart">
             장바구니
            </Link> */}
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

      {products && (
        <>
          <div
            className="main_product"
            style={{
              width: "50%",
              margin: "0 auto",
              paddingTop: "100px",
            }}
          >
            <Link to="/ProductDetail" style={{ textDecoration: "none" }}>
              {products.map((product) => (
                <ProductCard product={product} />
              ))}
            </Link>
          </div>
        </>
      )}

      {campingproducts && (
        <>
          <div
            className="main_product"
            style={{
              width: "50%",
              margin: "0 auto",
              paddingTop: "100px",
            }}
          >
            <Link to="/ProductDetail" style={{ textDecoration: "none" }}>
              {campingproducts.map((campingproduct) => (
                <CapmingProductCard campingproduct={campingproduct} />
              ))}
            </Link>
          </div>
        </>
      )}
      {/* ) : (
      <>
        <div
          className="main_product"
          style={{ width: "50%", margin: "0 auto", paddingTop: "100px" }}
        >
          <Link to="/ProductDetail" style={{ textDecoration: "none" }}>
            {campingproducts.map((campingproduct) => (
              <CapmingProductCard campingproduct={campingproduct} />
            ))}
          </Link>
        </div>
      </>
      )} */}
    </div>
  );
};
export default Home;
