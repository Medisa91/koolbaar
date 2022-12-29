import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import { DebounceInput } from "react-debounce-input";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { TravelInformation } from "components/modals/TravelInformation";
import { DirectInformation } from "components/modals/DirectInformation";
import { IFlightOptions } from "models/interfaces";
import { useAppDispatch, useAppSelector } from "redux/store";
import { FlightInfoDropdown } from "./FlightInfoDropdown";
import { getFlightInquiry } from "redux/actions/flight";
import { ToastContainer } from "react-toastify";

interface IProps {
  isAfterSearch: boolean;
  travelInfoData: IFlightOptions;
  flightNumber: string;
  isLoading: boolean;
  setFlightNumber: Function;
  setIsLoading: Function;
  setFlightInquiry?: Function;
  type: string;
}

export const FlightSelect: FC<IProps> = ({
  isAfterSearch,
  travelInfoData,
  isLoading,
  flightNumber,
  setFlightNumber,
  setIsLoading,
  setFlightInquiry,
  type,
}) => {
  const size = UseWindowSize();
  const dispatch = useAppDispatch();
  const flightInquiryData: any = useAppSelector((state) => state.flightInquiry);
  const [selectedOption, setSelectedOption] = useState({
    value: 1,
    label: "Direct",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTravelOpenModal, setIsTravelOpenModal] = useState(false);
  const [isDirectOpenModal, setIsDirectOpenModal] = useState(false);
  const [isClosedItems, setIsClosedItems] = useState(true);

  const options = [
    { value: 1, label: "Direct" },
    { value: 2, label: "Indirect" },
  ];

  const customStyle = {
    control: (styles) => ({ ...styles, height: size.width < 768 ? 41 : 55 }),
    option: (styles) => ({ ...styles, color: "#00043d" }),
    singleValue: (styles) => ({
      ...styles,
      color: "#00043d",
    }),
  };

  const isFlightNumberIsSixDigit = (flightNumber: string) => {
    return flightNumber.length > 5;
  };

  useEffect(() => {
    if (!isDirectOpenModal) setSelectedOption({ value: 1, label: "Direct" });
  }, [isDirectOpenModal]);

  const changeFlightNumber = (e) => {
    setIsClosedItems(true);
    setFlightNumber(e.target.value);
    const data = {
      flightNumber,
      type,
      flightDate: "",
    };
    if (
      isFlightNumberIsSixDigit(e.target.value) &&
      selectedOption.label === "Direct"
    ) {
      setIsDropdownOpen(true);
      dispatch(getFlightInquiry(data));
      return;
    }
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (
      flightInquiryData?.data === null &&
      flightInquiryData?.isSuccess === false
    ) {
      setIsLoading(false);
      setIsDropdownOpen(false);
      setIsTravelOpenModal(true);
      setFlightNumber("");
    }
    if (flightInquiryData?.data?.length !== 0) setIsLoading(false);
  }, [flightInquiryData]);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    if (selected.label === "Indirect") {
      setIsDirectOpenModal(true);
    }
  };

  const openTravelInfoModal = () => {
    setIsTravelOpenModal(!isTravelOpenModal);
  };

  return (
    <Row>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
      <Col xs={12}>
        <div>
          <span className="flight-number-title">Flight Number</span>
          <Link
            to="/"
            onClick={openTravelInfoModal}
            className="not-have-ticket-title"
          >
            I don't have ticket
          </Link>
          <div>
            <DebounceInput
              minLength={1}
              debounceTimeout={100}
              onChange={changeFlightNumber}
              // onKeyDown={handleFlightKeyDown}
              placeholder={
                selectedOption?.label === "Direct" ? "N790AN" : "N790AN, UA789"
              }
              value={flightNumber}
              className="after-custom-input-flight-type d-inline-block"
              // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />

            {/* <Input
              size="sm"
              id="flightNumber"
              placeholder={
                selectedOption?.label === "Direct" ? "N790AN" : "N790AN, UA789"
              }
              className="after-custom-input-flight-type d-inline-block"
              onChange={changeFlightNumber}
              onKeyDown={handleKeyDown}
              onClick={handleKeyDown}
            /> */}

            {isDropdownOpen && isClosedItems && (
              <div
                className="flight-direct-info-dropdown"
                style={{ position: "absolute", zIndex: 1 }}
              >
                <FlightInfoDropdown
                  setFlightInquiry={setFlightInquiry}
                  flightInquiryData={flightInquiryData?.data}
                  setIsClosedItems={setIsClosedItems}
                  setFlightNumber={setFlightNumber}
                  isLoading={isLoading}
                />
              </div>
            )}

            <Select
              className="custom-select-flight-type d-inline-block "
              value={selectedOption}
              onChange={handleChange}
              options={options}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={customStyle}
            />
          </div>
        </div>
      </Col>
      {isTravelOpenModal && (
        <TravelInformation
          travelData={travelInfoData}
          isOpen={isTravelOpenModal}
          setIsOpen={setIsTravelOpenModal}
        />
      )}
      {isDirectOpenModal && (
        <DirectInformation
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          isOpen={isDirectOpenModal}
          setIsOpen={setIsDirectOpenModal}
          type={type}
        />
      )}
    </Row>
  );
};
