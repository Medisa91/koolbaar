import React from "react";

import {
  Banner,
  Footer,
  FlightInfo,
  Filters,
  AvailableRequests,
} from "components";

export const Home: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Banner />
      <FlightInfo />
      <Filters/>
      <AvailableRequests/>      
      <Footer />
    </div>
  );
};
