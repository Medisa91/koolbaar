import React, { useState, useEffect } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import Select, { components } from "react-select";
import DatePicker from "react-datepicker";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClose } from "@fortawesome/free-solid-svg-icons";
import { Button } from "layers";
import { MonthNumber } from "helpers/convertMonthNameToNumber";
import { IFlightOptions } from "models/interfaces";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { ITravelInformation } from "models/interfaces";
import { useAppDispatch } from "redux/store";
import { getAllTravelInfoHomeRequests } from "redux/actions/flight";

interface IProps {
  isOpen: boolean;
  setIsOpen: (key: any) => void;
  travelData: IFlightOptions;
}

export const TravelInformation: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  travelData,
}) => {
  const dispatch = useAppDispatch();
  const separatedFromDate = travelData?.fromDate?.split(" ");
  const separatedFromHour = travelData?.fromTime?.split(":");
  const separatedToDate = travelData?.toDate?.split(" ");
  const separatedToHour = travelData?.toTime?.split(":");
  const defaultFromDate = new Date(
    parseInt(separatedFromDate[2]),
    MonthNumber(separatedFromDate[1]),
    parseInt(separatedFromDate[0]),
    parseInt(separatedFromHour[0]),
    parseInt(separatedFromHour[1]),
    0,
    0
  );
  const defaultToDate = new Date(
    parseInt(separatedToDate[2]),
    MonthNumber(separatedToDate[1]),
    parseInt(separatedToDate[0]),
    parseInt(separatedToHour[0]),
    parseInt(separatedToHour[1]),
    0,
    0
  );

  const screenSize = UseWindowSize();
  const [from, setFrom] = useState({
    value: travelData.fromLocation,
    label: travelData.fromLocation,
  });
  const [to, setTo] = useState({
    value: travelData.toLocation,
    label: travelData.toLocation,
  });
  const [fromDate, setFromDate] = useState(defaultFromDate);
  const [toDate, setToDate] = useState(defaultToDate);
  const handleClose = () => setIsOpen(false);

  const customStyle = {
    control: (styles) => ({
      ...styles,
      height: screenSize?.width < 768 ? 41 : 55,
    }),
    option: (styles) => ({
      ...styles,
      color: "#000",
      backgroundColor: "#f3f3f3",
      fontSize: "14px",
      zIndex: 1,
      margin: 0,
    }),
    placeholder: (styles) => ({
      ...styles,
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: 1.21,
      color: "#cbcbcb",
    }),
  };

  const SelectMenuButton = (props) => {
    return (
      <components.MenuList {...props}>
        {props.children}
        {/* <button>Load more</button> */}
      </components.MenuList>
    );
  };

  const getDateCharacter = (date) => {
    var month = date.getUTCMonth() + 1; //months from 1-12
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    var hour = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var ampm = hour >= 12 ? "PM" : "AM";
    return (
      year + "/" + month + "/" + day + " " + hour + ":" + minutes + " " + ampm
    );
  };

  const searchFlight = () => {
    const data: ITravelInformation = {
      fromCityCountry: from.label,
      departureDate: getDateCharacter(fromDate),
      toCityCountry: to.label,
      arrivalDate: getDateCharacter(toDate),
    };
    dispatch(getAllTravelInfoHomeRequests(data));
  };

  const changeFromPlace = (e) => {
    setFrom(e);
  };

  const changeToPlace = (e) => {
    setTo(e);
  };

  return (
    <>
      <Modal
        className="info-modal-wrapper"
        show={isOpen}
        backdrop="static"
        onHide={handleClose}
      >
        <Modal.Body>
          <div className="close-modal-btn-wrapper">
            <a onClick={handleClose}>
              <FontAwesomeIcon icon={faClose} />
            </a>
          </div>
          <span className="enter-travel-information">
            Enter travel information
          </span>
          <Row>
            <Col xs={6}>
              <div>
                <span className="flight-from-title">From City/Country</span>
                <GooglePlacesAutocomplete
                  selectProps={{
                    className: "custom-select-from-city d-inline-block",
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
            </Col>
            <Col xs={6}>
              <div>
                <span className="flight-from-title">To City/Country</span>
                <GooglePlacesAutocomplete
                  selectProps={{
                    className: "custom-select-from-city d-inline-block",
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
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={6} className="select-date-wrapper pr-0">
              <div>
                <span className="flight-date-title">Departure date</span>
                <DatePicker
                  className="custom-datepicker"
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                />
                <div className="datepicket-icon-wrapper">
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
              </div>
            </Col>
            <Col xs={6} className="select-date-wrapper pr-0">
              <div>
                <span className="flight-date-title">Arrival date</span>
                <DatePicker
                  className="custom-datepicker"
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                />
                <div className="datepicket-icon-wrapper">
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
              </div>
            </Col>
          </Row>
          <Button
            variant="warning"
            data-test="docs-btn-anchor"
            onClick={searchFlight}
            className="confirm-info-btn"
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
