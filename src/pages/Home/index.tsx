import React, { useState } from "react";

import {
  Banner,
  Footer,
  FlightInfo,
  Filters,
  AvailableRequests,
} from "components";

export const Home: React.FC = () => {
  const [type, setType] = useState({ value: 0, label: "All" });
  const [size, setSize] = useState({ value: 0, label: "All" });
  const [deliveryType, setDeliveryType] = useState({ value: 0, label: "All" });

  const handleTypeFilter = (selected) => {
    setType(selected);
  };

  const handleSizeFilter = (selected) => {
    setSize(selected);
  };

  const handleDeliveryTypeFilter = (selected) => {
    setDeliveryType(selected);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Banner />
      <FlightInfo />
      <Filters
        onSelectTypeFilter={handleTypeFilter}
        onSelectSizeFilter={handleSizeFilter}
        onSelectDeliveryTypeFilter={handleDeliveryTypeFilter}
      />
      <AvailableRequests type={type} size={size} deliveryType={deliveryType} />
      <Footer />
    </div>
  );
};
