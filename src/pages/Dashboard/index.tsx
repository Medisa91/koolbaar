import React, { useState, useEffect } from "react";
import { MyTravels, MyPackages, ReceivedOffer, SentOffer } from "components";
import { Header, Footer } from "layers";
import {
  getAllDashboardData,
  getAllStatusChanges,
} from "redux/actions/dashboard";
import { useAppDispatch, useAppSelector } from "redux/store";

export const Dashboard: React.FC = () => {
  const [display, setDisplay] = useState({ value: 0, label: "All" });
  const dashboardData: any = useAppSelector((state) => state?.userDashboard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllDashboardData());
    dispatch(getAllStatusChanges());
  }, []);

  const handleDisplayFilter = (selected) => {
    setDisplay(selected);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="title-dashboard">
        <h2>Dashboard</h2>
      </div>
      <MyTravels travelerData={dashboardData?.data?.myTravels} />
      <MyPackages packagesData={dashboardData?.data?.myPackages} />
      <ReceivedOffer
        offerReceivedData={dashboardData?.data?.offerReceived}
        display={display}
      />
      <SentOffer
        offerSentData={dashboardData?.data?.offerSent}
        display={display}
      />
      <Footer />
    </div>
  );
};
