import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Button } from "layers";
import { RightSidebar } from "layers";
import { PackageCover } from "./PackageCover";
import PlaneIcon from "../../assets/images/plane.png";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { IRequest } from "models/interfaces";

interface IProps {
  data: IRequest;
}

export const Cards: React.FC<IProps> = ({ data }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMoreDetail, setShowMoreDetail] = useState(false);
  const [fade, setFade] = useState(false);
  const [acceptOfferData, setAcceptOfferData] = useState();
  const windowSize = UseWindowSize();

  const handleOfferSidebar = (data) => {
    setShowSidebar(!showSidebar);
    setAcceptOfferData(data);
  };

  const handleShowMoreDetail = (key) => {
    setShowMoreDetail(key);
  };

  const handleMoreDetail = () => {
    setShowMoreDetail(true);
    setFade(true);
  };

  return (
    <Col
      key={data?.id}
      lg={3}
      md={4}
      sm={12}
      className={`${windowSize.width < 768 && "p-0"} mb-5`}
      style={windowSize.width < 768 ? { width: "318px" } : null}
      data-testid="container"
    >
      <Card className="request-package-card-wrapper">
        <Card.Header className="card-request-header">
          <Row>
            <Col xs={3} className="text-left header-card-titles">
              <div>
                <span className="text-left">{data?.from}</span>
              </div>
              <div>
                <span className="text-left">{data?.departureTime}</span>
              </div>
            </Col>
            <Col xs={6} className="text-center header-card-plane">
              <div>
                <span className="fw-bold">{data?.packagetype}</span>
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
                <span>{data?.to}</span>
              </div>
              <div className="text-right">
                <span>{data?.arrivalTime}</span>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="card-request-body">
          <Row>
            <Col xs={7} className="request-body-info">
              <div>
                <span className="card-text">Size: {data?.size}</span>
              </div>
              <div>
                <span className="card-text">Weight: {data?.weight}KG</span>
              </div>
              <div>
                <span className="card-text">Item Value: {data?.itemValue}</span>
              </div>
            </Col>
            <Col xs={5} className="request-body-package">
              <div>
                <span>Package ID</span>
              </div>
              <div>
                <span>{data?.pkgId}</span>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={7} className="request-body-date">
              <div>
                <span className="card-text">Shipping Deadline:</span>
              </div>
              <div>
                <span className="card-text">{data?.shippingDeadline}</span>
              </div>
            </Col>
            <Col xs={5} style={{ textAlign: "right" }}>
              <Button
                variant="primary"
                data-test="docs-btn-anchor"
                href="/"
                className="offer-btn"
              >
                Offer {data?.offer}
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="card-request-footer">
          <Button
            variant="gray7"
            data-test="docs-btn-anchor"
            className="more-detail-btn"
            onClick={() => {
              handleMoreDetail();
            }}
            onAnimationEnd={() => setFade(false)}
          >
            More Details
          </Button>
          <Button
            variant="warning"
            data-test="docs-btn-anchor"
            className="make-offer-btn"
            onClick={() => handleOfferSidebar(data)}
          >
            Accept / Make Offer
          </Button>
        </Card.Footer>
      </Card>
      {showMoreDetail && (
        <PackageCover
          data={data}
          fade={fade}
          onShowCover={handleShowMoreDetail}
        />
      )}
      {showSidebar && (
        <div className="offer-sidebar">
          <RightSidebar
            isOpen={showSidebar}
            data={acceptOfferData}
            setIsOpen={setShowSidebar}
            sidebarType="offer"
            // sidebarType="request"
          />
        </div>
      )}
    </Col>
  );
};
