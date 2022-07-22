import React from "react";
import nData from "./nData";

const NewArrivalsCart = () => {
  return (
    <>
      <div className="content grid product">
        {nData &&
          nData.map((val, index) => {
            return (
              <div className="box " key={index}>
                <div className="img">
                  <img src={val.cover} alt="cover-img" />
                </div>
                <h4>{val.name}</h4>
                <span>{val.price}</span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NewArrivalsCart;
