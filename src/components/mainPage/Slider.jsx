import React from "react";
import SlideCart from "./SlideCart";
import "../style/slider.css";
const Slider = () => {
  return (
    <>
      <section className="homeSlide contentWidth">
        <div className="container">
          <SlideCart />
        </div>
      </section>
    </>
  );
};

export default Slider;
