import Home from "./Home";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { fetchProduct } from "../apis/shoppingApis";
import Thumbnail from '../data/Thumbnail'

/*이미지*/
import exam2 from "./img/exam2.png";
import product_explanation from "./img/water.png";
import product_explanation1 from "./img/water_desc.png";
import Review from "./img/review.png";
import HomeData from "../data/Data";
/* 스타일 컴포넌트 */
import styled from "styled-components";

/* 모달창 */
import Modal from "../components/modal.jsx";

/* 홈 아이콘 */
import { AiFillHome } from "react-icons/ai";

const StyledButton = styled.div`
    background: white;
    padding: 10px;
    margin: 10px;
    border: 1px solid #eee;
    width: 97%;
    text-align: center;
    cursor: pointer;
  `;


const ProductDetail = () => {

  const [showReview, setShowReview] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(false);

  // URL의 params
  const params = useParams();

  useEffect(() => {
    getProduct(params.productId)
  }, [])

  const getProduct = async (productId) => {
    const response = await fetchProduct(productId);
    setProduct(response);

  }

  return (
    <div className="container1">
      <div className="header container-xl">
        <div className="header-title1" style={{ fontSize: "20px" }}>
          제품 상세
        </div>
        <Link to="/">
          <AiFillHome className="Home" />
        </Link>
      </div>

      <div className="image">
        <Thumbnail DataName={product} />


        <div className="image_desc">
          <ul style={{ display: "flex" }}>
            <li>
              <div
                style={{
                  border: "0 solid",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                27,000원
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  setShowModal(true);
                }}
                style={{
                  cursor: "pointer",
                  border: "0 solid",
                  width: "140%",
                  textAlign: "center",
                  margin: "0 40%",
                  padding: "6%",
                  backgroundColor: "#24DBAF",
                }}
              >
                장바구니 담기
              </div>
            </li>
          </ul>
        </div>
        {showModal ? <Modal /> : ""}
        <div className="product_explanation_img">
          <div className="review">
            <StyledButton
              className={`${showReview ? "" : "active"} `}
              onClick={() => setShowReview(false)}
            >
              상품설명
            </StyledButton>
            <StyledButton
              className={`${showReview ? "active" : ""} `}
              onClick={() => setShowReview(true)}
            >
              상품리뷰
            </StyledButton>
          </div>
          {showReview ? (
            <img className="exam4" src={Review} alt="예시" />
          ) : (
            <img className="exam3" src={product_explanation} alt="예시" />
          )}

          {showReview ? (
            <img className="exam4" src={Review} alt="예시" />
          ) : (
            <img className="exam3" src={product_explanation1} alt="예시" />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
