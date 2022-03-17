import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
const ProductCard = ({ product }) => {
  const { id, name, thumbnail, price } = product;
  return (
    <div style={{ borderBottom: "2px solid black", paddingBottom: "10%" }}>
      <Link to={`/product_detail/${id}`}>
        <img
          src={thumbnail}
          alt="섬네일"
          style={{ width: "50%", padding: "10% 0 5% 0" }}
        />
        <div style={{ fontSize: "3rem" }}>{id}</div>
        <div style={{ fontSize: "3rem" }}>{name}</div>
        <div style={{ fontSize: "3rem" }}>{price}</div>
      </Link>
    </div>
  );
};
export default ProductCard;
