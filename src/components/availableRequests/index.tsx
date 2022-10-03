import React from "react";
import { PackageCard, Button } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

export function AvailableRequests() {
  const size = UseWindowSize();

  return (
    <div className="requests-info-wrapper">
      {size?.width >= 768 && <h2 className="mt-2 mb-4">Available Requests</h2>}
      {size?.width < 768 && (
        <Row className="my-4" style={{ width: "360px", margin: "auto", alignItems: "center" }}>
          <Col xs={6}>
            <h2 >Available Requests</h2>
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
      <PackageCard />
    </div>
  );
}
