import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

// each product will be an object, having an id name, description, price and image
const products = [
  {
    id: 1,
    name: "shoes",
    description: "Running shoes",
    price: "$5",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple macbook",
    price: "$10",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          // when mapping through i need to have an id for reference, xs and sm is for mobile xs 12 will take up full device width and xm 6 will take up 6 of 12 spaces.
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
