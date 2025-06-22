import axios from "axios";
import api from "services/api";

const BASE_URL = "/product";

const productService = {
  addProduct: (product) => api.post(BASE_URL, product),
  updateProduct: (id, product) => api.put(`${BASE_URL}/${id}/update`, product),
  getProductById: (id) => api.get(`${BASE_URL}/${id}`),
  findAllPaginated: (page = 0, size = 10) => api.get(`${BASE_URL}?page=${page}&size=${size}`),
  deleteProduct: (id) => api.delete(`${BASE_URL}/${id}`)
};

export default productService;
