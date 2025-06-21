import React from "react";
import { useLocation } from "react-router-dom";
import FormLayout from "components/FormLayout";
import AppAddProduct from "containers/AppAddProduct";

export default function AddProductPage() {
  const location = useLocation();

  const timelineItems = [
    {
      id: 1,
      title: "Add Product",
      subtitle: "Fill in the product details and save.",
      selected: location.pathname.includes("/add"),
    },
  ];

  return (
    <FormLayout sectionName="Add Product" TimelineItems={timelineItems}>
      <AppAddProduct />
    </FormLayout>
  );
}
