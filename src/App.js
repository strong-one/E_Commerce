import React from "react";
// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";

// import all components via deconstruction
import { Products, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
