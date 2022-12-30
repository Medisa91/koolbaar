import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Button } from "layers";
import PlaneIcon from "../../assets/images/plane.png";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { IMyPackages } from "models/interfaces";

interface IProps {
  data: IMyPackages;
}

export const Cards: React.FC<IProps> = ({ data }) => {
  const windowSize = UseWindowSize();

  return (
    <Col
      key={data?.owner}
      lg={3}
      md={4}
      sm={12}
      className={`${windowSize.width < 768 && "p-0"} mb-5`}
      style={windowSize.width < 768 ? { width: "318px" } : null}
      data-testid="container"
    >
      <Card className="my-package-card-wrapper">
        <Card.Header className="card-request-header">
          <Row>
            <Col xs={3} className="text-left header-card-titles">
              <div>
                <span className="text-left">{data?.fromCountryAbbr}</span>
              </div>
              <div>
                <span className="text-left">{data?.departureTime}</span>
              </div>
            </Col>
            <Col xs={6} className="text-center header-card-plane px-1">
              <div>
                <span>{data?.packagetype}</span>
              </div>
              <div>
                <span className="mb-0">
                  - - - -{" "}
                  <img
                    src={PlaneIcon}
                    className="card-request-icon"
                    alt="location-img"
                  />{" "}
                  - - - -
                </span>
              </div>
            </Col>
            <Col xs={3} className="header-card-titles">
              <div className="text-right">
                <span>{data?.toCountryAbbr}</span>
              </div>
              <div className="text-right">
                <span>{data?.arrivalTime}</span>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="card-request-body pt-3">
          <Row>
            <Col xs={12} className="request-body-info">
              <div className="size-received-container">
                <span className="card-text">Size: {data?.size}</span>
                <span className="card-text ml-3">Weight: {data?.weight}</span>
              </div>
              <div>
                <span className="card-text">Item Value: {data?.itemValue}</span>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={8} className="myPackages-body-card text-left">
              <div>
                <span className="card-text">Shipping Deadline:</span>
              </div>
              <div>
                <span className="card-text">{data?.shippingDeadline}</span>
              </div>
            </Col>
            <Col xs={4} className="myPackages-body-card text-right">
              <Button
                variant="primary"
                data-test="docs-btn-anchor"
                href="/"
                className="offer-my-package-btn"
              >
                Offers {data?.offers}
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="card-request-footer">
          <Button
            variant="gray7"
            data-test="docs-btn-anchor"
            className="remove-travel-btn"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button
            variant="gray7"
            data-test="docs-btn-anchor"
            className="edit-travel-btn"
          >
            Edit
          </Button>
          <Button
            variant="warning"
            data-test="docs-btn-anchor"
            className="view-request-btn"
          >
            View Offers
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};
