import React from "react";

const CapmingProductCard = ({ campingproduct }) => {
  const { id, name, thumbnail, price } = campingproduct;
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{price}</div>
      <img src={thumbnail} alt="섬네일" />
    </div>
  );
};
export default CapmingProductCard;
