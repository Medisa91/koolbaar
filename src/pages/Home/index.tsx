import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Banner, Footer } from "layers";
import {
  FlightInfo,
  Filters,
  AvailableRequests,
  AvailableTravelers,
} from "components";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState(null);
  const [type, setType] = useState({ value: null, label: "All" });
  const [size, setSize] = useState({ value: null, label: "All" });
  const [deliveryType, setDeliveryType] = useState({
    value: null,
    label: "All",
  });

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
    setTab(tab);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <p>{t("greet", { name: "World" })}</p>
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
