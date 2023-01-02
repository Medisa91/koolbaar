import React, { useState, useEffect } from "react";
import { Input, Button } from "layers";
import { Uploader } from "components";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { useAppDispatch, useAppSelector } from "redux/store";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { components } from "react-select";
import { getAllSizeRange, getAllDeliveryType } from "redux/actions/types";
import { addNewTravel } from "redux/actions/dashboard";
import { IAddTravel } from "models/interfaces";

export const AddTravel: React.FC = () => {
  const { t } = useTranslation();
  const windowSize = UseWindowSize();
  const dispatch = useAppDispatch();
  const [travelData, setTravelData] = useState<IAddTravel>({
     packagetypeId:"",
     packageType:"",
     weight:"",
     value:"",
     sizeWidth:"",
     sizeHeight:"",
     sizeLength:"",
     fromCountry:"",
     fromCountryAbbr:"",
     fromCity:"",
     deliverytypeIds:"",
     toCountry:"",
     toCountryAbbr:"",
     toCity:"",
     fromDate:"",
     toDate:"",
     offerPrice:"",
     message:"",
     images:"",
  });
  const [termsChecked, setTermsChecked] = useState(false);
  const [governmentChecked, setGovernmentChecked] = useState(false);
  const [size, setSize] = useState({});
  const [sizeOptions, setSizeOptions] = useState([]);
  const sizeRanges = useAppSelector((state) => state.sizeRange);
  const [service, setService] = useState({ value: 0, label: "Services" });
  const [servicesOptions, setServicesOptions] = useState([]);
  const services = useAppSelector((state) => state.deliveryType);
  const [arrivalBetweenDate, setArrivalBetweenDate] = useState(new Date());
  const [toArrivalDate, setToArrivalDate] = useState(new Date());
  const [departureBetweenDate, setDepartureBetweenDate] = useState(new Date());
  const [toDepartureDate, setToDepartureDate] = useState(new Date());
  const [from, setFrom] = useState({ value: 0, label: "Canada" });
  const [to, setTo] = useState({ value: 0, label: "Tehran" });

  const handleTermsCheckedChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleGovernmentChange = () => {
    setGovernmentChecked(!governmentChecked);
  };

  const changeFromPlace = (e) => {
    setFrom(e);
  };

  const changeToPlace = (e) => {
    setTo(e);
  };
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setTravelData({ ...travelData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getAllSizeRange());
    dispatch(getAllDeliveryType());
  }, []);

  useEffect(() => {
    const options = sizeRanges?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setSize({ value: sizeRanges[0]?.id, label: sizeRanges[0]?.name });
    setSizeOptions(options);
  }, [sizeRanges]);

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

  const handleSizeChange = (selected) => {
    setSize(selected);
  };

  const handleServicesChange = (selected) => {
    setService(selected);
  };

  const customStyle = {
    control: (styles) => ({
      ...styles,
      height: windowSize?.width < 768 ? 34 : 50,
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

  const SelectMenuButton = (props) => {
    return (
      <components.MenuList {...props}>{props.children}</components.MenuList>
    );
  };

  const addTravel = () => {
    const data = {
      // packagetypeId: type.value ? type.value : null,
      // packageType,
      // weight,
      // value,
      // sizeWidth,
      // sizeHeight,
      // sizeLength,
      // fromCountry,
      // fromCountryAbbr,
      // fromCity,
      // deliverytypeIds,
      // toCountry,
      // toCountryAbbr,
      // toCity,
      // fromDate,
      // toDate,
      // offerPrice,
      // message,
      // images,
    };
    dispatch(addNewTravel(data));
  };

  return (
    <div className="request-slider-container">
      <Row className="request-wrapper">
        <Col xs={12} className="request-form">
          <h1>Add Travelers</h1>
          <div className="send-input-wrapper">
            <span className="send-pack-title">I will travel from</span>
            <div className="d-inline-block">
              <GooglePlacesAutocomplete
                selectProps={{
                  className: "custom-place-from d-inline-block",
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
            <span className="travel-to-title">To</span>
            <div className="d-inline-block">
              <GooglePlacesAutocomplete
                selectProps={{
                  className: "custom-place-from d-inline-block",
                  value: to,
                  placeholder: "City or Country",
                  onChange: (e) => changeToPlace(e),
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
            <span className="between-title">Between</span>
            <div className="d-inline-block">
              <DatePicker
                className="custom-input-between"
                selected={arrivalBetweenDate}
                onChange={(date) => setArrivalBetweenDate(date)}
                dateFormat="EEEE, MM/dd/yyyy"
                showTimeInput
              />
            </div>
            <span className="to-title">To</span>
            <div className="d-inline-block">
              <DatePicker
                className="custom-input-to-request"
                selected={toArrivalDate}
                onChange={(date) => setToArrivalDate(date)}
                dateFormat="EEEE, MM/dd/yyyy"
                showTimeInput
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="carry-title">And can carry</span>
            <div className="d-inline-block">
              <Select
                className="custom-select-size d-inline-block"
                value={size}
                onChange={handleSizeChange}
                options={sizeOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
              />
            </div>
            <span className="package-title">Package for</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="value"
                placeholder="200 CAD"
                className="custom-input-package"
                // value={offerData.onFrom}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="and-destination-title">And</span>
            <div className="d-inline-block">
              <Select
                className="custom-select-post-service d-inline-block"
                value={service}
                onChange={handleServicesChange}
                options={servicesOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
              />
            </div>
            <span className="size-title">At your Destination</span>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="between-title">Between</span>
            <div className="d-inline-block">
              <DatePicker
                className="custom-input-between"
                selected={departureBetweenDate}
                onChange={(date) => setDepartureBetweenDate(date)}
                dateFormat="EEEE, MM/dd/yyyy"
                showTimeInput
              />
            </div>
            <span className="to-title">To</span>
            <div className="d-inline-block">
              <DatePicker
                className="custom-input-to-request"
                selected={toDepartureDate}
                onChange={(date) => setToDepartureDate(date)}
                dateFormat="EEEE, MM/dd/yyyy"
                showTimeInput
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div
            style={
              windowSize.width < 768 ? { width: "345px" } : { width: "580px" }
            }
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
                // value={offerData.message}
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
            onClick={addTravel}
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
