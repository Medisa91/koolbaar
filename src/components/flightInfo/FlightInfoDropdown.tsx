import React, { FC} from "react";
import { Col, Row } from "react-bootstrap";

export const FlightInfoDropdown: FC = () => {
  return (
    <>
      <Row>
        <Col xs={4} className="pt-2 pl-4">
          <input
            className="ml-auto direct-radio-btn"
            type="radio"
            name="flight-name"
          />
          <span className="airline-direct-title">AirAsia</span>
        </Col>
        <Col xs={4} className="direct-time-title pl-0">
          <span>MON 25 July 2021</span>
          <span>20:15 (+8GMT)</span>
        </Col>
        <Col xs={4} className="direct-location-title p-0">
          <span>Kuala Lumpur, NTGA</span>
          <span>Yogyakarta, WXYC</span>
        </Col>
      </Row>
      <Row>
        <Col xs={4} className="pt-2 pl-4">
          <input
            className="ml-auto direct-radio-btn"
            type="radio"
            name="flight-name"
          />
          <span className="airline-direct-title">AirAsia</span>
        </Col>
        <Col xs={4} className="direct-time-title pl-0">
          <span>MON 25 July 2021</span>
          <span>20:15 (+8GMT)</span>
        </Col>
        <Col xs={4} className="direct-location-title p-0">
          <span>Kuala Lumpur, NTGA</span>
          <span>Yogyakarta, WXYC</span>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={4} className="pt-2 pl-4">
          <input
            className="ml-auto direct-radio-btn"
            type="radio"
            name="flight-name"
          />
          <span className="airline-direct-title">AirAsia</span>
        </Col>
        <Col xs={4} className="direct-time-title pl-0">
          <span>MON 25 July 2021</span>
          <span>20:15 (+8GMT)</span>
        </Col>
        <Col xs={4} className="direct-location-title p-0">
          <span>Kuala Lumpur, NTGA</span>
          <span>Yogyakarta, WXYC</span>
        </Col>
      </Row>
    </>
  );
};
