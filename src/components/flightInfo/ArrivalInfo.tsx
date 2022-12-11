import React, { FC} from "react";
import LocationIcon from "../../assets/images/svg/location.svg";
import { IFlightOptions } from "models/interfaces";
import { SkeletonText } from "components";

interface IProps {
  travelArrivalInfoData: IFlightOptions;
  isLoading: boolean;
}

export const ArrivalInfo: FC<IProps> = ({
  travelArrivalInfoData,
  isLoading,
}) => {
  const arrivalData = {
    toLocation: "Canada, Toronto",
    toDate: "25 AUG 2021",
    toTime: "20:15",
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
              To
            </span>
          </div>
          <div className="text-align-last-left">
            <span className="search-departure-destination">
              {travelArrivalInfoData.toLocation
                ? travelArrivalInfoData.toLocation
                : arrivalData?.toLocation}
            </span>
          </div>
          <div className="text-align-last-left">
            <span className="search-departure-date">
              {travelArrivalInfoData.toDate
                ? travelArrivalInfoData.toDate
                : arrivalData?.toDate}
            </span>
            <span className="search-departure-date ml-4">
              {travelArrivalInfoData.toTime
                ? travelArrivalInfoData.toTime
                : arrivalData?.toTime}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
