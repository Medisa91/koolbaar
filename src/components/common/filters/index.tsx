import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import { Button } from "layers";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "redux/store";
import {
  getAllDeliveryType,
  getAllPackagesType,
  getAllWeightRange,
} from "redux/actions/types";

interface IProp {
  onSelectTypeFilter: (key: any) => void;
  onSelectSizeFilter: (key: any) => void;
  onSelectDeliveryTypeFilter: (key: any) => void;
  tab: number;
}

export const Filters: React.FC<IProp> = ({
  onSelectTypeFilter,
  onSelectSizeFilter,
  onSelectDeliveryTypeFilter,
  tab,
}) => {
  const dispatch = useAppDispatch();
  const screenSize = UseWindowSize();

  const [typeOptions, setTypeOptions] = useState([]);
  const [weightOptions, setWeightOptions] = useState([]);
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [type, setType] = useState({ value: 0, label: "Type" });
  const [size, setSize] = useState({ value: 0, label: "Size" });
  const [deliveryType, setDeliveryType] = useState({
    value: 0,
    label: "Delivery Type",
  });
  const packagesType = useAppSelector((state) => state.packageTypes);
  const weightRanges = useAppSelector((state) => state.weightRange);
  const deliveryTypes = useAppSelector((state) => state.deliveryType);

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

  useEffect(() => {
    dispatch(getAllPackagesType());
    dispatch(getAllWeightRange());
    dispatch(getAllDeliveryType());
  }, []);

  useEffect(() => {
    const options = packagesType?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setTypeOptions([{ value: null, label: "All" }, ...options]);
  }, [packagesType]);

  useEffect(() => {
    const options = weightRanges?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setWeightOptions([{ value: null, label: "All" }, ...options]);
  }, [weightRanges]);

  useEffect(() => {
    const options = deliveryTypes?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setDeliveryOptions([{ value: null, label: "All" }, ...options]);
  }, [deliveryTypes]);

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
                placeholder={"Type"}
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
                options={weightOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
              />
              <Select
                className="custom-select-filter-delivery d-inline-block"
                value={deliveryType}
                onChange={handleDeliveryTypeChange}
                options={deliveryOptions}
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
