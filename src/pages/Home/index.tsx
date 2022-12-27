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
  const [weight, setWeight] = useState({ value: null, label: "All" });
  const [services, setServices] = useState({ value: null, label: "All" });

  const handleTypeFilter = (selected) => {
    setType(selected);
  };

  const handleSizeFilter = (selected) => {
    setSize(selected);
  };

  const handleWeightFilter = (selected) => {
    setWeight(selected);
  };

  const handleServicesFilter = (selected) => {
    setServices(selected);
  };

  const handleTab = (tab) => {
    setTab(tab);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <p>{t("greet", { name: "World" })}</p> */}
      <Banner />
      <FlightInfo onSelectTab={handleTab} />
      <Filters
        tab={tab}
        onSelectTypeFilter={handleTypeFilter}
        onSelectSizeFilter={handleSizeFilter}
        onSelectWeightFilter={handleWeightFilter}
        onSelectServicesFilter={handleServicesFilter}
      />
      {tab === 1 ? (
        <AvailableRequests
          type={type}
          size={size}
          weight={weight}
          services={services}
          tab={tab}
        />
      ) : (
        <AvailableTravelers
          type={type}
          size={size}
          weight={weight}
          services={services}
          tab={tab}
        />
      )}

      <Footer />
    </div>
  );
};
