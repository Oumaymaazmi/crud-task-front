import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProductPage from "pages/AddProductPage";
import ProductListPage from "pages/ProductListPage";
import Navbar from "components/Navbar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<AddProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
