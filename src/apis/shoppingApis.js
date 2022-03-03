import axios from "axios";

export const fetchProductList = () => {
  return axios
    .get("https://f94836e9-9f51-4d28-82bd-9af8ad671717.mock.pstmn.io/products")
    .then((response) => response.data);
};

export const fetchProduct = (productId) => {
  return axios
    .get(
      `https://f94836e9-9f51-4d28-82bd-9af8ad671717.mock.pstmn.io/products/${productId}`
    )
    .then((response) => response.data);
};
