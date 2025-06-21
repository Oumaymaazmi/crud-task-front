import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AppAddProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({ name: "", price: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
    }
  }, [id]);

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: product.name,
      price: parseFloat(product.price),
    };

    const action = 1
    action
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch(() => setLoading(false));
  }

  if (loading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          name="price"
          type="number"
          step="0.01"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{id ? "Update" : "Add"} Product</button>
    </form>
  );
}
