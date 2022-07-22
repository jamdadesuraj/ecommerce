import React from "react";

import "./style.css";
import DiscountCart from "./DiscountCart";
const Discount = () => {
  return (
    <>
      <section className="newArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading_left row f_flex ">
              <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
              <h2>Big Discounts</h2>
            </div>
            <div className="heading_right row  ">
              <span>View All</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <DiscountCart />
        </div>
      </section>
    </>
  );
};

export default Discount;
