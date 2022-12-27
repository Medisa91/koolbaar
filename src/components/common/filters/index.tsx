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
  getAllSizeRange,
} from "redux/actions/types";

interface IProp {
  onSelectTypeFilter: (key: any) => void;
  onSelectSizeFilter: (key: any) => void;
  onSelectWeightFilter: (key: any) => void;
  onSelectServicesFilter: (key: any) => void;
  tab: number;
}

export const Filters: React.FC<IProp> = ({
  onSelectTypeFilter,
  onSelectSizeFilter,
  onSelectWeightFilter,
  onSelectServicesFilter,
  tab,
}) => {
  const dispatch = useAppDispatch();
  const screenSize = UseWindowSize();

  const [typeOptions, setTypeOptions] = useState([]);
  const [showTypeName, setShowTypeName] = useState(false);
  const [showSizeName, setShowSizeName] = useState(false);
  const [showWeightName, setShowWeightName] = useState(false);
  const [showServiceName, setShowServiceName] = useState(false);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [weightOptions, setWeightOptions] = useState([]);
  const [servicesOptions, setServicesOptions] = useState([]);
  const [type, setType] = useState({ value: 0, label: "Type" });
  const [size, setSize] = useState({ value: 0, label: "Size" });
  const [weight, setWeight] = useState({ value: 0, label: "Weight" });
  const [service, setService] = useState({
    value: 0,
    label: "Services",
  });
  const packagesType = useAppSelector((state) => state.packageTypes);
  const sizeRanges = useAppSelector((state) => state.sizeRange);
  const weightRanges = useAppSelector((state) => state.weightRange);
  const services = useAppSelector((state) => state.deliveryType);

  const typeCustomStyle = {
    control: (styles) => ({
      ...styles,
      height: screenSize?.width < 768 ? 34 : 47,
    }),
    option: (styles) => ({
      ...styles,
      color: "#00043d",
      backgroundColor: "#f3f3f3",
      flexWrap: "nowrap",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#00043d",
      minWidth: 140,
    }),
  };
  const sizeCustomStyle = {
    control: (styles) => ({
      ...styles,
      height: screenSize?.width < 768 ? 34 : 47,
    }),
    option: (styles) => ({
      ...styles,
      color: "#00043d",
      backgroundColor: "#f3f3f3",
      flexWrap: "nowrap",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#00043d",
      minWidth: 110,
    }),
  };
  const serviceCustomStyle = {
    control: (styles) => ({
      ...styles,
      height: screenSize?.width < 768 ? 34 : 47,
    }),
    option: (styles) => ({
      ...styles,
      color: "#00043d",
      backgroundColor: "#f3f3f3",
      flexWrap: "nowrap",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#00043d",
      minWidth: 100,
    }),
  };

  useEffect(() => {
    dispatch(getAllPackagesType());
    dispatch(getAllWeightRange());
    dispatch(getAllSizeRange());
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
    const options = sizeRanges?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setSizeOptions([{ value: null, label: "All" }, ...options]);
  }, [sizeRanges]);

  useEffect(() => {
    const options = services?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setServicesOptions([{ value: null, label: "All" }, ...options]);
  }, [services]);

  const handleTypeChange = (selected) => {
    setType(selected);
    onSelectTypeFilter(selected);
    setShowTypeName(true);
  };

  const handleSizeChange = (selected) => {
    setSize(selected);
    onSelectSizeFilter(selected);
    setShowSizeName(true);
  };
  const handleWeightChange = (selected) => {
    setWeight(selected);
    onSelectWeightFilter(selected);
    setShowWeightName(true);
  };

  const handleServicesChange = (selected) => {
    setService(selected);
    onSelectServicesFilter(selected);
    setShowServiceName(true);
  };

  return (
    <>
      {screenSize.width >= 768 && (
        <div className="filter-info-wrapper">
          <Row>
            <Col xs={9}>
              {tab === 2 && (
                <Button
                  variant="white"
                  data-test="docs-btn-anchor"
                  className="before-filter-btn"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </Button>
              )}

              <div className="d-inline-block">
                {showTypeName && (
                  <span className="filters-select-title">Type</span>
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
                  styles={typeCustomStyle}
                />
              </div>
              <div className="d-inline-block">
                {showSizeName && (
                  <span className="filters-select-title">Size</span>
                )}
                <Select
                  className="custom-select-filter-size d-inline-block"
                  value={size}
                  onChange={handleSizeChange}
                  options={sizeOptions}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={sizeCustomStyle}
                />
              </div>
              <div className="d-inline-block">
                {showWeightName && (
                  <span className="filters-select-title">Weight</span>
                )}
                <Select
                  className="custom-select-filter-size d-inline-block"
                  value={weight}
                  onChange={handleWeightChange}
                  options={weightOptions}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={sizeCustomStyle}
                />
              </div>
              <div className="d-inline-block">
                {showServiceName && (
                  <span className="filters-select-title">Services</span>
                )}
                <Select
                  className="custom-select-filter-delivery d-inline-block"
                  value={service}
                  onChange={handleServicesChange}
                  options={servicesOptions}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={serviceCustomStyle}
                />
              </div>
            </Col>

            <Col xs={3} className="text-right add-travel-wrapper">
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
