import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import { Button } from "components";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

interface IProp {
  onSelectTypeFilter: (key: any) => void;
}

export const Filters: React.FC<IProp> = ({ onSelectTypeFilter }) => {
  const screenSize = UseWindowSize();

  const [type, setType] = useState({ value: 0, label: "All" });
  const [size, setSize] = useState({ value: 1, label: "Size" });
  const [deliveryType, setDeliveryType] = useState({
    value: 1,
    label: "Delivery Type",
  });

  const customStyle = {
    control: (styles) => ({
      ...styles,
      height: screenSize?.width < 768 ? 34 : 47,
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

  const typeOptions = [
    { value: 0, label: "All" },
    { value: 1, label: "Cloths" },
    { value: 2, label: "Documents" },
    { value: 3, label: "Accessories" },
    { value: 4, label: "Cosmetics" },
    { value: 5, label: "Medicine" },
    { value: 6, label: "Gadget" },
  ];
  const sizeOptions = [{ value: 1, label: "Size" }];
  const deliveryTypeOptions = [{ value: 1, label: "Delivery Type" }];

  const handleTypeChange = (selected) => {
    setType(selected);
    onSelectTypeFilter(selected);
  };

  const handleSizeChange = (selected) => {
    setSize(selected);
  };

  const handleDeliveryTypeChange = (selected) => {
    setDeliveryType(selected);
  };

  return (
    <>
      {screenSize.width >= 768 && (
        <div className="filter-info-wrapper">
          <Row>
            <Col xs={6}>
              <Select
                className="custom-select-filter-type d-inline-block"
                value={type}
                onChange={handleTypeChange}
                options={typeOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
              />
              <Select
                className="custom-select-filter-size d-inline-block"
                value={size}
                onChange={handleSizeChange}
                options={sizeOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
              />
              <Select
                className="custom-select-filter-delivery d-inline-block"
                value={deliveryType}
                onChange={handleDeliveryTypeChange}
                options={deliveryTypeOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
              />
            </Col>

            <Col xs={6} className="text-right">
              <div>
                <Button
                  variant="primary"
                  data-test="docs-btn-anchor"
                  href="/"
                  className="add-travel-btn"
                >
                  Add my travel
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
