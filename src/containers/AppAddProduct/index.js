import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Wrapper from './Wrapper';
import { TextField, Button } from "@mui/material";

export default function AppAddProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState({ name: "", price: "", quantity:1, category:"" });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log("produt", product)
  }

  return (
    <Wrapper className="scrollable pb-10">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <TextField
            label="Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </div>
        <div className="form-field">
          <TextField
            label="Price"
            name="price"
            value={product.price}
            onChange={handleChange}
            variant="outlined"
            type="number"
            fullWidth
            required
          />
        </div>
        <div className="form-field">
          <TextField
            label="Quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            variant="outlined"
            type="number"
            fullWidth
          />
        </div>
        <div className="form-field">
         <TextField
            label="Category"
            name="category"
            value={product.category}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </div>
        <Button
          type="submit"
          className="submit-btn"
          disabled={loading}
          variant="contained"
        >
          {id ? "Update" : "Add"} Product
        </Button>
      </form>
    </Wrapper>
  );
}
