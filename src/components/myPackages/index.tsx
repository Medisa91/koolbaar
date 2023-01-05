import React, { useState, useEffect } from "react";
import { Button } from "layers";
import { PackageCard } from "./PackageCard";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { IMyPackages } from "models/interfaces";
import { RightSidebar } from "layers";

interface IProps {
  packagesData: IMyPackages[];
}

export const MyPackages: React.FC<IProps> = ({ packagesData }) => {
  const size = UseWindowSize();
  const isMobile = size.width < 768;
  const [showSidebar, setShowSidebar] = useState(false);

  const openAddPackage = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="dashboard-travels-info-wrapper">
      <div className={`${isMobile && "responsive-dashboard-title-width"}`}>
        <h2>My Packages</h2>
        <Button
          variant="primary"
          data-test="docs-btn-anchor"
          onClick={openAddPackage}
          className="add-new-travel"
        >
          Add New
        </Button>
      </div>
      <PackageCard packagesData={packagesData} />
      {showSidebar && (
        <div className="offer-sidebar">
          <RightSidebar
            isOpen={showSidebar}
            setIsOpen={setShowSidebar}
            sidebarType="package"
            mode="add"
          />
        </div>
      )}      
    </div>
  );
};
