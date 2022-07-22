import React from "react";
import "../style/category.css";
const Categories = () => {
  const data = [
    {
      catImg: "./images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      catImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      catImg: "./images/category/cat3.png",
      cateName: "Cars",
    },
    {
      catImg: "./images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      catImg: "./images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      catImg: "./images/category/cat6.png",
      cateName: "Music",
    },
    {
      catImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      catImg: "./images/category/cat8.png",
      cateName: "Pets",
    },
    {
      catImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      catImg: "./images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      catImg: "./images/category/cat11.png",
      cateName: "Books",
    },
  ];
  return (
    <>
      <div className="category">
        {data &&
          data.map((val, index) => {
            return (
              <div key={index} className="box f_flex">
                <img src={val.catImg} alt="img" />
                <span>{val.cateName}</span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Categories;
