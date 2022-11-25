import React from "react";
import { Button } from "layers";
import { TravelCard } from "./TravelCard";

export const MyTravels: React.FC<{}> = () => {
  return (
    <div className="dashboard-travels-info-wrapper">
      <h2>My Travelers</h2>
      <Button
        variant="primary"
        data-test="docs-btn-anchor"
        href="/"
        className="add-new-travel"
      >
        Add New
      </Button>
      <TravelCard />
    </div>
  );
};
