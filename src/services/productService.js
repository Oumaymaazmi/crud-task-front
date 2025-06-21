import axios from "axios";

const BASE_URL = "http://localhost:8080/product";

const productService = {
  addProduct: (product) => axios.post(BASE_URL, product),
};

export default productService;
