import React, { useState, useEffect } from "react";
import { Input, Button } from "layers";
import { Col, Row } from "react-bootstrap";
import { RightSidebar } from "layers";
import { useAppSelector } from "redux/store";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { IRequest } from "models/interfaces";
import { getNumberOfMonth, MonthNumber } from "helpers/convertDate";

interface IProps {
  acceptOfferData: IRequest;
}

export const AcceptOffer: React.FC<IProps> = ({ acceptOfferData }) => {
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
  const [showSidebar, setShowSidebar] = useState(false);
  const [service, setService] = useState({ value: 0, label: "Services" });
  const [servicesOptions, setServicesOptions] = useState([]);
  const services = useAppSelector((state) => state.deliveryType);
  const screenSize = UseWindowSize();

  const separatedFromDate = acceptOfferData?.shippingDeadline?.split("-");
  const separatedFromHour = acceptOfferData?.departureTime?.split(":");
  const separatedToDate = acceptOfferData?.shippingDeadline?.split("-");
  const separatedToHour = acceptOfferData?.arrivalTime?.split(":");
  const monthFrom = getNumberOfMonth(parseInt(separatedFromDate[1]));
  const monthTo = getNumberOfMonth(parseInt(separatedFromDate[1]));
  const defaultFromDate = new Date(
    parseInt(separatedFromDate[0]),
    MonthNumber(monthFrom),
    parseInt(separatedFromDate[2]),
    parseInt(separatedFromHour[0]),
    parseInt(separatedFromHour[1]),
    0,
    0
  );
  const defaultToDate = new Date(
    parseInt(separatedToDate[0]),
    MonthNumber(monthTo),
    parseInt(separatedToDate[2]),
    parseInt(separatedToHour[0]),
    parseInt(separatedToHour[1]),
    0,
    0
  );
  const [onFromDate, setOnFromDate] = useState(defaultFromDate);
  const [onToDate, setOnToDate] = useState(defaultToDate);

  const customStyle = {
    control: (styles) => ({
      ...styles,
      height: screenSize?.width < 768 ? 34 : 50,
    }),
    option: (styles) => ({
      ...styles,
      color: "#00043d",
      backgroundColor: "#fff",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#00043d",
    }),
  };

  const handleTermsCheckedChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleGovernmentChange = () => {
    setGovernmentChecked(!governmentChecked);
  };

  const handleStripeSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const options = services?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setService({ value: services[0].id, label: services[0].name });
    setServicesOptions(options);
  }, [services]);

  const handleServicesChange = (selected) => {
    setService(selected);
  };

  return (
    <div className="offer-slider-container">
      <Row className="offer-wrapper">
        <Col xs={12} className="offer-form">
          <h1>Accept/Offer</h1>
          <div className="pickup-input-wrapper">
            <span>I can</span>
            <Select
              className="custom-select-pickup d-inline-block"
              value={service}
              onChange={handleServicesChange}
              options={servicesOptions}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={customStyle}
            />
            <span>your Item at</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="from"
                placeholder="Times Square, Ontario, Canada"
                className="custom-input-from"
                value={acceptOfferData.location}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="offer-form">
          <div className="pickup-input-wrapper">
            <span>On</span>
            <div className="d-inline-block">
              {/* <Input
                size="sm"
                id="on-from"
                placeholder="Pick up"
                value={offerData.onFrom}
                /> */}
              <DatePicker
                className="custom-input-on-from"
                selected={onFromDate}
                onChange={(date) => setOnFromDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
              />
            </div>
            <span>And</span>
            <Select
              className="custom-select-and d-inline-block"
              value={service}
              onChange={handleServicesChange}
              options={servicesOptions}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={customStyle}
            />
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
              {/* <Input
                size="sm"
                id="on-to"
                placeholder="Monday 3PM to 5PM 05/05/2022"
                value={offerData.onTo}
                /> */}
              <DatePicker
                className="custom-input-on-to"
                selected={onToDate}
                onChange={(date) => setOnToDate(date)}
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
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
        <Col xs={12} className="offer-form">
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
        <Col xs={12} className="offer-form">
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
        {/* <Col xs={12} className="offer-form"> */}
        <div style={{ marginTop: "24px" }}>
          <Button
            variant="primary"
            data-test="docs-btn-anchor"
            className="submit-request-btn mt-4"
            onClick={handleStripeSidebar}
          >
            Submit Request
          </Button>
        </div>
        {showSidebar && (
          <div className="offer-sidebar">
            <RightSidebar
              isOpen={showSidebar}
              setIsOpen={setShowSidebar}
              sidebarType="stripe"
            />
          </div>
        )}
      </Row>
    </div>
  );
};
