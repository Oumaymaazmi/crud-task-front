import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProductPage from "pages/AddProductPage";
import ProductListPage from "pages/ProductListPage";
import LoginPage from "pages/LoginPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProductListPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<AddProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
