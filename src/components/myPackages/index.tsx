import React from "react";
import { Button } from "layers";
import { PackageCard } from "./PackageCard";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

export const MyPackages: React.FC<{}> = () => {
  const size = UseWindowSize();
  const isMobile = size.width < 768;

  return (
    <div className="dashboard-travels-info-wrapper">
      <div className={`${isMobile && "responsive-dashboard-title-width"}`}>
        <h2>My Packages</h2>
        <Button
          variant="primary"
          data-test="docs-btn-anchor"
          href="/"
          className="add-new-travel"
        >
          Add New
        </Button>
      </div>
      <PackageCard />
    </div>
  );
};
