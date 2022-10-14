import React, { useState, useEffect } from "react";
import { Tabs } from "components";
import { TabOne } from "./TabOne";
import { TabTwo } from "./TabTwo";
import FlightIcon from "../../assets/images/svg/flight.svg";
import HotelIcon from "../../assets/images/svg/hotel.svg";

interface IProps {
  onSelectTab: (key: any) => void;
}

type TabsType = {
  label: string;
  index: number;
  svg: string;
  Component: React.FC<{}>;
}[];

const tabs: TabsType = [
  {
    label: "I am a traveler",
    svg: FlightIcon,
    index: 1,
    Component: TabOne,
  },
  {
    label: "I am looking for travelers",
    svg: HotelIcon,
    index: 2,
    Component: TabTwo,
  },
];

export const FlightInfo: React.FC<IProps> = ({ onSelectTab }) => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  useEffect(() => {
    onSelectTab(selectedTab);
  }, [selectedTab]);

  return (
    <div className="flight-box-container">
      <div className="flight-info-wrapper">
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
    </div>
  );
};
