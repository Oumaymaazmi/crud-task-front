import React ,{ useState } from "react";
import { useLocation } from "react-router-dom";
import FormLayout from "components/FormLayout";
import AppAddProduct from "containers/AppAddProduct";

export default function AddProductPage() {
  const location = useLocation();
  const [statusType, setStatusType] = useState(""); // 'success' or 'error'
  const [statusMessage, setStatusMessage] = useState("");

  // Determine if we're in add or edit mode
  const isEditMode = location.pathname.includes("/edit");
  const pageTitle = isEditMode ? "Edit Product" : "Add Product";
  const actionVerb = isEditMode ? "Edit" : "Add";

  const timelineItems = [
    {
      id: 1,
      title: `${actionVerb} Product`,
      subtitle: isEditMode 
        ? "Update the product details and save." 
        : "Fill in the product details and save.",
      selected: true, // Always selected since we're on this page
    },
  ];

  return (
    <FormLayout
      sectionName={pageTitle}
      timelineItems={timelineItems}
      statusMessage={statusMessage}
      statusType={statusType}
    >
      <AppAddProduct
        setStatusMessage={setStatusMessage}
        setStatusType={setStatusType}
      />
    </FormLayout>
  );
}
