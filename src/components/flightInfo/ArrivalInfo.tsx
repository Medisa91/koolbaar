import React, { FC, useState, useEffect } from "react";
import LocationIcon from "../../assets/images/svg/location.svg";
import { ArrivalOptions } from "models/interfaces";
import { SkeletonText } from "components";

interface IProps {
  onSelectArrivalInfo: Function;
  travelArrivalInfoData: ArrivalOptions;
  isLoading: boolean;
}

export const ArrivalInfo: FC<IProps> = ({
  onSelectArrivalInfo,
  travelArrivalInfoData,
  isLoading,
}) => {
  const [arrivalData, setArrivalData] = useState({
    to: "Canada, Toronto",
    toDate: "25 AUG 2021",
    toTime: "20:15",
  });

  useEffect(() => {
    setArrivalData(travelArrivalInfoData);
  }, [travelArrivalInfoData]);

  useEffect(() => {
    onSelectArrivalInfo(arrivalData);
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
              To
            </span>
          </div>
          <div className="text-align-last-left">
            <span className="search-departure-destination">
              {arrivalData.to}
            </span>
          </div>
          <div className="text-align-last-left">
            <span className="search-departure-date">{arrivalData?.toDate}</span>
            <span className="search-departure-date ml-4">
              {arrivalData?.toTime}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
