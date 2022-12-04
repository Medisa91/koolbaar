import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import { DebounceInput } from "react-debounce-input";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { TravelInformation } from "components/modals/TravelInformation";
import { DirectInformation } from "components/modals/DirectInformation";
import { DepartureOptions, ArrivalOptions } from "models/interfaces";
import { useAppDispatch, useAppSelector } from "redux/store";
import { getFlightInquiry } from "redux/actions/flight";
import { ToastContainer } from "react-toastify";

interface IProps {
  isAfterSearch: boolean;
  travelDepartureInfoData: DepartureOptions;
  travelArrivalInfoData: ArrivalOptions;
  flightNumber: string;
  setFlightNumber: Function;
  setIsLoading: Function;
}

export const FlightSelect: FC<IProps> = ({
  isAfterSearch,
  travelDepartureInfoData,
  travelArrivalInfoData,
  flightNumber,
  setFlightNumber,
  setIsLoading,
}) => {
  const size = UseWindowSize();
  const dispatch = useAppDispatch();
  const flightInquiryData: any = useAppSelector((state) => state.flightInquiry);
  const [selectedOption, setSelectedOption] = useState({
    value: 1,
    label: "Indirect",
  });
  const [isTravelOpenModal, setIsTravelOpenModal] = useState(false);
  const [isDirectOpenModal, setIsDirectOpenModal] = useState(false);
  const [fromData, setFromData] = useState<DepartureOptions>({
    from: "",
    fromDate: "",
    fromTime: "",
  });
  const [toData, setToData] = useState<ArrivalOptions>({
    to: "",
    toDate: "",
    toTime: "",
  });

  const options = [
    { value: 1, label: "Indirect" },
    { value: 2, label: "Direct" },
  ];

  const customStyle = {
    control: (styles) => ({ ...styles, height: size.width < 768 ? 41 : 55 }),
    option: (styles) => ({ ...styles, color: "#00043d" }),
    singleValue: (styles) => ({
      ...styles,
      color: "#00043d",
    }),
  };

  const changeFlightNumber = (e) => {
    setFlightNumber(e.target.value);
    const data = {
      flightNumber,
      departureDate: null,
    };
    if (flightNumber) dispatch(getFlightInquiry(data));
  };

  useEffect(() => {
    // if (flightInquiryData && flightInquiryData?.length !== 0) {
    //   if (flightInquiryData.isSuccess) {
    //     setIsLoading(false);
    //   } else {
    //   }
    // }
    if (flightInquiryData) setIsLoading(false);
    if (flightInquiryData?.length !== 0) setIsLoading(false);
  }, [flightInquiryData]);

  const handleKeyDown = (e) => {
    setIsLoading(true);
  };

  const handleChange = (selected) => {
    setSelectedOption(selected);
    if (selected.label === "Direct") {
      setIsDirectOpenModal(true);
    }
  };

  const openTravelInfoModal = () => {
    setIsTravelOpenModal(!isTravelOpenModal);
    setFromData(travelDepartureInfoData);
    setToData(travelArrivalInfoData);
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
      {/* {isAfterSearch ? null : ( */}
      {/* <Col xs={4}>
          <div>
            <span className="flight-type-title">Flight Type</span>
            <Select
              className="custom-select-flight-type"
              value={selectedOption}
              onChange={handleChange}
              options={options}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={customStyle}
            />
          </div>
        </Col> */}
      {/* )} */}

      <Col xs={12}>
        <div>
          <span className="flight-number-title">Flight Number</span>
          {/* {isAfterSearch && ( */}
          <Link
            to="/"
            onClick={openTravelInfoModal}
            className="not-have-ticket-title"
          >
            I don't have ticket
          </Link>
          {/* )} */}
          {/* <Input
            size="sm"
            id="test-id"
            placeholder={
              selectedOption?.label === "Indirect"
                ? "eg. WY 824"
                : "eg. WY 824, WY6181"
              }
              className={`${
                isAfterSearch
                ? "after-custom-input-flight-type"
                : "custom-input-flight-type"
              }`}
            /> */}
          <div>
            <DebounceInput
              minLength={2}
              debounceTimeout={1000}
              onChange={changeFlightNumber}
              onKeyDown={handleKeyDown}
              placeholder={
                selectedOption?.label === "Indirect"
                  ? "N790AN, UA789"
                  : "eg. WY 824, WY6181"
              }
              className="after-custom-input-flight-type d-inline-block"
              // className={`${
              //   isAfterSearch
              //     ? "after-custom-input-flight-type"
              //     : "custom-input-flight-type"
              // }`}
            />
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
          fromData={fromData}
          toData={toData}
          isOpen={isTravelOpenModal}
          setIsOpen={setIsTravelOpenModal}
        />
      )}
      {isDirectOpenModal && (
        <DirectInformation
          isOpen={isDirectOpenModal}
          setIsOpen={setIsDirectOpenModal}
        />
      )}
    </Row>
  );
};
