import React from "react";

const BackPackProductCard = ({data}) => {
  return (
    <div className="mainCard">
      <div className="topMainCard">
        <img src={data.image} alt=""/>
      </div>
      <div className="bottomMainCard">
        <div className="bottomMainCardContent">
        <h6>{data.sizeName}</h6>
        <span className="productSizeBtn">
          <button className="btn btn-secondary text-light border-none btn-sm">{data.size.small}</button>
          <button className="btn btn-secondary text-light border-none btn-sm">{data.size.large}</button>
        </span>
        <div className="name d-flex align-items-center justify-content-center">
          <h3 className="text-center">{data.name}</h3>
        </div>
        <div className="star"></div>
        <div className="priceContent">
          <span><p>{data.price}</p> <p>{data.last_price}</p></span>
        </div>
        <div className="AddtoCard">
          <button className="btn btn-dark text-light">{data.btnText}</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BackPackProductCard;
