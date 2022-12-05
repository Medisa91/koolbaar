import React, { useState, useEffect } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import { Button } from "layers";
import { DebounceInput } from "react-debounce-input";
import { FlightInfoDropdown } from "../flightInfo/FlightInfoDropdown";

interface IProps {
  isOpen: boolean;
  setIsOpen: (key: any) => void;
}

export const DirectInformation: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const handleClose = () => setIsOpen(false);
  const [flightNumber, setFlightNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const changeFlightNumber = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setFlights((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };
  const inputs = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [flights, setFlights] = useState(inputs);
  const addInput = () => {
    setFlights((s: any) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  return (
    <>
      <Modal
        className="direct-modal-wrapper"
        show={isOpen}
        onHide={handleClose}
      >
        <Modal.Body>
          <span className="enter-travel-information">Enter Flight Numbers</span>
          <Row className="  flight-information-wrapper">
            <Col xs={4} className="pl-0">
              <DebounceInput
                minLength={2}
                debounceTimeout={1000}
                onChange={changeFlightNumber}
                placeholder="N790AN"
                className="custom-input-flight-number d-inline-block"
              />
            </Col>
            <Col xs={2} style={{ alignSelf: "center" }}>
              <span className="airline-direct-title">AirAsia</span>
            </Col>
            <Col xs={3} className="direct-time-title pl-0">
              <span>MON 25 July 2021</span>
              <span>20:15 (+8GMT)</span>
            </Col>
            <Col xs={3} className="direct-location-title p-0">
              <span>Kuala Lumpur, NTGA</span>
              <span>Yogyakarta, WXYC</span>
            </Col>
          </Row>
          {/* <Row className="mt-3 flight-information-wrapper">
            <Col xs={4} className="pl-0">
              <DebounceInput
                minLength={2}
                debounceTimeout={1000}
                onChange={changeFlightNumber}
                placeholder="N790AN"
                className="custom-input-flight-number d-inline-block"
              />
            </Col>
            <Col xs={4}>
              <Button
                onClick={addInput}
                variant="warning"
                data-test="docs-btn-anchor"
                className="add-more-flight-btn"
              >
                Add More Flight
              </Button>
            </Col>
          </Row> */}
          {flights.map((item, i) => {
            return (
              <Row className="mt-3 flight-information-wrapper">
                <Col xs={4} className="pl-0">
                  <DebounceInput
                    value={item.value}
                    minLength={2}
                    debounceTimeout={1000}
                    onChange={changeFlightNumber}
                    placeholder="N790AN"
                    className="custom-input-flight-number d-inline-block"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  />
                </Col>
                <Col xs={4}>
                  <Button
                    onClick={addInput}
                    variant="warning"
                    data-test="docs-btn-anchor"
                    className="add-more-flight-btn"
                  >
                    Add More Flight
                  </Button>
                </Col>
              </Row>
            );
          })}
          {isDropdownOpen && (
            <div className="flight-direct-info-table">
              <FlightInfoDropdown />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
