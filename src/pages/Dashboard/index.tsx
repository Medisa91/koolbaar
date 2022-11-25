import React, { useState } from "react";
import { MyTravels, MyPackages, ReceivedOffer, SentOffer } from "components";
import { Header, Footer } from "layers";

export const Dashboard: React.FC = () => {
  const [display, setDisplay] = useState({ value: 0, label: "All" });

  const handleDisplayFilter = (selected) => {
    setDisplay(selected);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="title-dashboard">
        <h2>Dashboard</h2>
      </div>
      <MyTravels />
      <MyPackages />
      <ReceivedOffer display={display} />
      <SentOffer display={display} />
      <Footer />
    </div>
  );
};
