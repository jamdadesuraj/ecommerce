import React from "react";
import "./topCart.css";
import Tdata from "./Tdata";
import Slider from "react-slick";
const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata &&
          Tdata.map((val, index) => {
            return (
              <div className="box product" key={index}>
                <div className="nametop d_flex ">
                  <span className="tLeft">{val.para}</span>
                  <span className="tRight">{val.desc}</span>
                </div>
                <div className="img">
                  <img src={val.cover} alt="card-img" />
                </div>
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default TopCart;
