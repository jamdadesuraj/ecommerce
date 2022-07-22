import React from "react";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/mainPage/Home";
import NewArrivals from "../components/newArrivals/NewArrivals";
import TopCate from "../components/top/TopCate";

const pages = ({ productItems, cartItems, addToCart }) => {
  return (
    <>
      <Home cartItems={cartItems} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
    </>
  );
};

export default pages;
