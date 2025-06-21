import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProductPage from "pages/AddProductPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<AddProductPage />} /> {/* reuse AddProduct page for editing */}
      </Routes>
    </BrowserRouter>
  );
}
