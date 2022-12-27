import React, { useState } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import { Button } from "layers";
import { RightSidebar } from "layers";
import { PackageCover } from "./PackageCover";
import PlaneIcon from "../../assets/images/plane.png";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCheck } from "@fortawesome/free-solid-svg-icons";
import { ITraveler } from "models/interfaces";
import { getUserLevelColor } from "helpers/getUserLevel";
import { LevelMarker } from "components/common/levelMarker";

interface IProps {
  data: ITraveler;
}

export const Cards: React.FC<IProps> = ({ data }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMoreDetail, setShowMoreDetail] = useState(false);
  const [fade, setFade] = useState(false);
  const [showCover, setShowCover] = useState(false);
  const [openProfileBox, setOpenProfileBox] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleShow = () => {
    setShowCover(!showCover);
    setFadeOut(true);
  };

  const handleSelect = (show) => {
    setOpenProfileBox(show);
  };

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
      key={data?.id}
      lg={3}
      md={4}
      sm={12}
      className={`${windowSize.width < 768 && "p-0"} mb-5`}
      style={windowSize.width < 768 ? { width: "318px" } : null}
      data-testid="container"
    >
      <Card className="traveler-package-card-wrapper">
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
            <Col xs={6} className="text-center header-card-plane px-1">
              <div>
                <span>
                  {data?.fullName}{" "}
                  <Dropdown
                    className="profile-dropdown d-inline ml-1 traveler-dropdown"
                    onToggle={handleSelect}
                  >
                    <Dropdown.Toggle
                      variant="transparent"
                      id="dropdown-basic"
                      className="px-0 mx-0"
                    >
                      <LevelMarker color={getUserLevelColor(data.userLevel)} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {data.isProfilePicture ? (
                          <FontAwesomeIcon className="mr-2" icon={faCheck} />
                        ) : (
                          <FontAwesomeIcon className="mr-2" icon={faClose} />
                        )}
                        Profile Picture
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        {data.isValidPassport ? (
                          <FontAwesomeIcon className="mr-2" icon={faCheck} />
                        ) : (
                          <FontAwesomeIcon className="mr-2" icon={faClose} />
                        )}
                        Valid Passport
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        {data.isIdValidation ? (
                          <FontAwesomeIcon className="mr-2" icon={faCheck} />
                        ) : (
                          <FontAwesomeIcon className="mr-2" icon={faClose} />
                        )}
                        ID Validation (Passport)
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        {data.isProofOfAddress ? (
                          <FontAwesomeIcon className="mr-2" icon={faCheck} />
                        ) : (
                          <FontAwesomeIcon className="mr-2" icon={faClose} />
                        )}
                        Proof of address
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        {data.isSuccessfulTransaction ? (
                          <FontAwesomeIcon className="mr-2" icon={faCheck} />
                        ) : (
                          <FontAwesomeIcon className="mr-2" icon={faClose} />
                        )}
                        Successful Transaction (10+)
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        {data.isRating ? (
                          <FontAwesomeIcon className="mr-2" icon={faCheck} />
                        ) : (
                          <FontAwesomeIcon className="mr-2" icon={faClose} />
                        )}
                        Rating ( 4.5/5 )
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
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
        <Card.Body className="card-request-body pt-3">
          <Row>
            <Col xs={7} className="request-body-info">
              <div>
                <span className="card-text">Max Size: {data?.size}</span>
              </div>
              <div>
                <span className="card-text">
                  Max Item Value: {data?.itemValue}
                </span>
              </div>
              <div>
                <span className="card-text">Max Weight: {data?.weight}</span>
              </div>
            </Col>
            <Col xs={5} className="request-body-package text-right">
              <Button
                variant="primary"
                data-test="docs-btn-anchor"
                href="/"
                className="rating-btn"
              >
                Rating <span>{data?.rating}</span>
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
            className="send-request-btn"
            onClick={handleOfferSidebar}
          >
            Send Request
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
            setIsOpen={setShowSidebar}
            sidebarType="request"
          />
        </div>
      )}
    </Col>
  );
};
