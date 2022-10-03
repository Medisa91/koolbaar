/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import { Button } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCheck } from "@fortawesome/free-solid-svg-icons";
import CertificateYellowIcon from "../../assets/images/svg/verified-yellow.svg";
import CertificateGreenIcon from "../../assets/images/svg/verified-green.svg";
import PackageImg01 from "../../assets/images/package01.png";
import PackageImg02 from "../../assets/images/package02.png";
import PackageImg03 from "../../assets/images/package03.png";
import PackageImg04 from "../../assets/images/package04.png";

interface IProp {
  onShowCover: (key: any) => void;
  fade: boolean;
}
export const PackageCover: React.FC<IProp> = ({ onShowCover, fade }) => {
  const [showCover, setShowCover] = useState(false);
  const [openProfileBox, setOpenProfileBox] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleShow = () => {
    setShowCover(!showCover);
    onShowCover(showCover);
    setFadeOut(true);
  };

  const handleSelect = (show) => {
    setOpenProfileBox(show);
  };

  return (
    <div className="more-detail-wrapper">
      <Button variant="primary" className="close-card-btn" onClick={handleShow}>
        <FontAwesomeIcon icon={faClose} />
      </Button>
      <Card
        className={`package-card-wrapper mb-3 request-card-wrapper ${
          fade ? "fadeIn" : ""
        } ${fadeOut ? "fadeOut" : ""}`}
      >
        <Card.Header className="card-cover-header">
          <div>
            <span>Owner:</span> Jacob Arlington
            <Dropdown
              className="profile-dropdown d-inline"
              onToggle={handleSelect}
            >
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-basic"
                className="px-0 mx-0"
              >
                {openProfileBox ? (
                  <img src={CertificateGreenIcon} alt="profile-img" />
                ) : (
                  <img src={CertificateYellowIcon} alt="profile-img" />
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <FontAwesomeIcon className="mr-2" icon={faCheck} /> Profile
                  Picture
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <FontAwesomeIcon className="mr-2" icon={faCheck} /> Valid
                  Passport
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <FontAwesomeIcon className="mr-2" icon={faCheck} />
                  ID Validation (Passport)
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <FontAwesomeIcon className="mr-2" icon={faCheck} />
                  Proof of address
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <FontAwesomeIcon className="mr-2" icon={faCheck} />
                  Successful Transaction (10+)
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <FontAwesomeIcon className="mr-2" icon={faCheck} />
                  Rating ( 4.5/5 )
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <span>Accepted Delivery Type:</span> Pickup,Post, Drop Off
          </div>
        </Card.Header>
        <Card.Body className="request-card-border location-card-info card-cover-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            euismod massa augue, non venenatis
          </p>
          <div className="text-left">
            <span className="location-title">Location:</span>
          </div>
          <div>
            <p className="location-description">
              No2, FCUK Street, Ontario, Canada
            </p>
          </div>
          <div className="text-left mb-1">
            <span className="location-title">Images: </span>
          </div>

          <Row className="image-card-wrapper">
            <Col xs={3}>
              <img src={PackageImg01} alt="package-img" />
            </Col>
            <Col xs={3}>
              <img src={PackageImg02} alt="package-img" />
            </Col>
            <Col xs={3}>
              <img src={PackageImg03} alt="package-img" />
            </Col>
            <Col xs={3}>
              <img src={PackageImg04} alt="package-img" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
