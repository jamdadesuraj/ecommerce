import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../style/search.css";

function Search({ cartItems }) {
  window.addEventListener("scroll", function () {
    const search = this.document.querySelector(".search");
    search.classList.toggle("active", this.window.screenY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <h1>SRJ</h1>
            {/* <img src="{logo}" alt="logo" /> */}
          </div>
          <div className="search-box f_flex">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="search here" />
            <span>All Categories</span>
          </div>
          <div className="icon f_flex width">
            <i className="fa-solid fa-user icon_circle"></i>
            <div className="cart">
              <Link to="cart">
                <i className="fa-solid fa-cart-plus icon_circle"></i>
                <span>{cartItems.length === 0 ? "" : cartItems.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
