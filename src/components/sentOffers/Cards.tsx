import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { RightSidebar } from "layers";
import { Button } from "layers";
import { PackageCover } from "./PackageCover";
import PlaneIcon from "../../assets/images/plane.png";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

interface IProps {
  data: {
    name: string;
    label: string;
    size: number;
    status: string;
  };
}

export const Cards: React.FC<IProps> = ({ data }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMoreDetail, setShowMoreDetail] = useState(false);
  const [fade, setFade] = useState(false);
  const windowSize = UseWindowSize();
  const isMobile = windowSize.width < 768;

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
      lg={6}
      md={12}
      sm={12}
      className={`${windowSize.width < 768 && "p-0"} mb-5`}
      style={windowSize.width < 768 ? { width: "318px" } : null}
      data-testid="container"
    >
      <Card className="receive-offer-card-wrapper contract-modal-wrapper">
        <Card.Body className="card-received-body">
          <Row className={`${isMobile ? "pr-2":""}`}>
            <Col xs={2} className="card-receive-side-info">
              <div className="header-card-titles">
                <div>
                  <span>CGK</span>
                </div>
                <div>
                  <span>15:15</span>
                </div>
              </div>
              <div className="header-card-plane rotate-plane-wrapper">
                <div>
                  <span className="mb-0">
                    - - -
                    <img
                      src={PlaneIcon}
                      className="card-request-icon"
                      alt="location-img"
                    />
                    - - -
                  </span>
                </div>
              </div>
              <div className="header-card-titles">
                <div>
                  <span>DPS</span>
                </div>
                <div>
                  <span>17:15</span>
                </div>
              </div>
            </Col>
            <Col xs={6} className="receive-body-info">
              <h3 className="received-card-label">Supplement</h3>
              <div className="size-received-container">
                <span className="card-text">Size: 35*35*36</span>
                <span className="card-text ml-3">Weight: {data?.size}KG</span>
              </div>
              <div className="size-received-container">
                <span className="card-text">Item Value: 250$</span>
              </div>
              <div className="mt-4 shipping-received-container">
                <span className="card-text">Shipping Deadline: </span>
              </div>
              <div className="shipping-received-container">
                <span className="card-text">
                  05/05/2022{" "}
                  <span
                    className={`${
                      data?.status === "Accepted"
                        ? "warning-receive-expire-date"
                        : data?.status === "Delivered"
                        ? "success-receive-expire-date"
                        : "danger-receive-expire-date"
                    } receive-expire-date`}
                  >
                    2 days left
                  </span>
                </span>
              </div>
              <div className="size-received-container mt-3">
                <span className="card-text">To: Jacob Arlington</span>
              </div>
            </Col>
            <Col xs={4} className="receive-body-offer text-right">
              {data?.status === "Delivered" ? (
                <div className="delivered-box-info">
                  <p>Package given</p>
                  <p>Delivered</p>
                  <p>Request for cancel</p>
                </div>
              ) : (
                <>
                  <Button
                    variant="transparent"
                    data-test="docs-btn-anchor"
                    className="offer-status-btn"
                  >
                    <div className="offer-box-btn">
                      Offer <span>$120</span>
                    </div>
                    <div
                      className={`${
                        data?.status === "Accepted"
                          ? "warning-box-btn"
                          : data?.status === "Delivered"
                          ? "success-box-btn"
                          : "danger-box-btn"
                      } status-box-btn`}
                    >
                      {data?.status}
                    </div>
                  </Button>
                  <Button
                    data-test="docs-btn-anchor"
                    className="report-problem-btn"
                  >
                    Report a Problem
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="card-receive-footer m-auto">
          <Button
            variant="gray7"
            data-test="docs-btn-anchor"
            className="receive-more-detail-btn"
            onClick={() => {
              handleMoreDetail();
            }}
            onAnimationEnd={() => setFade(false)}
          >
            {data?.status === "Pending" ? "More Details" : "Timeline"}
          </Button>
          {data?.status === "Pending" ? (
            <Button
              data-test="docs-btn-anchor"
              className={`reject-btn ${isMobile ? "mx-2" : "mx-4"}`}
            >
              Reject
            </Button>
          ) : (
            <Button
              variant="primary"
              data-test="docs-btn-anchor"
              className={`accept-btn ${isMobile ? "mx-2" : "mx-4"}`}
            >
              View Contract
            </Button>
          )}
          <Button
            variant="primary"
            data-test="docs-btn-anchor"
            className="accept-btn"
          >
            {data?.status === "Pending" ? "Accept" : "Update Status"}
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
            sidebarType="request"
          />
        </div>
      )}
    </Col>
  );
};
