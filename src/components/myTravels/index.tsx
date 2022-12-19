import React from "react";
import { Button } from "layers";
import { TravelCard } from "./TravelCard";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

export const MyTravels: React.FC<{}> = () => {
  const size = UseWindowSize();
  const isMobile = size.width < 768;

  return (
    <div className="dashboard-travels-info-wrapper">
      <div className={`${isMobile && "responsive-dashboard-title-width"}`}>
        <h2>My Travelers</h2>
        <Button
          variant="primary"
          data-test="docs-btn-anchor"
          href="/"
          className="add-new-travel"
        >
          Add New
        </Button>
      </div>
      <TravelCard />
    </div>
  );
};
