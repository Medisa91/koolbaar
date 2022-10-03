import React, { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Input } from "components";
import Select from 'react-select';
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { TravelInformation } from "components/modals/TravelInformation";

interface IProps {
  isAfterSearch: boolean;
}

export const FlightSelect: FC<IProps> = ({isAfterSearch}) => {
  const size = UseWindowSize();

const [selectedOption, setSelectedOption] = useState({ value: 1, label: "Direct" });
const [isOpenModal, setIsOpenModal] = useState(false);

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

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const openTravelInfoModal =() => {
    setIsOpenModal(!isOpenModal)
  }

  return (
    <Row>
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
            <a onClick={openTravelInfoModal} className="not-have-ticket-title">
              I don't have ticket
            </a>
          )}
          <Input
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
          />
        </div>
      </Col>
        {isOpenModal && (
          <TravelInformation isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
        )}
    </Row>
  );
};
