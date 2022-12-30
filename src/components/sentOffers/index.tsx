import React, { useState } from "react";
import { Button } from "layers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { PackageCard } from "./PackageCard";
import { IOfferSent, Option } from "models/interfaces";
import Select from "react-select";

interface IProps {
  display: Option;
  offerSentData: IOfferSent[];
}

export const SentOffer: React.FC<IProps> = ({ display, offerSentData }) => {
  const windowSize = UseWindowSize();
  const [filter, setFilter] = useState({ value: 0, label: "Display All" });
  const options = [];

  const customStyle = {
    control: (styles) => ({
      ...styles,
      height: windowSize?.width < 768 ? 34 : 47,
    }),
    option: (styles) => ({
      ...styles,
      color: "#00043d",
      backgroundColor: "#f3f3f3",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#00043d",
    }),
  };

  const handleFilterChange = (selected) => {
    setFilter(selected);
  };

  return (
    <div className="send-offer-wrapper">
      {windowSize?.width >= 768 && (
        <h2 className="mt-2 mb-4">
          Offer Sent
          <span className="parcel-title">(Parcel they carry for you)</span>
        </h2>
      )}
      {windowSize?.width < 768 && (
        <Row
          className="my-4"
          style={{
            width: "360px",
            marginRight: 0,
            marginLeft: "18px",
            alignItems: "center",
          }}
        >
          <Col xs={7}>
            <h2>
              Offer Sent
              <span className="parcel-title d-block ml-0">
                (Parcel they carry for you)
              </span>
            </h2>
          </Col>
          <Col xs={5} className="pl-0 text-right">
            <Select
              className="custom-select-filter-delivery d-inline-block"
              value={filter}
              onChange={handleFilterChange}
              options={options}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={customStyle}
            />
          </Col>
        </Row>
      )}
      <PackageCard display={display} offerSentData={offerSentData} />
    </div>
  );
};
