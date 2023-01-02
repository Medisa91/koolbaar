import React, { useState, useEffect } from "react";
import { Input, Button } from "layers";
import { Uploader } from "components";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { useAppSelector, useAppDispatch } from "redux/store";
import Select from "react-select";
import DatePicker from "react-datepicker";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { IAddPackage } from "models/interfaces";
import { components } from "react-select";
import { getAllPackagesType } from "redux/actions/types";

export const AddPackage: React.FC = () => {
  const size = UseWindowSize();
  const dispatch = useAppDispatch();
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
  const [typeOptions, setTypeOptions] = useState([]);
  const [type, setType] = useState({ value: 0, label: "Type" });
  const [service, setService] = useState({ value: 0, label: "Services" });
  const [servicesOptions, setServicesOptions] = useState([]);
  const services = useAppSelector((state) => state.deliveryType);
  const packagesType = useAppSelector((state) => state.packageTypes);
  const screenSize = UseWindowSize();
  const [betweenDate, setBetweenDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [from, setFrom] = useState({ value: 0, label: "Canada" });
  const [to, setTo] = useState({ value: 0, label: "Tehran" });

  const handleTermsCheckedChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleGovernmentChange = () => {
    setGovernmentChecked(!governmentChecked);
  };

  useEffect(() => {
    const options = packagesType?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setType({ value: packagesType[0]?.id, label: packagesType[0]?.name });
    setTypeOptions(options);
  }, [packagesType]);

  const handleTypeChange = (selected) => {
    setType(selected);
  };

  useEffect(() => {
    const options = services?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setService({ value: services[0]?.id, label: services[0]?.name });
    setServicesOptions(options);
  }, [services]);

  const handleServicesChange = (selected) => {
    setService(selected);
  };

  const customStyle = {
    control: (styles) => ({
      ...styles,
      height: screenSize?.width < 768 ? 34 : 50,
    }),
    option: (styles) => ({
      ...styles,
      color: "#00043d",
      backgroundColor: "#fff",
      flexWrap: "nowrap",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#00043d",
    }),
  };

  const changeFromPlace = (e) => {
    setFrom(e);
  };

  const changeToPlace = (e) => {
    setTo(e);
  };

  const SelectMenuButton = (props) => {
    return (
      <components.MenuList {...props}>{props.children}</components.MenuList>
    );
  };

  useEffect(() => {
    dispatch(getAllPackagesType());
  }, []);

  return (
    <div className="request-slider-container">
      <Row className="request-wrapper">
        <Col xs={12} className="request-form">
          <h1>Send Request</h1>
          <div className="send-input-wrapper">
            <span className="send-pack-title">I want to send my</span>
            <div className="d-inline-block">
              {/* <Input
                size="sm"
                id="send-pack"
                placeholder="Gadget"
                className="custom-input-send"
                value={offerData.offerType}
              /> */}
              <Select
                className="custom-select-send d-inline-block"
                value={type}
                onChange={handleTypeChange}
                options={typeOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
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
            <span className="package-from-title">From</span>
            <div className="d-inline-block">
              {/* <Input
                size="sm"
                id="from"
                placeholder="Kuala Lumpur"
                className="custom-input-from"
                value={offerData.at}
              /> */}
              <GooglePlacesAutocomplete
                selectProps={{
                  className: "custom-package-place-from d-inline-block",
                  value: from,
                  placeholder: "City or Country",
                  onChange: (e) => changeFromPlace(e),
                  noOptionsMessage: () => null,
                  components: {
                    IndicatorSeparator: () => null,
                    MenuList: SelectMenuButton,
                  },
                  styles: customStyle,
                }}
                apiKey="AIzaSyBxY7vo5Y6IHZ2_0Xk0g3ZBFyVL_wZTuho"
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="package-and-title">And</span>
            <div className="d-inline-block">
              {/* <Input
                size="sm"
                id="and"
                placeholder="Drop off or Post"
                className="custom-input-post-kind"
                value={offerData.at}
              /> */}
              <Select
                className="custom-select-package-service d-inline-block"
                value={service}
                onChange={handleServicesChange}
                options={servicesOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
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
              <DatePicker
                className="custom-input-between"
                selected={betweenDate}
                onChange={(date) => setBetweenDate(date)}
                dateFormat="EEEE, MM/dd/yyyy"
                showTimeInput
              />
            </div>
            <span className="to-title">To</span>
            <div className="d-inline-block">
              <DatePicker
                className="custom-input-to-request"
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="EEEE, MM/dd/yyyy"
                showTimeInput
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
          <div
            style={size.width < 768 ? { width: "345px" } : { width: "580px" }}
          >
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
