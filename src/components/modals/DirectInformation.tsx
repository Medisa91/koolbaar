import React, { useState, useEffect } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import { Button } from "layers";
import { DebounceInput } from "react-debounce-input";
import { FlightInfoDropdown } from "../flightInfo/FlightInfoDropdown";
import { useAppDispatch, useAppSelector } from "redux/store";
import {
  getFlightInquiry,
  getAllTravelInfoHomeRequests,
} from "redux/actions/flight";
import { IFlightOptions, TravelInformation } from "models/interfaces";

interface IProps {
  isOpen: boolean;
  setIsOpen: (key: any) => void;
  setFlightInquiry?: Function;
  setIsLoading?: Function;
  isLoading: boolean;
}

export const DirectInformation: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  setFlightInquiry,
  setIsLoading,
  isLoading,
}) => {
  const dispatch = useAppDispatch();
  const handleClose = () => setIsOpen(false);
  const flightInquiryData: any = useAppSelector((state) => state.flightInquiry);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [flightNumber, setFlightNumber] = useState("");
  const [disableFlightNumber, setDisableFlightNumber] = useState("");
  const [isClosedItems, setIsClosedItems] = useState(true);
  const [flightInquiryIndirect, setFlightInquiryIndirect] =
    useState<IFlightOptions>();
  const [flightInquiriesIndirect, setFlightInquiriesIndirect] = useState<
    IFlightOptions[]
  >([
    {
      fromLocation: "",
      fromDate: "",
      fromTime: "",
      toLocation: "",
      toDate: "",
      toTime: "",
    },
  ]);

  const isFlightNumberIsSixDigit = (flightNumber: string) => {
    return flightNumber.length >= 6;
  };

  const changeDisableFlightNumber = (e) => {
    setDisableFlightNumber(e.target.value);
  };

  const changeFlightNumber = (e) => {
    // e.preventDefault();
    setIsClosedItems(true);
    setFlightNumber(e.target.value);
    const data = {
      flightNumber,
      departureDate: null,
    };
    if (isFlightNumberIsSixDigit(e.target.value)) {
      setIsDropdownOpen(true);
      dispatch(getFlightInquiry(data));
      return;
    }
    setIsDropdownOpen(false);

    // const index = e.target.id;
    // setFlights((s) => {
    //   const newFlights = s.slice();
    //   newFlights[index].value = e.target.value;
    //   return newFlights;
    // });
  };

  const inputs = [];

  useEffect(() => {
    flightInquiriesIndirect.push(flightInquiryIndirect);
    const data = flightInquiriesIndirect.filter(function (element) {
      return element !== undefined && element.fromLocation !== "";
    });
    setFlightInquiriesIndirect(data);
  }, [flightInquiryIndirect]);

  const [flights, setFlights] = useState(inputs);

  const addInput = () => {
    setFlights((flight: any) => {
      return [
        ...flight,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const RemoveInput = (index) => {
    const list = [...flights];
    list.splice(index, 1);
    setFlights(list);
  };

  const confirmFlight = () => {
    const data = flightInquiriesIndirect;
    dispatch(getAllTravelInfoHomeRequests(data));
    setIsOpen(false);
  };

  useEffect(() => {
    if (flightInquiryData?.data === null || !flightInquiryData?.isSuccess) {
      setIsLoading(false);
      setIsDropdownOpen(false);
    }
    if (flightInquiryData?.data?.length !== 0) setIsLoading(false);
  }, [flightInquiryData]);

  return (
    <>
      <Modal
        className="direct-modal-wrapper"
        show={isOpen}
        onHide={handleClose}
      >
        <Modal.Body>
          <span className="enter-travel-information">Enter Flight Numbers</span>
          {flightInquiriesIndirect?.length !== 0 &&
            flightInquiriesIndirect?.map((item) => {
              return (
                <Row className="flight-information-wrapper mt-2">
                  <Col xs={4} className="pl-0">
                    <DebounceInput
                      minLength={1}
                      debounceTimeout={100}
                      onChange={changeDisableFlightNumber}
                      placeholder="N790AN"
                      className="custom-input-flight-number d-inline-block"
                      value={disableFlightNumber}
                      disabled
                    />
                  </Col>
                  <Col xs={2} style={{ alignSelf: "center" }}>
                    <span className="airline-direct-title">AirAsia</span>
                  </Col>
                  <Col xs={3} className="direct-time-title pl-0">
                    <span>{item.fromDate}</span>
                    <span>{item.fromTime}</span>
                  </Col>
                  <Col xs={3} className="direct-location-title p-0">
                    <span>{item.fromLocation}</span>
                    <span>{item.toLocation}</span>
                  </Col>
                </Row>
              );
            })}
          <Row className="mt-3 flight-information-wrapper">
            <Col xs={4} className="pl-0">
              <DebounceInput
                value={flightNumber}
                minLength={1}
                debounceTimeout={1000}
                onChange={changeFlightNumber}
                placeholder="N790AN"
                className="custom-input-flight-number d-inline-block"
                // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
          {flights.map((item, i) => {
            return (
              <Row className="mt-3 flight-information-wrapper">
                <Col xs={4} className="pl-0">
                  <DebounceInput
                    value={flightNumber}
                    minLength={1}
                    debounceTimeout={1000}
                    onChange={changeFlightNumber}
                    placeholder="N790AN"
                    className="custom-input-flight-number d-inline-block"
                    // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  />
                </Col>
                <Col xs={4}>
                  <Button
                    onClick={RemoveInput}
                    data-test="docs-btn-anchor"
                    className="remove-more-flight-btn"
                  >
                    Remove Flight
                  </Button>
                </Col>
              </Row>
            );
          })}
          {isDropdownOpen && isClosedItems && (
            <div className="flight-direct-info-table" style={{ zIndex: 1 }}>
              <FlightInfoDropdown
                setFlightNumber={setFlightNumber}
                setFlightInquiryIndirect={setFlightInquiryIndirect}
                setFlightInquiry={setFlightInquiry}
                flightInquiryData={flightInquiryData?.data}
                setIsClosedItems={setIsClosedItems}
                isLoading={isLoading}
              />
            </div>
          )}
          <Row className="mt-3">
            <Button
              disabled={flightInquiriesIndirect?.length === 0}
              variant="warning"
              data-test="docs-btn-anchor"
              onClick={confirmFlight}
              className="confirm-indirect-btn"
            >
              Confirm
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
