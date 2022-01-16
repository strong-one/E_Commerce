import React, { useState, useEffect } from "react";
// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";

// this commerce instance will be used to do all back end functionality for me, allowing me to focus on the front end
import { commerce } from "./lib/commerce";

// import all components via deconstruction
import { Products, Navbar } from "./components";

const App = () => {
  // fetch products - set to empty array by default
  const [products, setProducts] = useState([]);

  // async process waiting for responce from the call to the list of commerce products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    // will populate with data response from promise
    setProducts(data);
  };
  // will only run on render will call products list and set to state
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
