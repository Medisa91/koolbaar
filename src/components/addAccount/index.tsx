import React, { useState } from "react";
import { Input, Button } from "layers";
import { Col, Row } from "react-bootstrap";
import StripeImg from "../../assets/images/stripe.png";

export const AddAccount: React.FC = () => {
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
    <div className="payment-slider-container">
      <Row className="stripe-payment-wrapper">
        <Col xs={12} className="payment-form">
          <h1>Payment</h1>
        </Col>
        <Col xs={12} className="payment-form">
          <div className="amount-deposit-wrapper">
            <span className="amount-deposit-title">You will deposit</span>
            <span className="amount-deposit-value">$600</span>
            <span className="amount-deposit-description">
              to Koolbar, so as soon as sender approve you will recive the
              payment.
            </span>
          </div>
        </Col>
        <Col xs={12} className="payment-form mt-5">
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
        <Col xs={12} className="payment-form">
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
        <div style={{ marginTop: "24px" }}>
          <img className="ml-3" src={StripeImg} alt="stripe payment" />
          <Button variant="primary" className="deposit-request-btn">
            Deposit
          </Button>
        </div>
      </Row>
    </div>
  );
};
