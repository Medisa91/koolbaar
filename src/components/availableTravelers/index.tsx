import React, { useState, useEffect } from "react";
import { Button } from "layers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { PackageCard } from "./PackageCard";
import { Option } from "models/interfaces";
import { useAppDispatch, useAppSelector } from "redux/store";
import { getAllHomeTravelFilter } from "redux/actions/flight";

interface IProps {
  type: Option;
  size: Option;
  weight: Option;
  services: Option;
  tab: number;
}

export const AvailableTravelers: React.FC<IProps> = ({
  type,
  size,
  weight,
  services,
  tab,
}) => {
  const windowSize = UseWindowSize();
  const dispatch = useAppDispatch();
  const [travelerData, setTravelerData] = useState([]);
  const homeTravelerData = useAppSelector((state) => state.homeTravelFilter);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const data = {
      type: "traveler",
      packagetypeIds: type.value ? type.value : null,
      weightrangeIds: weight?.value ? weight?.value : null,
      deliverytypeIds: services?.value ? services?.value : null,
      sizerangeIds: size?.value ? size?.value : null,
    };
    if (tab === 2) dispatch(getAllHomeTravelFilter(data));
    setTravelerData([]);
  }, [type, size, weight, services]);

  useEffect(() => {
    if (homeTravelerData?.length !== 0) {
      setTravelerData(homeTravelerData);
      setIsLoading(false);
      setIsEmpty(false);
      return;
    }

    setIsEmpty(true);
  }, [homeTravelerData]);

  // useEffect(() => {
  //   setTravelerData(homeTravelerData);
  // }, [homeTravelerData]);

  return (
    <div className="requests-info-wrapper">
      {windowSize?.width >= 768 && (
        <h2 className="mt-2 mb-4">Available Travelers</h2>
      )}
      {windowSize?.width < 768 && (
        <Row
          className="my-4"
          style={{ width: "360px", margin: "auto", alignItems: "center" }}
        >
          <Col xs={6}>
            <h2>Available Travelers</h2>
          </Col>
          <Col xs={6} className="pl-0 text-right">
            <a className="filter-responsive-btn" href="/">
              <FontAwesomeIcon icon={faFilter} />
            </a>
            <Button
              variant="primary"
              data-test="docs-btn-anchor"
              href="/"
              className="add-travel-btn"
            >
              Add my request
            </Button>
          </Col>
        </Row>
      )}
      <PackageCard
        travelerData={travelerData}
        isLoading={isLoading}
        isEmpty={isEmpty}
      />
    </div>
  );
};
