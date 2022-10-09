import React, { useState, useEffect } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import Select, { components } from "react-select";
import DatePicker from "react-datepicker";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components";
import { MonthNumber } from "helper/convertMonthNameToNumber";
import { DepartureOptions, ArrivalOptions } from "helper/interface";

interface IProps {
  isOpen: boolean;
  setIsOpen: (key: any) => void;
  fromData: DepartureOptions;
  toData: ArrivalOptions;
}

export const TravelInformation: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  fromData,
  toData,
}) => {
  const separatedFromDate = fromData.fromDate.split(" ");
  const separatedFromHour = separatedFromDate[3].split(":");
  const separatedToDate = toData.toDate.split(" ");
  const separatedToHour = separatedToDate[3].split(":");
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
    value: fromData.from,
    label: fromData.from,
  });
  const [to, setTo] = useState({ value: toData.to, label: toData.to });
  const [fromDate, setFromDate] = useState(defaultFromDate);
  const [toDate, setToDate] = useState(defaultToDate);
  const [departureData, setDepartureData] = useState([]);
  const [arrivalData, setArrivalData] = useState([]);
  const handleClose = () => setIsOpen(false);

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

  useEffect(() => {
    setDepartureData([{ value: fromData.from, label: fromData.from }]);
    setArrivalData([{ value: toData.to, label: toData.to }]);
  }, [fromData, toData]);

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
                  options={departureData}
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
                  options={arrivalData}
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
                {/* <DatePicker
                  value={selectedDepartureDay}
                  inputClassName="custom-datepicker"
                  onChange={setSelectedDepartureDay}
                  // inputPlaceholder={<FontAwesomeIcon icon={faCalendar} />}
                  shouldHighlightWeekends
                  calendarPopperPosition="bottom"
                /> */}
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
                {/* <DatePicker
                  value={selectedArrivalDay}
                  inputClassName="custom-datepicker"
                  onChange={setSelectedArrivalDay}
                  // inputPlaceholder={<FontAwesomeIcon icon={faCalendar} />}
                  shouldHighlightWeekends
                  calendarPopperPosition="bottom"
                /> */}
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
