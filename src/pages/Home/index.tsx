import React, { useState } from "react";

import {
  Banner,
  Footer,
  FlightInfo,
  Filters,
  AvailableRequests,
} from "components";

export const Home: React.FC = () => {
  const [type, setType] = useState({value: 0, label: "All"});

const handleTypeFilter=(selected) => {
  setType(selected)
}

  return (
    <div className="d-flex flex-column min-vh-100">
      <Banner />
      <FlightInfo />
      <Filters onSelectTypeFilter={handleTypeFilter} />
      <AvailableRequests type={type} />      
      <Footer />
    </div>
  );
};
