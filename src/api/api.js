import axios from "axios";
export const BACKEND_ENDPOINT = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/products`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCartItems = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/carts`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const postCartItems = async (id, product) => {
  try {
    const response = await axios.post(`${BACKEND_ENDPOINT}/carts`, {
      products: product,
    });
    console.log("post->", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
