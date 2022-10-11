import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Button, RightSidebar } from "components";
import { PackageCover } from "./PackageCover";
import PlaneIcon from "../../assets/images/plane.png";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

interface IProps {
  data: {
    name: string;
    label: string;
    size: number;
  };
}

export const Cards: React.FC<IProps> = ({ data }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMoreDetail, setShowMoreDetail] = useState(false);
  const [fade, setFade] = useState(false);
  const windowSize = UseWindowSize();

  const handleOfferSidebar = () => {
    setShowSidebar(!showSidebar);
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
      key={data?.name}
      lg={3}
      md={4}
      sm={12}
      className={`${windowSize.width < 768 && "p-0"} mb-5`}
      style={windowSize.width < 768 ? { width: "318px" } : null}
      data-testid="container"
    >
      <Card className="package-card-wrapper">
        <Card.Header className="card-request-header">
          <Row>
            <Col xs={3} className="text-left header-card-titles">
              <div>
                <span className="text-left">CGK</span>
              </div>
              <div>
                <span className="text-left">15:15</span>
              </div>
            </Col>
            <Col xs={6} className="text-center header-card-plane">
              <div>
                <span className="fw-bold">{data?.label}</span>
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
                <span>DPS</span>
              </div>
              <div className="text-right">
                <span>17:15</span>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="card-request-body">
          <Row>
            <Col xs={7} className="request-body-info">
              <div>
                <span className="card-text">Size: 35*35*36</span>
              </div>
              <div>
                <span className="card-text">Weight: {data?.size}KG</span>
              </div>
              <div>
                <span className="card-text">Item Value: 250$</span>
              </div>
            </Col>
            <Col xs={5} className="request-body-package">
              <div>
                <span>Package ID</span>
              </div>
              <div>
                <span>TRV2569857</span>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={7} className="request-body-date">
              <div>
                <span className="card-text">Shipping Deadline:</span>
              </div>
              <div>
                <span className="card-text">05/05/2022</span>
              </div>
            </Col>
            <Col xs={5} style={{ textAlign: "right" }}>
              <Button
                variant="primary"
                data-test="docs-btn-anchor"
                href="/"
                className="offer-btn"
              >
                Offer $120
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
            onClick={handleOfferSidebar}
          >
            Accept / Make Offer
          </Button>
        </Card.Footer>
      </Card>
      {showMoreDetail && (
        <PackageCover fade={fade} onShowCover={handleShowMoreDetail} />
      )}
      {showSidebar && (
        <div className="offer-sidebar">
          <RightSidebar
            isOpen={showSidebar}
            setIsOpen={setShowSidebar}
            sidebarType="offer"
          />
        </div>
      )}
    </Col>
  );
};
