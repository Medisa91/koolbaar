import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import { Button } from "components";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { typeOptions, sizeOptions, deliveryTypeOptions } from "helper/options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface IProp {
  onSelectTypeFilter: (key: any) => void;
  onSelectSizeFilter: (key: any) => void;
  onSelectDeliveryTypeFilter: (key: any) => void;
  tab: number
}

export const Filters: React.FC<IProp> = ({
  onSelectTypeFilter,
  onSelectSizeFilter,
  onSelectDeliveryTypeFilter,
  tab
}) => {
  const screenSize = UseWindowSize();

  const [type, setType] = useState({ value: 0, label: "All" });
  const [size, setSize] = useState({ value: 1, label: "All" });
  const [deliveryType, setDeliveryType] = useState({ value: 1, label: "All" });

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

  const handleTypeChange = (selected) => {
    setType(selected);
    onSelectTypeFilter(selected);
  };

  const handleSizeChange = (selected) => {
    setSize(selected);
    onSelectSizeFilter(selected);
  };

  const handleDeliveryTypeChange = (selected) => {
    setDeliveryType(selected);
    onSelectDeliveryTypeFilter(selected);
  };

  return (
    <>
      {screenSize.width >= 768 && (
        <div className="filter-info-wrapper">
          <Row>
            <Col xs={6}>
              {tab === 2 && (
                <Button
                  variant="white"
                  data-test="docs-btn-anchor"
                  className="before-filter-btn"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </Button>
              )}
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
                  {tab === 1 ? "Add my travel" : "Add my request"}
                </Button>
                {tab === 2 && (
                  <Button
                    variant="white"
                    data-test="docs-btn-anchor"
                    className="after-filter-btn"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};
