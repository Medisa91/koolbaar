/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Button } from "layers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { IOfferReceived } from "models/interfaces";
import { getRequestTimeline } from "redux/actions/dashboard";
import { useAppDispatch, useAppSelector } from "redux/store";

interface IProp {
  setShowMoreDetail: (key: any) => void;
  fade: boolean;
  data: IOfferReceived;
}
export const PackageCover: React.FC<IProp> = ({ setShowMoreDetail, fade, data }) => {
  const [showCover, setShowCover] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [timelines, setTimelines] = useState([]);
  const dispatch = useAppDispatch();
  const requestTimelines: any = useAppSelector(
    (state) => state.requestTimeline
  );

  const handleShow = () => {
    setShowCover(!showCover);
    setShowMoreDetail(showCover);
    setFadeOut(true);
  };

  useEffect(() => {
    dispatch(getRequestTimeline(data.reqId));
  }, []);
  
  useEffect(() => {
    if (requestTimelines?.length !== 0) setTimelines(requestTimelines);
  }, [requestTimelines]);

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
              {timelines?.length !== 0 &&
                timelines?.map((item) => {
                  return (
                    <div>
                      <span className="offer-deliver-bullet"></span>
                      <p className="offer-deliver-status">{item.date}</p>
                      <p className="offer-deliver-status-desc">{item.name}</p>
                    </div>
                  );
                })}
            </Col>
            <Col xs={6} className="note-offer-detail">
              <span className="d-block">Note:</span>
              <span>{data.message}</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
