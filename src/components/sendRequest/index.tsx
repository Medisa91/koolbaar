import React, { useState } from "react";
import { Input, Button, Uploader } from "components";
import { Col, Row } from "react-bootstrap";

export const SendRequest: React.FC = () => {
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
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod massa augue, non venenatis eros sollicitudin eget. Curabitur velit risus, consequat non dolor in, consectetur commodo urna.",
  });
  const [termsChecked, setTermsChecked] = useState(false);
  const [governmentChecked, setGovernmentChecked] = useState(false);

  const handleTermsCheckedChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleGovernmentChange = () => {
    setGovernmentChecked(!governmentChecked);
  };

  return (
    <div className="request-slider-container">
      <Row className="request-wrapper">
        <Col xs={12} className="request-form">
          <h1>Send Request</h1>
          <div className="send-input-wrapper">
            <span className="send-pack-title">I want to send my</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="send-pack"
                placeholder="Gadget"
                className="custom-input-send"
                value={offerData.offerType}
              />
            </div>
            <span className="weight-title">At weight</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="weight"
                placeholder="1.2 kg"
                className="custom-input-weight"
                value={offerData.from}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="value-title">And value of</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="value"
                placeholder="1250 USD"
                className="custom-input-value"
                value={offerData.onFrom}
              />
            </div>
            <span className="size-title">And size</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="size-weight"
                placeholder="Weight"
                className="custom-input-size-width"
                value={offerData.and}
              />
            </div>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="size-weight"
                placeholder="Height"
                className="custom-input-size-height"
                value={offerData.and}
              />
            </div>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="size-weight"
                placeholder="Length"
                className="custom-input-size-length"
                value={offerData.and}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="from-title">From</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="from"
                placeholder="Kuala Lumpur"
                className="custom-input-from"
                value={offerData.at}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="and-title">And</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="and"
                placeholder="Drop off or Post"
                className="custom-input-post-kind"
                value={offerData.at}
              />
            </div>
            <span className="at-title">At</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="at"
                placeholder="No2, Razavi 22, Rezashahr, Mashhad, Iran"
                className="custom-input-at-request"
                value={offerData.at}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="between-title">Between</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="between"
                placeholder="Monday, 05/05/2022"
                className="custom-input-between"
                value={offerData.at}
              />
            </div>
            <span className="to-title">To</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="to"
                placeholder="Monday, 05/05/2022"
                className="custom-input-to-request"
                value={offerData.at}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="and-offer-title">And offer</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="and-offer"
                placeholder="600 CAD"
                className="custom-input-and-offer"
                value={offerData.at}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div style={{ width: "580px"}}>
            <Uploader title="Upload package photo" />
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="message-title">Message</span>
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
        <Col xs={12} className="request-form">
          <div style={{ marginTop: "30px" }}>
            <label className="checkbox-container">
              I agree with the terms and condition defined on this{" "}
              <a href="/" style={{ textDecorationLine: "underline" }}>
                link
              </a>
              .
              <input
                type="checkbox"
                checked={termsChecked}
                onChange={handleTermsCheckedChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div>
            <label className="checkbox-container gov-checkbox-container">
              I accept that this offer includes all expenses except the one
              forced by the government like import fee taxes, etc.,{" "}
              <input
                type="checkbox"
                checked={governmentChecked}
                onChange={handleGovernmentChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </Col>
        {/* <Col xs={12} className="request-form"> */}
        <div style={{ marginTop: "24px" }}>
          <Button
            variant="primary"
            data-test="docs-btn-anchor"
            className="submit-request-btn mt-4"
          >
            Submit Request
          </Button>
        </div>
        {/* </Col> */}
      </Row>
    </div>
  );
};
