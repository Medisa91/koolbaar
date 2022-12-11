import React, { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IFlightInquiry } from "models/interfaces";
import { Bars } from "react-loader-spinner";

interface IFlightData {
  flightInquiryData: IFlightInquiry[];
  setFlightInquiry?: Function;
  setIsClosedItems?: Function;
  setFlightInquiryIndirect?: Function;
  setFlightNumber?: Function;
}

export const FlightInfoDropdown: FC<IFlightData> = ({
  flightInquiryData,
  setIsClosedItems,
  setFlightInquiry,
  setFlightInquiryIndirect,
  setFlightNumber,
}) => {
  const [checked, setChecked] = useState(false);

  const onFlightChanged = (e) => {
    setChecked(e.currentTarget.checked);
  };

  const selectFlight = (item) => {
    setChecked(true);
    setIsClosedItems(false);
    setFlightNumber("");
    if (typeof setFlightInquiry === "function") {
      setFlightInquiry(item);
      return;
    }
    setFlightInquiryIndirect(item);
  };

  return (
    <>
      {flightInquiryData?.length !== 0 ? (
        flightInquiryData?.map((item, index) => {
          return (
            <Row style={{ cursor: "pointer" }}>
              <Col xs={4} className="pt-2 pl-4">
                <input
                  className="ml-auto direct-radio-btn"
                  type="radio"
                  name="flight-name"
                  value={index}
                  // checked={checked}
                  onChange={onFlightChanged}
                  onClick={() => selectFlight(item)}
                />
                <span className="airline-direct-title">AirAsia</span>
              </Col>
              <Col xs={4} className="direct-time-title pl-0">
                <span>{item.fromDate}</span>
                <span>{item.fromTime}</span>
              </Col>
              <Col xs={4} className="direct-location-title p-0">
                <span>{item.fromLocation}</span>
                <span>{item.toLocation}</span>
              </Col>
            </Row>
          );
        })
      ) : (
        <Bars
          height="50"
          width="50"
          color="#ffa200"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="flight-loading"
          visible={true}
        />
      )}
    </>
  );
};
