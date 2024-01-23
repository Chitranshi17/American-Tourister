import React from "react";

const ProductCard = ({data}) => {
  return (
    <div className="mainCard">
      <div className="topMainCard">
        <img src={data.image} alt="" />
      </div>
      <div className="bottomMainCard"></div>
    </div>
  );
};

export default ProductCard;
