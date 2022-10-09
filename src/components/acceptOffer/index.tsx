import React, { useState } from "react";
import { Input, Button, Register } from "components";
import { Col, Row } from "react-bootstrap";

export const AcceptOffer: React.FC = () => {
  const [offerData, setOfferData] = useState({
    offerType: "",
    from: "",
    to: "",
    onFrom: "",
    and: "",
    at: "",
    onTo: "",
    for: "",
    via: "",
    number: "",
    message: "",
  });
  
  // const handleClick = (): void => {
  //   if (!offerData.offerType || !offerData.age || !offerData.img) {
  //     return;
  //   }
  //   setPeople([
  //     ...people,
  //     {
  //       name: offerData.name,
  //       age: parseInt(offerData.age),
  //       url: offerData.img,
  //       note: offerData.note,
  //     },
  //   ]);

  //   setOfferData({
  //     offerType: "",
  //     from: "",
  //     to: "",
  //     onFrom: "",
  //     and: "",
  //     at: "",
  //     onTo: "",
  //     for: "",
  //     via: "",
  //     number: "",
  //     message: "",
  //   });
  // };

  return (
    <div className="offer-slider-container">
      <Row className="offer-wrapper">
        <Col xs={12} className="offer-form">
          <h1>Accept/Offer</h1>
          <div className="pickup-input-wrapper">
            <span>I can</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="pick-up"
                placeholder="Pick up"
                className="custom-input-pickup"
                value={offerData.offerType}
              />
            </div>
            <span>your Item at</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="from"
                placeholder="Times Square, Ontario, Canada"
                className="custom-input-from"
                value={offerData.from}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="offer-form">
          <div className="pickup-input-wrapper">
            <span>On</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="on-from"
                placeholder="Pick up"
                className="custom-input-on-from"
                value={offerData.onFrom}
              />
            </div>
            <span>And</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="drop-off"
                placeholder="Drop off"
                className="custom-input-and"
                value={offerData.and}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="offer-form">
          <div className="pickup-input-wrapper">
            <span>At</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="at"
                placeholder="No2, Razavi 22, Rezashahr, Mashhad, Iran"
                className="custom-input-at"
                value={offerData.at}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="offer-form">
          <div className="pickup-input-wrapper">
            <span>On</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="on-to"
                placeholder="Monday 3PM to 5PM 05/05/2022"
                className="custom-input-on-to"
                value={offerData.onTo}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="offer-form">
          <div className="pickup-input-wrapper">
            <span>For</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="for"
                placeholder="600 CAD"
                className="custom-input-for"
                value={offerData.for}
              />
            </div>
            <span>Via</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="via"
                placeholder="Canadian Airline Flight"
                className="custom-input-via"
                value={offerData.via}
              />
            </div>
            <span>No.</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="number"
                placeholder="D78698558"
                className="custom-input-number"
                value={offerData.number}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="offer-form">
          <div className="pickup-input-wrapper">
            <span>Message</span>
            <div>
              <Input
                size="sm"
                id="message"
                placeholder="Monday 3PM to 5PM 05/05/2022"
                className="custom-input-message"
                value={offerData.message}
                textArea={true}
                rows={4}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
