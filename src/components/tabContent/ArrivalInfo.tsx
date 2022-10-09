import React, { FC , useState, useEffect} from "react";
import LocationIcon from "../../assets/images/svg/location.svg";

interface IProps {
  onSelectArrivalInfo: Function
}

export const ArrivalInfo: FC<IProps> = ({onSelectArrivalInfo}) => {
  const [arrivalData, setArrivalData] = useState({
    to: "Canada, Toronto",
    toDate: "25 AUG 2021 20:15"
  });

  useEffect(() => {
    onSelectArrivalInfo(arrivalData)
  }, [])

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
        <span className="search-departure-destination">{arrivalData.to}</span>
      </div>
      <div className="text-align-last-left">
        <span className="search-departure-date">25 AUG 2021</span>
        <span className="search-departure-date ml-4">20:15 (+8GMT)</span>
      </div>
    </div>
  );
};
