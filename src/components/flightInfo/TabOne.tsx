import React, { FC, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FlightSelect } from "./FlightSelect";
import { DepartureInfo } from "./DepartureInfo";
import { ArrivalInfo } from "./ArrivalInfo";
import PlaneIcon from "../../assets/images/plane.png";
import { Button } from "layers";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { IFlightOptions } from "models/interfaces";
import { useAppDispatch } from "redux/store";
import { getAllTravelInfoHomeRequests } from "redux/actions/flight";
import { ITravelInformation } from "models/interfaces";

export const TabOne: FC<{}> = () => {
  const size = UseWindowSize();
  const [flightNumber, setFlightNumber] = useState("");
  const [flightInquiry, setFlightInquiry] = useState<IFlightOptions>({
    fromLocation: "Malaysia, Kuala Lumpur",
    fromDate: "25 JUL 2021",
    fromTime: "20:15",
    toLocation: "Canada, Toronto",
    toDate: "25 AUG 2021",
    toTime: "20:15",
  });
  const [isAfterSearch, setIsAfterSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    setTimeout(() => {
      setIsAfterSearch(true);
    }, 3000);
  }, []);

  const searchFlight = () => {
    {
      const data: ITravelInformation = {
        fromCityCountry: flightInquiry.fromLocation,
        departureDate: flightInquiry.fromTime,
        toCityCountry: flightInquiry.toLocation,
        arrivalDate: flightInquiry.toDate,
      };
      dispatch(getAllTravelInfoHomeRequests(data));
    }
  };

  return (
    <Row className="tabs-wrapper">
      <Col lg={6} md={6} sm={12}>
        <Row>
          <Col lg={7} md={7} sm={12}>
            <FlightSelect
              setFlightInquiry={setFlightInquiry}
              isAfterSearch={isAfterSearch}
              travelInfoData={flightInquiry}
              flightNumber={flightNumber}
              setFlightNumber={setFlightNumber}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />
          </Col>
          <Col lg={5} md={5} sm={12} className="departure-info-wrapper">
            <DepartureInfo
              isLoading={isLoading}
              travelDepartureInfoData={flightInquiry}
            />
          </Col>
        </Row>
      </Col>
      <Col lg={1} md={1} sm={12}>
        {size?.width < 768 ? (
          <span className="mb-0" style={{ color: "rgba(0,0,0,0.5)" }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - -{" "}
            <img
              src={PlaneIcon}
              className={` ${
                isLoading ? "opacity-change-plane" : "search-plane-icon"
              }`}
              alt="location-img"
            />
          </span>
        ) : (
          <img
            src={PlaneIcon}
            className={` ${
              isLoading ? "opacity-change-plane" : "search-plane-icon"
            }`}
            alt="location-img"
          />
        )}
      </Col>
      <Col lg={5} md={5} sm={12}>
        <Row>
          <Col>
            <ArrivalInfo
              isLoading={isLoading}
              travelArrivalInfoData={flightInquiry}
            />
          </Col>
          <Col>
            {isAfterSearch ? (
              <Button
                variant="warning"
                data-test="docs-btn-anchor"
                className="search-flight-btn mt-2"
                onClick={searchFlight}
              >
                Search this flight
              </Button>
            ) : (
              <Button
                variant="gray5"
                data-test="docs-btn-anchor"
                href="/"
                className="define-flight-btn mt-2"
              >
                <span>Select this flight</span>
                define flight number to start
              </Button>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
