import React, { useEffect, useState } from "react";
import { Button } from "layers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { PackageCard } from "./PackageCard";
import { Option } from "models/interfaces";
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
  const homeRequestData = useAppSelector((state) => state.homeRequest);

  useEffect(() => {
    const data = {
      packagetypeId: null,
      weightrangeId: null,
      deliverytypeId: null,
    };
    dispatch(getAllHomeRequest(data));
  }, []);

  useEffect(() => {
    setRequestData(homeRequestData);
  }, [homeRequestData]);

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
        type={type}
        size={size}
        deliveryType={deliveryType}
        requestData={requestData}
      />
    </div>
  );
};
