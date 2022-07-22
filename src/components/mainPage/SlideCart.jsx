import React from "react";
import Sdata from "./Sdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../style/slideCart.css";
const SlideCart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata &&
          Sdata.map((val, index) => {
            return (
              <div className="box d_flex top" key={index}>
                <div className="left">
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                  <button className="btn-primary">Visit Collection</button>
                </div>
                <div className="right">
                  <img src={val.cover} alt={val.title} />
                </div>
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default SlideCart;
