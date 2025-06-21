import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav style={{
      backgroundColor: "#343a40",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
    }}>
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>Manage Product</div>
      <Link 
        to="/add" 
        style={{
          backgroundColor: "#28a745",
          color: "white",
          padding: "8px 15px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
          opacity: location.pathname === "/add" ? 0.7 : 1
        }}
      >
        Add New Product
      </Link>
    </nav>
  );
}
