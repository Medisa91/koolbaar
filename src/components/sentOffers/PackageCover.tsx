/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Button } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import AvatarImg from "../../assets/images/avatar.png";

interface IProp {
  onShowCover: (key: any) => void;
  fade: boolean;
}
export const PackageCover: React.FC<IProp> = ({ onShowCover, fade }) => {
  const [showCover, setShowCover] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleShow = () => {
    setShowCover(!showCover);
    onShowCover(showCover);
    setFadeOut(true);
  };

  return (
    <div className="dashboard-more-detail-wrapper more-detail-wrapper">
      <Button variant="primary" className="close-card-btn" onClick={handleShow}>
        <FontAwesomeIcon icon={faClose} />
      </Button>
      <Card
        className={`receive-offer-card-wrapper mb-3 offers-card-info-wrapper ${
          fade ? "fadeIn" : ""
        } ${fadeOut ? "fadeOut" : ""}`}
      >
        <Card.Body className="request-card-border location-cover-info offer-card-cover-body">
          <Row className="detail-cover-wrapper">
            <Col xs={6} className="deliver-status text-left">
              <div>
                <span className="offer-deliver-bullet"></span>
                <p className="offer-deliver-status">05/05/2022</p>
                <p className="offer-deliver-status-desc">Offer accepted</p>
              </div>
              <div>
                <span className="offer-deliver-bullet"></span>
                <p className="offer-deliver-status">06/05/2022</p>
                <p className="offer-deliver-status-desc">
                  Picked up by Traveler
                </p>
              </div>
              <div>
                <span className="offer-deliver-bullet"></span>
                <p className="offer-deliver-status">07/05/2022</p>
                <p className="offer-deliver-status-desc">
                  Traveler reaches destination Airport
                </p>
              </div>
            </Col>
            <Col xs={6} className="note-offer-detail">
              <span className="d-block">Note:</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
                lectus tortor. Praesent nisi lectus, molestie a lacinia non,
                fringilla ut velit.
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
