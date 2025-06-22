import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProductPage from "pages/AddProductPage";
import ProductListPage from "pages/ProductListPage";
import LoginPage from "pages/LoginPage";
import RequireAuth from "components/RequireAuth"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<RequireAuth> <ProductListPage /> </RequireAuth>} />
        <Route path="/add" element={<RequireAuth> <AddProductPage /> </RequireAuth>} />
        <Route path="/edit/:id" element={<RequireAuth> <AddProductPage /> </RequireAuth>} />
      </Routes>
    </BrowserRouter>
  );
}
