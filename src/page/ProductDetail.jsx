import exam2 from "./exam2.png";
import product_explanation from "./water.png";
import product_explanation1 from "./water_desc.png";
import Review from "./review.png";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";

const ProductDetail = () => {
  const StyledButton = styled.div`
    background: white;
    padding: 10px;
    margin: 10px;
    border: 1px solid #eee;
    width: 97%;
    text-align: center;
    cursor: pointer;
  `;
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="container">
      <div className="header container-xl">
        <div className="header-title1" style={{ fontSize: "20px" }}>
          제품 상세
        </div>
        <Link to="/">
          <AiFillHome className="Home" />
        </Link>
      </div>

      <div className="image">
        <img className="exam2" src={exam2} alt="예시" />
        <div className="image_desc">
          <h2>
            <b style={{ fontSize: "20px" }}>인증샷을 부르는 춘식이 유리컵</b>
          </h2>
          <h3>27,000원</h3>
        </div>

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
