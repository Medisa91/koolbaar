import React, { useState } from "react";

import {
  Banner,
  Footer,
  FlightInfo,
  Filters,
  AvailableRequests,
  AvailableTravelers,
} from "components";

export const Home: React.FC = () => {
  const [tab, setTab] = useState(null);
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

  const handleTab = (tab) => {
    setTab(tab)
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Banner />
      <FlightInfo onSelectTab={handleTab} />
      <Filters
        tab={tab}
        onSelectTypeFilter={handleTypeFilter}
        onSelectSizeFilter={handleSizeFilter}
        onSelectDeliveryTypeFilter={handleDeliveryTypeFilter}
      />
      {tab === 1 ? (
        <AvailableRequests
          type={type}
          size={size}
          deliveryType={deliveryType}
        />
      ) : (
        <AvailableTravelers
          type={type}
          size={size}
          deliveryType={deliveryType}
        />
      )}

      <Footer />
    </div>
  );
};
