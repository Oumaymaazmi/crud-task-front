import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Wrapper from './Wrapper';
import { TextField, Button, MenuItem  } from "@mui/material";
import productService from "services/productService";
import { categoryOptions } from "./constants";
import { useLocation } from 'react-router-dom';

export default function AppAddProduct({ setStatusMessage, setStatusType })  {
  const { id } = useParams();
  const location = useLocation();
  const initialProductState = { name: "", price: "", quantity: null, category: null };
  const [product, setProduct] = useState(initialProductState);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
    if (location.pathname.includes("/add")) {
      setProduct(initialProductState);
    }
  }, [location.pathname]);
  
    useEffect(() => {
    if (id) {
      setLoading(true);
      productService
        .getProductById(id)
        .then((res) => {
          const productData = res.data;
          setProduct(productData);
        })
        .catch((err) => {
          setStatusType("error");
          setStatusMessage("Failed to load product: " + err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);


  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

 async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        name: product.name,
        price: parseFloat(product.price),
        quantity: parseInt(product.quantity),
        category: product.category || null,
      };

      if (id) {
        await productService.updateProduct(id, payload);
        setStatusType("success");
        setStatusMessage("Product successfully updated!");
      } else {
        await productService.addProduct(payload);
        setStatusType("success");
        setStatusMessage("Product successfully saved!");
        setProduct(initialProductState);
      }
    } catch (err) {
      setStatusType("error");
      const errors = err?.response?.data?.errors;
      setStatusMessage("ERROR: " + (Array.isArray(errors) ? errors.join(", ") : "Unknown error"));
    } finally {
      setLoading(false);
    }
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
            select
            label={!product.category ? "Category" : ""}
            name="category"
            value={product.category}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          >
            {categoryOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
