import Commerce from "@chec/commerce.js";

// creating new instance of commerce, this will be my store - first patameter is public api key from commerce store - second patameter is boolean true which will create a new commerce store

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
