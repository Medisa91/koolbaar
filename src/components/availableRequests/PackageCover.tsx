/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import { Button } from "layers";
import { Gallery } from "react-photoswipe-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCheck } from "@fortawesome/free-solid-svg-icons";
import CertificateYellowIcon from "../../assets/images/svg/verified-yellow.svg";
import CertificateGreenIcon from "../../assets/images/svg/verified-green.svg";
import { LightBoxItem } from "./LightBoxItem";
import { IRequest } from "models/interfaces";

interface IProp {
  onShowCover: (key: any) => void;
  fade: boolean;
  data: IRequest;
}
export const PackageCover: React.FC<IProp> = ({ onShowCover, fade, data }) => {
  // const node = useRef<HTMLDivElement>(null);

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
        className={`request-package-card-wrapper mb-3 request-card-wrapper ${
          fade ? "fadeIn" : ""
        } ${fadeOut ? "fadeOut" : ""}`}
      >
        <Card.Header className="request-card-cover-header">
          <div>
            <span>Owner:</span> {data?.owner}
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
                  <img
                    className="card-cover-certificate"
                    src={CertificateGreenIcon}
                    alt="profile-img"
                  />
                ) : (
                  <img
                    className="card-cover-certificate"
                    src={CertificateYellowIcon}
                    alt="profile-img"
                  />
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
            <span>{data?.deliveryTypes}:</span> Pickup,Post, Drop Off
          </div>
        </Card.Header>
        <Card.Body className="request-card-border location-card-info request-card-cover-body">
          {/* <p>
            {data?.description}
          </p> */}
          <div className="text-left">
            <span className="location-title">Location:</span>
          </div>
          <div>
            <p className="location-description">{data?.location}</p>
          </div>
          <div className="text-left mb-1">
            <span className="location-title">Images: </span>
          </div>

          <Row className="image-card-wrapper">
            <Gallery>
              {data?.images?.map((item) => {
                return (
                  <Col xs={3}>
                    <LightBoxItem
                      original={item}
                      thumbnail={item}
                      width="160"
                      height="160"
                    />
                  </Col>
                );
              })}
            </Gallery>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
