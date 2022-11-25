import React from "react";
import { Button } from "layers";
import { PackageCard } from "./PackageCard";

export const MyPackages: React.FC<{}> = () => {
  return (
    <div className="dashboard-travels-info-wrapper">
      <h2>My Packages</h2>
      <Button
        variant="primary"
        data-test="docs-btn-anchor"
        href="/"
        className="add-new-travel"
      >
        Add New
      </Button>
      <PackageCard />
    </div>
  );
};
