/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import { Button } from "components";
import { Gallery } from "react-photoswipe-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { LightBoxItem } from "./LightBoxItem";
import AvatarImg from "../../assets/images/avatar.png";
import ProofImg01 from "../../assets/images/proof01.png";
import ProofImg02 from "../../assets/images/proof02.png";
import ThumbnailProofImg01 from "../../assets/images/proof01-thumbnail.png";
import ThumbnailProofImg02 from "../../assets/images/proof02-thumbnail.png";

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
        className={`traveler-package-card-wrapper mb-3 travelers-card-wrapper ${
          fade ? "fadeIn" : ""
        } ${fadeOut ? "fadeOut" : ""}`}
      >
        <Card.Header className="traveler-card-cover-header">
          <Row>
            <Col xs={3}>
              <img
                src={AvatarImg}
                className="avatar-traveler-icon"
                alt="location-img"
              />
            </Col>
            <Col xs={8}>
              <span className="d-block">About Me:</span> I am a PHD student that
              living down town toronto
            </Col>
            <Col xs={1}></Col>
          </Row>
        </Card.Header>
        <Card.Body className="request-card-border location-cover-info traveler-card-cover-body">
          <div className="text-left">
            <span className="location-title mr-1">Location :</span>
            <span className="location-description">
              927 56th Street, Wetaskiwin, Alberta(AB), T9A 1N8, Canada
            </span>
          </div>
          <div className="text-left">
            <span className="location-title mr-1">I accept :</span>
            <span className="location-description">
              Pickup, Post, Drop off, Buy offline, online
            </span>
          </div>
          <Row className="text-left mb-1">
            <Col xs={6}>
              <span className="location-title">Proof of travel :</span>
              <Row className="image-proof-wrapper mt-2">
                <Gallery>
                  <Col xs={5} className="p-0">
                    <LightBoxItem
                      original={ProofImg01}
                      thumbnail={ThumbnailProofImg01}
                      width="110"
                      height="110"
                    />
                  </Col>
                  <Col xs={5} className="p-0">
                    <LightBoxItem
                      original={ProofImg02}
                      thumbnail={ThumbnailProofImg02}
                      width="110"
                      height="110"
                    />
                  </Col>
                </Gallery>
              </Row>
            </Col>
            <Col xs={6}>
              <span className="travelId-title">Travel ID :</span>
              <span className="travelId-text">TRV2569857</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
