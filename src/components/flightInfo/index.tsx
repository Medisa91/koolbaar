import React, { useState, useEffect } from "react";
import { Tabs } from "components";
import { TabOne } from "./TabOne";
import { TabTwo } from "./TabTwo";
import FlightIcon from "../../assets/images/svg/flight.svg";
import HotelIcon from "../../assets/images/svg/hotel.svg";
import { useTranslation } from "react-i18next";

interface IProps {
  onSelectTab: (key: any) => void;
}

type TabsType = {
  label: string;
  index: number;
  svg: string;
  Component: React.FC<{}>;
}[];

export const FlightInfo: React.FC<IProps> = ({ onSelectTab }) => {
  const { t } = useTranslation();
  const tabs: TabsType = [
    {
      label: t("iAmATraveler"),
      svg: FlightIcon,
      index: 1,
      Component: TabOne,
    },
    {
      label: t("iAmLookingForTravelers"),
      svg: HotelIcon,
      index: 2,
      Component: TabTwo,
    },
  ];
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
