import React, { FC, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FlightSelect } from "./FlightSelect";
import { DepartureInfo } from "./DepartureInfo";
import { ArrivalInfo } from "./ArrivalInfo";
import PlaneIcon from "../../assets/images/plane.png";
import { Button } from "components";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

export const TabOne: FC<{}> = () => {
  const size = UseWindowSize();
  const [isAfterSearch, setIsAfterSearch] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAfterSearch(true);
    }, 5000);
  }, []);

  return (
    <Row className="tabs-wrapper">
      <Col lg={6} md={6} sm={12}>
        <Row>
          <Col lg={7} md={7} sm={12}>
            <FlightSelect isAfterSearch={isAfterSearch} />
          </Col>
          <Col lg={5} md={5} sm={12} className="departure-info-wrapper">
            <DepartureInfo />
          </Col>
        </Row>
      </Col>
      <Col lg={1} md={1} sm={12}>
        {size?.width < 768 ? (
          <span className="mb-0" style={{ color: "rgba(0,0,0,0.5)" }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - -{" "}
            <img
              src={PlaneIcon}
              className="search-plane-icon"
              alt="location-img"
            />
          </span>
        ) : (
          <img
            src={PlaneIcon}
            className="search-plane-icon"
            alt="location-img"
          />
        )}
      </Col>
      <Col lg={5} md={5} sm={12}>
        <Row>
          <Col>
            <ArrivalInfo />
          </Col>
          <Col>
            {isAfterSearch ? (
              <Button
                variant="warning"
                data-test="docs-btn-anchor"
                href="/"
                className="search-flight-btn mt-2"
              >
                Search this flight
              </Button>
            ) : (
              <Button
                variant="gray5"
                data-test="docs-btn-anchor"
                href="/"
                className="define-flight-btn mt-2"
              >
                <span>Select this flight</span>
                define flight number to start
              </Button>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
