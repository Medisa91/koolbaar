import React, { useEffect, useState } from "react";
import { Button } from "layers";
import { TravelCard } from "./TravelCard";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { IMyTraveler } from "models/interfaces";
import { RightSidebar } from "layers";
import { ToastContainer } from "react-toastify";

interface IProps {
  travelerData: IMyTraveler[];
}

export const MyTravels: React.FC<IProps> = ({ travelerData }) => {
  const size = UseWindowSize();
  const isMobile = size.width < 768;
  const [showSidebar, setShowSidebar] = useState(false);

  const openAddTravel = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="dashboard-travels-info-wrapper">
      <div className={`${isMobile && "responsive-dashboard-title-width"}`}>
        <h2>My Travelers</h2>
        <Button
          variant="primary"
          data-test="docs-btn-anchor"
          onClick={openAddTravel}
          className="add-new-travel"
        >
          Add New
        </Button>
      </div>
      <TravelCard travelerData={travelerData} />
      {showSidebar && (
        <div className="offer-sidebar">
          <RightSidebar
            isOpen={showSidebar}
            setIsOpen={setShowSidebar}
            sidebarType="travel"
            mode="add"
          />
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
