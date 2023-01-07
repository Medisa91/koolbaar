import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { RightSidebar } from "layers";
import { Button } from "layers";
import { PackageCover } from "./PackageCover";
import PlaneIcon from "../../assets/images/plane.png";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { IOfferSent } from "models/interfaces";
import { useAppDispatch, useAppSelector } from "redux/store";
import { alterOfferStatus, getAllDashboardData } from "redux/actions/dashboard";
import { Oval } from "react-loader-spinner";

interface IProps {
  data: IOfferSent;
}

export const Cards: React.FC<IProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMoreDetail, setShowMoreDetail] = useState(false);
  const [showStatusBox, setShowStatusBox] = useState(false);
  const [fade, setFade] = useState(false);
  const [isStatusLoading, setIsStatusLoading] = useState(false);
  const windowSize = UseWindowSize();
  const isMobile = windowSize.width < 768;
  const allStatus = useAppSelector((state) => state?.getChangedStatus);
  const changeStatusData = useAppSelector((state) => state?.changeOfferStatus);

  const handleMoreDetail = () => {
    setShowMoreDetail(true);
    setFade(true);
  };

  const showUpdateStatus = () => {
    setShowStatusBox(!showStatusBox);
  };

  const changeStatus = (offId, changestatusId) => {
    setIsStatusLoading(true);
    const data = { offId, changestatusId };
    dispatch(alterOfferStatus(data));
    dispatch(getAllDashboardData());
  };

  useEffect(() => {
    if (changeStatusData) {
      setIsStatusLoading(false);
      setShowStatusBox(false);
    }
  }, [changeStatusData]);

  return (
    <Col
      key={data?.owner}
      lg={6}
      md={12}
      sm={12}
      className={`${windowSize.width < 768 && "p-0"} mb-5`}
      style={windowSize.width < 768 ? { width: "318px" } : null}
      data-testid="container"
    >
      <Card className="receive-offer-card-wrapper contract-modal-wrapper">
        <Card.Body className="card-received-body">
          <Row className={`${isMobile ? "pr-2" : ""}`}>
            <Col xs={2} className="card-receive-side-info">
              <div className="header-card-titles">
                <div>
                  <span>{data.fromCountryAbbr}</span>
                </div>
                <div>
                  <span>{data.fromTime1}</span>
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
                  <span>{data.toCountryAbbr}</span>
                </div>
                <div>
                  <span>{data.toTime1}</span>
                </div>
              </div>
            </Col>
            <Col xs={6} className="receive-body-info">
              <h3 className="received-card-label">{data.packagetype}</h3>
              <div className="size-received-container">
                <span className="card-text">Size: {data.size}</span>
                <span className="card-text ml-3">Weight: {data?.weight}</span>
              </div>
              <div className="size-received-container">
                <span className="card-text">Item Value: {data.itemValue}</span>
              </div>
              <div className="mt-4 shipping-received-container">
                <span className="card-text">Shipping Deadline: </span>
              </div>
              <div className="shipping-received-container">
                <span className="card-text">
                  {data.shippingDeadline}{" "}
                  <span
                    style={{ background: data?.daysLeftHex }}
                    className="receive-expire-date"
                  >
                    {data?.daysLeft}
                  </span>
                </span>
              </div>
              <div className="size-received-container mt-3">
                <span className="card-text">To: {data.owner}</span>
              </div>
            </Col>
            <Col xs={4} className="receive-body-offer text-right">
              {showStatusBox ? (
                <div className="delivered-box-info">
                  {allStatus?.map((status) => {
                    return (
                      <a
                        onClick={() => {
                          changeStatus(data.offId, status.id);
                        }}
                      >
                        {status.name}
                      </a>
                    );
                  })}
                </div>
              ) : (
                <>
                  <Button
                    variant="transparent"
                    data-test="docs-btn-anchor"
                    className="offer-status-btn"
                  >
                    <div className="offer-box-btn">
                      Offer <span>{data.offerPrice}</span>
                    </div>
                    <div
                      style={{ background: data.statusHex }}
                      className="status-box-btn"
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
          {data?.status === "Pending" ? (
            <Button
              variant="primary"
              data-test="docs-btn-anchor"
              className="accept-btn"
            >
              Accept
            </Button>
          ) : (
            <Button
              variant="primary"
              data-test="docs-btn-anchor"
              className="update-status-btn"
              onClick={showUpdateStatus}
            >
              Update Status{" "}
              {isStatusLoading && (
                <Oval
                  width="15"
                  height="15"
                  color="#fff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ display: "inline", marginLeft: "5px" }}
                />
              )}
            </Button>
          )}
        </Card.Footer>
      </Card>
      {showMoreDetail && (
        <PackageCover
          data={data}
          fade={fade}
          setShowMoreDetail={setShowMoreDetail}
        />
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
