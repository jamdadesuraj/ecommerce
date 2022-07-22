import React from "react";
import TopCart from "./TopCart";
import "./topCate.css";
const TopCate = () => {
  return (
    <>
      <section className="topCate background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading_left row f_flex ">
              <i className="fa fa-border-all"></i>
              <h2>Top Categories</h2>
            </div>
            <div className="heading_right row  ">
              <span>View All</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCate;
