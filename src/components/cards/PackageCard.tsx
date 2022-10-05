import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Button } from "components";
import { PackageCover } from "./PackageCover";
import PlaneIcon from "../../assets/images/plane.png";
import data from "meta.json";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { SkeletonGrid } from "components";

export const PackageCard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showMoreDetail, setShowMoreDetail] = useState(false);
  const [fade, setFade] = useState(false);
  const size = UseWindowSize();

  const handleShowMoreDetail = (key) => {
    setShowMoreDetail(key);
  };

  const handleMoreDetail = () => {
    setShowMoreDetail(true);
    setFade(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="flex-grow-1 request-info-wrapper mb-3">
      <Row style={size.width < 768 ? { width: "318px", margin: "auto" } : null}>
        {loading
          ? (data?.plugins ?? []).map((plugin) => (
              <Col key={plugin.name} lg={3} md={4} sm={12}>
                <SkeletonGrid />
              </Col>
            ))
          : (data?.plugins ?? []).map((plugin) => (
              <Col
                key={plugin.name}
                lg={3}
                md={4}
                sm={12}
                className={`${size.width < 768 && "p-0"} mb-5`}
                style={size.width < 768 ? { width: "318px" } : null}
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
                          <span className="fw-bold">Cloths</span>
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
                          <span className="card-text">Weight: 1.2KG</span>
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
                      href="/"
                      className="make-offer-btn"
                    >
                      Accept / Make Offer
                    </Button>
                  </Card.Footer>
                </Card>
                {showMoreDetail && (
                  <PackageCover
                    fade={fade}
                    onShowCover={handleShowMoreDetail}
                  />
                )}
              </Col>
            ))}
      </Row>
    </div>
  );
};
