import React ,{ useState } from "react";
import FormLayout from "components/FormLayout";
import AppProductListing from "containers/AppProductListing"

export default function ProductListPage() {
  const [statusType, setStatusType] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const timelineItems = [
    {
      id: 1,
      title: "Product Listing",
      subtitle: "List of your products",
      selected: true,
    },
  ];

  return (
    <FormLayout
      sectionName="Product Listing"
      timelineItems={timelineItems}
      statusMessage={statusMessage}
      statusType={statusType}
    >
      <AppProductListing
        setStatusType={setStatusType}
        setStatusMessage={setStatusMessage}
      />
    </FormLayout>
  );
}