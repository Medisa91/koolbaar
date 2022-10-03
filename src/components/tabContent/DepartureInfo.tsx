import React, { FC } from "react";
import LocationIcon from "../../assets/images/svg/location.svg";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

export const DepartureInfo: FC<{}> = () => {
  const size = UseWindowSize();

  return (
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
          Malaysia, Kuala Lumpur
        </span>
      </div>
      <div className={`text-align-last-left ${size.width < 768 && "mb-2"}`}>
        <span className="search-departure-date">25 JUL 2021</span>
        <span className="search-departure-date ml-4">20:15 (+8GMT)</span>
      </div>
    </div>
  );
};
