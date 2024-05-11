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
