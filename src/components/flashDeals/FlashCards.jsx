import React, { useState } from "react";
import "./flashCards.css";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <div className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <div className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </div>
    </div>
  );
};

const FlashCards = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems &&
          productItems.map((val, index) => {
            return (
              <div className="box" key={index}>
                <div className="product mtop">
                  <div className="img">
                    <span className="discount">{val.discount} % Off</span>
                    <img src={val.cover} alt="" />
                    <div className="product-like">
                      <label>0</label>
                      <br />
                      <i className="fa-regular fa-heart" onClick={incr}></i>
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>{val.name}</h3>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="price">
                      <h4>{val.price} .00</h4>
                      <button onClick={() => addToCart(val)}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default FlashCards;
