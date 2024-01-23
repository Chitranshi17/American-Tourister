import React from "react";



const ShopProductCard = ({data}) => {
  return (
    <div className="shopProductCard">
      <div className="shopProductCardTop">
        <div className="shopProductCardImg">
          <img src={data.image} alt="not found" />
        </div>
      </div>
      <div className="shopProductCardBottom">
        <div className="shopProductCardContent">
          <h3>{data.title}</h3>
          <span>
            <h5>Rs {data.price}</h5>
            <h6>Rs. {data.last_price}</h6>
          </span>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
