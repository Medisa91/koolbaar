import React, { useState, useEffect } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import Select, { components } from "react-select";
import DatePicker from "react-modern-calendar-datepicker";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components";

interface IProps {
  isOpen: boolean;
  setIsOpen: (key: any) => void;
}

export const TravelInformation: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const screenSize = UseWindowSize();
  const [from, setFrom] = useState({});
  const [to, setTo] = useState({});
  const [selectedDepartureDay, setSelectedDepartureDay] = useState(null);
  const [selectedArrivalDay, setSelectedArrivalDay] = useState(null);
  // const [options, setOptions] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(5);
  // const initialPosts = slice(post, 0, index);
  const handleClose = () => setIsOpen(false);

  const options = [
    { value: 1, label: "Destination 1" },
    { value: 2, label: "Destination 2" }
  ];

  // const getCountriesName = () => {
  //   fetch("https://countriesnow.space/api/v0.1/countries")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const countriesData = data?.data?.map((item) => {
  //         return item?.cities?.map((city) => {
  //           return {
  //             value: city,
  //             label: `${item?.country} , ${city}`,
  //           };
  //         });
  //       });
  //       setOptions(countriesData);
  //     })
  //     .catch((e) => console.log(e));
  // };

  // useEffect(() => {
  //   getCountriesName();
  // }, []);

  const handleFromChange = (selected) => {
    setFrom(selected);
  };

  const handleToChange = (selected) => {
    setTo(selected);
  };

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

  return (
    <>
      <Modal className="info-modal-wrapper" show={isOpen} onHide={handleClose}>
        <Modal.Body>
          <span className="enter-travel-information">
            Enter travel information
          </span>
          <Row>
            <Col xs={6}>
              <div>
                <span className="flight-from-title">From City/Country</span>
                <Select
                  placeholder={"eg. Delhi, India"}
                  className="custom-select-from-city d-inline-block"
                  value={from}
                  onChange={handleFromChange}
                  options={options}
                  components={{
                    IndicatorSeparator: () => null,
                    MenuList: SelectMenuButton,
                  }}
                  styles={customStyle}
                />
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <span className="flight-from-title">To City/Country</span>
                <Select
                  placeholder={"eg. Delhi, India"}
                  className="custom-select-from-city d-inline-block"
                  value={to}
                  onChange={handleToChange}
                  options={options}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={customStyle}
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={6} className="select-date-wrapper pr-0">
              <div>
                <span className="flight-date-title">Departure date</span>
                <DatePicker
                  value={selectedDepartureDay}
                  inputClassName="custom-datepicker"
                  onChange={setSelectedDepartureDay}
                  // inputPlaceholder={<FontAwesomeIcon icon={faCalendar} />}
                  shouldHighlightWeekends
                  calendarPopperPosition="bottom"
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
                  value={selectedArrivalDay}
                  inputClassName="custom-datepicker"
                  onChange={setSelectedArrivalDay}
                  // inputPlaceholder={<FontAwesomeIcon icon={faCalendar} />}
                  shouldHighlightWeekends
                  calendarPopperPosition="bottom"
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
            href="/"
            className="confirm-info-btn"
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
