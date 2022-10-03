import React, { FC } from "react";
import LocationIcon from "../../assets/images/svg/location.svg";

export const ArrivalInfo: FC<{}> = () => {
  return (
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
        <span className="search-departure-destination">All countries</span>
      </div>
      <div className="text-align-last-left">
        <span className="search-departure-date">25 AUG 2021</span>
        <span className="search-departure-date ml-4">20:15 (+8GMT)</span>
      </div>
    </div>
  );
};
