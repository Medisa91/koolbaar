import React, { useEffect, useState } from "react";
import { Button } from "layers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { PackageCard } from "./PackageCard";
import { Option, IRequest } from "models/interfaces";
import { useAppDispatch, useAppSelector } from "redux/store";
import { getAllHomeRequest } from "redux/actions/flight";

interface IProps {
  type: Option;
  size: Option;
  deliveryType: Option;
}

export const AvailableRequests: React.FC<IProps> = ({
  type,
  size,
  deliveryType,
}) => {
  const windowSize = UseWindowSize();
  const dispatch = useAppDispatch();
  const [requestData, setRequestData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [homeRequestByTravelInfo, setHomeRequestByTravelInfo] =
    useState<IRequest[]>();

  const homeRequestData = useAppSelector((state) => state.homeRequest);
  const homeRequestByTravelData = useAppSelector(
    (state) => state.travelRequestHomeRequest
  );
  useEffect(() => {
    setIsLoading(true)
    const data = {
      packagetypeId: type.value ? type.value : null,
      weightrangeId: size?.value ? size?.value : null,
      deliverytypeId: deliveryType?.value ? deliveryType?.value : null,
    };
    dispatch(getAllHomeRequest(data));
  }, [type, size, deliveryType]);

  useEffect(() => {
    if (homeRequestData?.length !== 0) {
      setRequestData(homeRequestData);
      setIsLoading(false);
      setIsEmpty(false);
      return;
    }
    setRequestData([]);
    setIsEmpty(true);
  }, [homeRequestData]);

  useEffect(() => {
    if (homeRequestByTravelData?.length !== 0)
      setHomeRequestByTravelInfo(homeRequestByTravelData);
  }, [homeRequestByTravelData]);

  return (
    <div className="requests-info-wrapper">
      {windowSize?.width >= 768 && (
        <h2 className="mt-2 mb-4">Available Requests</h2>
      )}
      {windowSize?.width < 768 && (
        <Row
          className="my-4"
          style={{ width: "360px", margin: "auto", alignItems: "center" }}
        >
          <Col xs={6}>
            <h2>Available Requests</h2>
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
              Add my travel
            </Button>
          </Col>
        </Row>
      )}
      <PackageCard
        isLoading={isLoading}
        requestData={requestData}
        isEmpty={isEmpty}
      />
    </div>
  );
};
