import React, { FC } from "react";
import LocationIcon from "../../assets/images/svg/location.svg";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { IFlightOptions } from "models/interfaces";
import { SkeletonText } from "components";

interface IProps {
  travelDepartureInfoData: IFlightOptions;
  isLoading: boolean;
}

export const DepartureInfo: FC<IProps> = ({
  travelDepartureInfoData,
  isLoading,
}) => {
  const size = UseWindowSize();
  const departureData = {
    fromLocation: "Malaysia, Kuala Lumpur",
    fromDate: "25 JUL 2021",
    fromTime: "20:15",
  };

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
              {travelDepartureInfoData.fromLocation
                ? travelDepartureInfoData.fromLocation
                : departureData.fromLocation}
            </span>
          </div>
          <div className={`text-align-last-left ${size.width < 768 && "mb-2"}`}>
            <span className="search-departure-date">
              {travelDepartureInfoData.fromDate
                ? travelDepartureInfoData.fromDate
                : departureData.fromDate}
            </span>
            <span className="search-departure-date ml-4">
              {travelDepartureInfoData.fromTime
                ? travelDepartureInfoData.fromTime
                : departureData.fromTime}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
