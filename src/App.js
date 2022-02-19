import React, { useState, useEffect } from "react";
// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";

// this commerce instance will be used to do all back end functionality for me, allowing me to focus on the front end
import { commerce } from "./lib/commerce";

// import all components via deconstruction
import { Products, Navbar, Cart, Checkout } from "./components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  // fetch products - set to empty array by default
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // async process waiting for responce from the call to the list of commerce products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    // will populate with data response from promise
    setProducts(data);
  };
  // get cart items
  const fetchCart = async () => {
    // get cart and immediately get items
    setCart(await commerce.cart.retrieve());
  };
  // function will add items to cart
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    // cart after item has been added
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };
  // empty cart once order is complete
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  // will only run on render will call products list and set to state
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    // grab entire app with a router
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />

        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
