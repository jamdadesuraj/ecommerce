import React from "react";
import "./style.css";
const Cart = ({ cartItems, addToCart, decreaseQty }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart_details">
            {cartItems.length === 0 && (
              <h1 className="no-items product"> No item are add in cart</h1>
            )}
            {cartItems.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list product d_flex">
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart_details">
                    <h4>{item.name}</h4>
                    <h3>
                      {item.price} .00 {item.qty}{" "}
                      <span>$ {item.productQty} . 00</span>
                    </h3>
                  </div>
                  <div className="cart-items-function">
                    <div className="remove-cart">
                      <button className="remove-cart">
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button
                        className="incCart "
                        onClick={() => addToCart(item)}
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="incCart "
                        onClick={() => decreaseQty(item)}
                      >
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product">
            <h2>cart Summary</h2>
            <div className="d_flex">
              <h4>total Price :</h4>
              <h3>$ {totalPrice} .00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
