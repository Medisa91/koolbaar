import React, { FC, useEffect, useState } from "react";
import LocationIcon from "../../assets/images/svg/location.svg";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { DepartureOptions } from "models/interfaces";
import { SkeletonText } from "components";

interface IProps {
  onSelectDepartureInfo: Function;
  travelDepartureInfoData: DepartureOptions;
  isLoading: boolean;
}

export const DepartureInfo: FC<IProps> = ({
  onSelectDepartureInfo,
  travelDepartureInfoData,
  isLoading,
}) => {
  const size = UseWindowSize();
  const [departureData, setDepartureData] = useState({
    from: "Malaysia, Kuala Lumpur",
    fromDate: "25 JUL 2021",
    fromTime: "20:15",
  });

  useEffect(() => {
    setDepartureData(travelDepartureInfoData);
  }, [travelDepartureInfoData]);

  useEffect(() => {
    onSelectDepartureInfo(departureData);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonText />
      ) : (
        <div>
          <div className="text-align-last-left">
            <span className="search-departure-title">
              <img
                src={LocationIcon}
                className="search-box-icon"
                alt="location-img"
              />
              From
            </span>
          </div>
          <div className="text-align-last-left">
            <span className="search-departure-destination">
              {departureData.from}
            </span>
          </div>
          <div className={`text-align-last-left ${size.width < 768 && "mb-2"}`}>
            <span className="search-departure-date">{departureData?.fromDate}</span>
            <span className="search-departure-date ml-4">{departureData?.fromTime}</span>
          </div>
        </div>
      )}
    </>
  );
};
