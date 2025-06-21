import axios from "axios";

const BASE_URL = "http://localhost:8080/product";

const productService = {
  addProduct: (product) => axios.post(BASE_URL, product),
  updateProduct: (id, product) => axios.put(`${BASE_URL}/${id}/update`, product),
  getProductById: (id) => axios.get(`${BASE_URL}/${id}`),
};

export default productService;
