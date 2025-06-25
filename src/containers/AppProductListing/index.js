import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Button, Pagination, CircularProgress
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import productService from "services/productService";
import { categoryOptions } from "constants/constants";
import Wrapper from "./Wrapper";

export default function AppProductListing({ setStatusType, setStatusMessage }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchProducts = async (pageNumber = 0) => {
    setLoading(true);
    try {
      const res = await productService.findAllPaginated(pageNumber, 5);
      setProducts(res.data.content);
      setTotalPages(res.data.totalPages);
      setStatusMessage(null); 
    setStatusType(null);
    } catch (err) {
      setStatusType("error");
      const errr = err?.response?.data || "Unknown error";
      setStatusMessage("ERROR: " + errr);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await productService.deleteProduct(id);
      setStatusType("success");
      setStatusMessage("Product deleted successfully.");
      fetchProducts(page); // Refresh current page
    } catch (err) {
      setStatusType("error");
      setStatusMessage("Failed to delete product.");
    }
  };

  const getCategoryLabel = (value) => {
    const found = categoryOptions.find(opt => opt.value === value);
    return found ? found.label : value;
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const handlePageChange = (_, value) => {
    setPage(value - 1);
  };

  return (
    <Wrapper className="scrollable pb-10">
      <div className="header-actions">
        <h3>All Products</h3>
        <Button variant="contained" onClick={() => navigate("/add")}>
          + Add Product
        </Button>
      </div>

      {loading ? (
        <CircularProgress />
      ) : (
        <div className="table-scroll-wrapper">
            <TableContainer component={Paper} className="table-container">
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {products.map((p) => (
                    <TableRow key={p.id}>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>{p.price}</TableCell>
                    <TableCell>{p.quantity}</TableCell>
                    <TableCell>{getCategoryLabel(p.category)}</TableCell>
                    <TableCell align="right">
                        <div className="action-buttons">
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => navigate(`/edit/${p.id}`)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            className="delete-btn"
                            onClick={() => handleDelete(p.id)}
                        >
                            Delete
                        </Button>
                        </div>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>

      )}

      <div className="pagination">
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </Wrapper>
  );
}
