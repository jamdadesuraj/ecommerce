import React from "react";
import NewArrivalsCart from "./NewArrivalsCart";
import "./style.css";
const NewArrivals = () => {
  return (
    <>
      <section className="newArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading_left row f_flex ">
              <img
                src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
                alt="img"
              />
              <h2>New Arrivals</h2>
            </div>
            <div className="heading_right row  ">
              <span>View All</span>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <NewArrivalsCart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
