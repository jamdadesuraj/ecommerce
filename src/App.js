import React, { useState } from "react";
import Header from "./common/header/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages/pages";
import Data from "./components/flashDeals/Data";
import Cart from "./components/cart/Cart";
const App = () => {
  // step 1 : fetch product data from database

  const { productItems } = Data;

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);

    if (productExit) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id != product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
