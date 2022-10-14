import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "components";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import PlaneIcon from "../../assets/images/plane.png";
import CalendarIcon from "../../assets/images/svg/calendar.svg";
import LocationIcon from "../../assets/images/svg/location.svg";

export const TabTwo: FC<{}> = () => {
  const size = UseWindowSize();

  return (
    <Row className="tabs-wrapper">
      <Col lg={2} md={2} sm={12}>
        <div className="text-align-last-left">
          <span className="search-departure-info">Departure Info</span>
        </div>
        {size.width < 768 ? (
          <div className="text-align-last-left">
            <span className="search-departure-more-title fw-bold">
              <img
                src={LocationIcon}
                className="tab-icons"
                alt="location-img"
              />
              Yogyakarta
            </span>
            <span className="search-departure-more">N790AN, Indonesia</span>
          </div>
        ) : (
          <>
            <div className="text-align-last-left">
              <span className="search-departure-more-title fw-bold">
                <img
                  src={LocationIcon}
                  className="tab-icons"
                  alt="location-img"
                />
                Yogyakarta
              </span>
            </div>
            <div className="text-align-last-left">
              <span className="search-departure-more">N790AN, Indonesia</span>
            </div>
          </>
        )}
      </Col>
      <Col lg={2} md={2} sm={12}>
        <div className="text-align-last-left">
          {size.width >= 768 && (
            <span className="search-departure-info">Departure Time</span>
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
              17 July 2021
            </span>

            <span className="search-departure-more">20:15 (+8GMT)</span>
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
                17 July 2021
              </span>
            </div>
            <div className="text-align-last-left">
              <span className="search-departure-more">20:15 (+8GMT)</span>
            </div>
          </>
        )}
      </Col>
      <Col lg={2} md={2} sm={12} style={{ textAlignLast: "center" }}>
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
            <a href="/" className="change-flight-text d-block">
              Change Flight
            </a>
          </>
        )}
      </Col>
      <Col lg={2} md={2} sm={12}>
        <div className="text-align-last-left">
          <span className="search-arrival-info">Arrival Info</span>
        </div>
        {size.width < 768 ? (
          <div className="text-align-last-left">
            <span className="search-arrival-more-title fw-bold">
              <img
                src={LocationIcon}
                className="tab-icons"
                alt="location-img"
              />
              Tokyo
            </span>

            <span className="search-arrival-more">N790AN, Japan</span>
          </div>
        ) : (
          <>
            <div className="text-align-last-left">
              <span className="search-arrival-more-title fw-bold">
                <img
                  src={LocationIcon}
                  className="tab-icons"
                  alt="location-img"
                />
                Tokyo
              </span>
            </div>
            <div className="text-align-last-left">
              <span className="search-arrival-more">N790AN, Japan</span>
            </div>
          </>
        )}
      </Col>
      <Col lg={2} md={2} sm={12}>
        <div className="text-align-last-left">
          {size.width >= 768 && (
            <span className="search-arrival-info">Arrival Time</span>
          )}
        </div>
        {size.width < 768 ? (
          <div className="text-align-last-left">
            <span className="search-arrival-more-title">
              <img
                src={CalendarIcon}
                className="tab-icons"
                alt="location-img"
              />
              25 July 2021
            </span>

            <span className="search-arrival-more">20:15 (+8GMT)</span>
          </div>
        ) : (
          <>
            <div className="text-align-last-left">
              <span className="search-arrival-more-title">
                <img
                  src={CalendarIcon}
                  className="tab-icons"
                  alt="location-img"
                />
                25 July 2021
              </span>
            </div>
            <div className="text-align-last-left">
              <span className="search-arrival-more">20:15 (+8GMT)</span>
            </div>
          </>
        )}
      </Col>
      {size.width < 768 ? (
        <Col xs={12}>
          <Button type="button" className="responsive-change-flight-btn" variant="white" >
            Change Flight
          </Button>
          <Button type="button" className="responsive-search-btn" variant="warning">
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
