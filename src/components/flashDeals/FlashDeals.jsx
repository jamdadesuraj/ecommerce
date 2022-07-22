import React from "react";
import FlashCards from "./FlashCards";
import "./flashDeals.css";
const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <div className="flash background">
      <div className="container ">
        <div className="heading f_flex">
          <i className="fa fa-bolt"></i>
          <h1>Flash Deals</h1>
        </div>
        <FlashCards productItems={productItems} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default FlashDeals;
