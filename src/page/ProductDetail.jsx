import Home from "../page/HomePage";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { fetchProduct } from "../apis/shoppingApis";

/*material-UI*/
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

/*이미지*/
import exam2 from "./img/exam2.png";
import product_explanation from "./img/water.png";
import product_explanation1 from "./img/water_desc.png";

/*리뷰*/
import Review from "../components/Review";

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
  const [count, setCount] = useState(1);

  // URL의 params
  const params = useParams();

  const UpCount = () => {
    setCount(count + 1);
  };

  const DownCount = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    _fetchProductList(params.productId);
  }, []);

  const _fetchProductList = async (productId) => {
    const response = await fetchProduct(productId);
    console.log(response);
    setProduct(response);
  };

  const addProductToCart = (product, count) => {
    setShowModal(true);
    // object Array 형태로 만들어서 넣어주세요.
    let cart = [];

    // 이미 카트에 저장된 상품이 있으면, 불러와서 cart에 담기
    const cartStr = sessionStorage.getItem("cart");
    if (cartStr) {
      cart = JSON.parse(cartStr);
    }

    // cart에 신규 상품 추가
    cart.push({ product: product, count: count });
    // 스토리지에 저장
    sessionStorage.setItem("cart", JSON.stringify(cart));
  };

  const [productOption, setProductOption] = React.useState("");

  const handleChange = (event) => {
    setProductOption(event.target.value);
    console.log(event);
  };

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

      <div
        className="image"
        style={{
          position: "relative",
          textAlign: "center",
          margin: "5% auto",
        }}
      >
        <img src={product.thumbnail} alt="" style={{ width: "35%" }} />
        <div className="image_desc">
          <ul style={{ display: "flex" }}>
            <li style={{ paddingRight: "10%" }}>
              <div
                style={{
                  border: "0 solid",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                {product.price}
              </div>
            </li>

            <li style={{ display: "flex", paddingRight: "5%" }}>
              <input
                type="button"
                value="-"
                style={{ fontSize: "2rem" }}
                onClick={DownCount}
              />
              <div style={{ margin: "10%", fontSize: "2rem" }}>{count}</div>
              <input
                type="button"
                value="+"
                style={{ fontSize: "2rem" }}
                onClick={UpCount}
              />
            </li>

            <li>
              <div
                onClick={() => addProductToCart(product, count)}
                style={{
                  cursor: "pointer",
                  border: "0 solid",
                  width: "140%",
                  textAlign: "center",
                  margin: "7% 40%",
                  padding: "20%",
                  backgroundColor: "#24DBAF",
                }}
              >
                장바구니 담기
              </div>
            </li>
          </ul>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">상품옵션</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={productOption}
                label="상품옵션"
                onChange={handleChange}
              >
                <MenuItem value={10}>10. 10cm 방수패드</MenuItem>
                <MenuItem value={20}>20. 휴대용 난로</MenuItem>
                <MenuItem value={30}>30. 장작</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
            <Review />
          ) : (
            <img className="exam3" src={product.thumbnail} alt="예시" />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
