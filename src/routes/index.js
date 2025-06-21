import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProductPage from "pages/AddProductPage";
import Navbar from "components/Navbar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<AddProductPage />} /> {/* reuse AddProduct page for editing */}
      </Routes>
    </BrowserRouter>
  );
}
