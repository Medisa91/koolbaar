import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import { DebounceInput } from "react-debounce-input";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { TravelInformation } from "components/modals/TravelInformation";
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
    label: "Direct",
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
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
  };

  const openTravelInfoModal = () => {
    setIsOpenModal(!isOpenModal);
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
      {isAfterSearch ? null : (
        <Col xs={4}>
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
        </Col>
      )}

      <Col xs={isAfterSearch ? 12 : 8}>
        <div>
          <span className="flight-number-title">
            {selectedOption?.label === "Direct"
              ? "Flight Number"
              : "First and Last Flight Number"}
          </span>
          {isAfterSearch && (
            <Link
              to="/"
              onClick={openTravelInfoModal}
              className="not-have-ticket-title"
            >
              I don't have ticket
            </Link>
          )}
          {/* <Input
            size="sm"
            id="test-id"
            placeholder={
              selectedOption?.label === "Direct"
                ? "eg. WY 824"
                : "eg. WY 824, WY6181"
              }
              className={`${
                isAfterSearch
                ? "after-custom-input-flight-type"
                : "custom-input-flight-type"
              }`}
            /> */}

          <DebounceInput
            minLength={2}
            debounceTimeout={1000}
            onChange={changeFlightNumber}
            onKeyDown={handleKeyDown}
            placeholder={
              selectedOption?.label === "Direct"
                ? "eg. WY 824"
                : "eg. WY 824, WY6181"
            }
            className={`${
              isAfterSearch
                ? "after-custom-input-flight-type"
                : "custom-input-flight-type"
            }`}
          />
        </div>
      </Col>
      {isOpenModal && (
        <TravelInformation
          fromData={fromData}
          toData={toData}
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
        />
      )}
    </Row>
  );
};
