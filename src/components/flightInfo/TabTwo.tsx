import React, { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "layers";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import PlaneIcon from "../../assets/images/plane.png";
import CalendarIcon from "../../assets/images/svg/calendar.svg";
import LocationIcon from "../../assets/images/svg/location.svg";
import { DebounceInput } from "react-debounce-input";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { components } from "react-select";
import { getNumberOfMonth } from "helpers/convertMonthNameToNumber";

export const TabTwo: FC<{}> = () => {
  const size = UseWindowSize();
  const [flightNumber, setFlightNumber] = useState("");
  const [fromCountry, setFromCountry] = useState("Indonesia");
  const [from, setFrom] = useState({ value: 0, label: "Kuala Lumpur, NTGA" });
  const [toCountry, setToCountry] = useState("Indonesia");
  const [to, setTo] = useState({ value: 0, label: "Yogyakarta, WXYC" });
  const changeFlightNumber = (e) => {
    setFlightNumber(e.target.value);
  };

  const changeFromPlace = (e) => {
    if (e.label.includes(",")) {
      const label = `${e.label.split(", ")[0]}${e.label.split(", ")[1]}`;
      setFrom({ value: e.value, label: label });
      setFromCountry(e.label.split(", ")[e.label.split(", ").length - 1]);
    } else if (e.label.includes("-")) {
      const label = `${e.label.split(" - ")[0]}${e.label.split(" - ")[1]}`;
      setFrom({ value: e.value, label: label });
      setFromCountry(e.label.split(" - ")[e.label.split(" - ").length - 1]);
    }
  };

  const changeToPlace = (e) => {
    if (e.label.includes(",")) {
      const label = `${e.label.split(", ")[0]}${e.label.split(", ")[1]}`;
      setTo({ value: e.value, label: label });
      setToCountry(e.label.split(", ")[e.label.split(", ").length - 1]);
    } else if (e.label.includes("-")) {
      const label = `${e.label.split(" - ")[0]}${e.label.split(" - ")[1]}`;
      setTo({ value: e.value, label: label });
      setToCountry(e.label.split(" - ")[e.label.split(" - ").length - 1]);
    }
  };

  const getDate = () => {
    const now = new Date();
    const month = getNumberOfMonth(now.getMonth() + 1);
    const day = now.getDate();
    const year = now.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const customStyle = {
    control: (styles) => ({
      ...styles,
      height: "unset",
      minHeight: 28,
    }),
    option: (styles) => ({
      ...styles,
      color: "#000",
      backgroundColor: "#f3f3f3",
      fontSize: "12px",
      zIndex: 1,
      margin: 0,
    }),
    placeholder: (styles) => ({
      ...styles,
      fontSize: "12px",
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

  return (
    <Row className="tabs-wrapper travelers-tabs">
      <Col lg={2} md={2} sm={12} className="pl-4 pr-0">
        <div className="text-align-last-left mb-3">
          <span className="search-arrival-info">From</span>
        </div>

        <>
          <div className="text-align-last-left">
            <img src={LocationIcon} className="tab-icons" alt="location-img" />
            <GooglePlacesAutocomplete
              selectProps={{
                className: "custom-select-traveler-city d-inline-block",
                value: from,
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
          <div className="text-align-last-left">
            <span className="search-arrival-more ml-3">{fromCountry}</span>
          </div>
        </>
      </Col>
      <Col
        lg={1}
        md={1}
        sm={12}
        className="px-0"
        style={{ textAlignLast: "center" }}
      >
        {size?.width < 768 ? (
          <span className="mb-0" style={{ color: "rgba(0,0,0,0.5)" }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - -{" "}
            <img
              src={PlaneIcon}
              className="search-plane-icon"
              alt="location-img"
            />
          </span>
        ) : (
          <>
            <img
              src={PlaneIcon}
              className="change-flight-plane-icon"
              alt="location-img"
            />
            {/* <a href="/" className="change-flight-text d-block">
              Change Flight
            </a> */}
          </>
        )}
      </Col>
      <Col lg={2} md={2} sm={12}>
        <div className="text-align-last-left mb-3">
          <span className="search-arrival-info">To</span>
        </div>

        <>
          <div className="text-align-last-left">
            <img src={LocationIcon} className="tab-icons" alt="location-img" />
            <GooglePlacesAutocomplete
              selectProps={{
                className: "custom-select-traveler-city d-inline-block",
                value: to,
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
          <div className="text-align-last-left">
            <span className="search-arrival-more ml-3">{toCountry}</span>
          </div>
        </>
      </Col>

      <Col lg={2} md={2} sm={12}>
        <div className="text-align-last-left mb-3">
          {size.width >= 768 && (
            <span className="search-departure-info">Flight Date</span>
          )}
        </div>
        {size.width < 768 ? (
          <div className="text-align-last-left">
            <span className="search-departure-more-title">
              <img
                src={CalendarIcon}
                className="tab-icons"
                alt="location-img"
              />
              {getDate()}
            </span>

          </div>
        ) : (
          <>
            <div className="text-align-last-left">
              <span className="search-departure-more-title">
                <img
                  src={CalendarIcon}
                  className="tab-icons"
                  alt="location-img"
                />
                {getDate()}
              </span>
            </div>
          </>
        )}
      </Col>
      <Col lg={3} md={3} sm={12}>
        <div>
          <div className="text-align-last-left">
            <span className="search-departure-info">Flight Number</span>
          </div>{" "}
          <div>
            <DebounceInput
              minLength={1}
              debounceTimeout={100}
              onChange={changeFlightNumber}
              placeholder={"Enter Flight Number"}
              value={flightNumber}
              className="custom-input-traveler-flight-number d-inline-block"
            />
          </div>
        </div>
      </Col>
      {size.width < 768 ? (
        <Col xs={12}>
          <Button
            type="button"
            className="responsive-change-flight-btn"
            variant="white"
          >
            Change Flight
          </Button>
          <Button
            type="button"
            className="responsive-search-btn"
            variant="warning"
          >
            Search
          </Button>
        </Col>
      ) : (
        <Col lg={2} md={2} sm={12}>
          <Button variant="warning" className="search-btn">
            Search
          </Button>
        </Col>
      )}
    </Row>
  );
};
