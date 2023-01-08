import React, { useState, useEffect } from "react";
import { Input, Button } from "layers";
import { MultipleUploader } from "components";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { useAppDispatch, useAppSelector } from "redux/store";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { components } from "react-select";
import {
  getAllSizeRange,
  getAllDeliveryType,
  getAllPackagesType,
} from "redux/actions/types";
import { addNewTravel, editUserTravel } from "redux/actions/dashboard";
import { IAddTravel, IMyTraveler } from "models/interfaces";
import { getCityCountryFromGooglePlace } from "helpers/googlePlaceCityCountry";
import { getDate, convertHumanDateToUnix } from "helpers/convertDate";
import { Oval } from "react-loader-spinner";
import { InputOption } from "components";

interface IProp {
  setIsOpen: Function;
  mode: string;
  trvId: string;
}

export const AddTravel: React.FC<IProp> = ({ setIsOpen, mode, trvId }) => {
  const { t } = useTranslation();
  const windowSize = UseWindowSize();
  const dispatch = useAppDispatch();
  const [images, setImages] = useState<any>([]);
  const [packagetypeId, setPackagetypeId] = useState<any>([]);
  const [travelData, setTravelData] = useState<IAddTravel>({
    packagetypeId: [],
    packageType: "",
    sizerangeId: "",
    weight: "0",
    value: "0",
    sizeWidth: "",
    sizeHeight: "",
    sizeLength: "",
    deliverytypeIds: "",
    fromCountry: "",
    fromCountryCity: "",
    toCountry: "",
    toCountryCity: "",
    fromDate1: "",
    fromDate2: "",
    toDate1: "",
    toDate2: "",
    offerPrice: "",
    message: "",
    images: [],
  });
  const [termsChecked, setTermsChecked] = useState(false);
  const [governmentChecked, setGovernmentChecked] = useState(false);
  const [type, setType] = useState({ value: null, label: null });
  const [size, setSize] = useState({ value: null, label: null });
  const [unit, setUnit] = useState({ value: 0, label: "KG" });
  const [currency, setCurrency] = useState({ value: 0, label: "CAD" });
  const [sizeOptions, setSizeOptions] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);
  const sizeRanges = useAppSelector((state) => state.sizeRange);
  const packagesType = useAppSelector((state) => state.packageTypes);
  const services = useAppSelector((state) => state.deliveryType);
  const addTravelData: any = useAppSelector((state) => state.addTravel);
  const editTravelData: any = useAppSelector((state) => state?.editTravel);
  const userTravel: any = useAppSelector((state) => state?.userTravel);
  const [service, setService] = useState({ value: null, label: null });
  const [servicesOptions, setServicesOptions] = useState([]);
  const [arrivalBetweenDate, setArrivalBetweenDate] = useState(new Date());
  const [arrivalToDate, setArrivalToDate] = useState(new Date());
  const [departureBetweenDate, setDepartureBetweenDate] = useState(new Date());
  const [departureToDate, setDepartureToDate] = useState(new Date());
  const [fromDate1, setFromDate1] = useState(getDate(new Date()));
  const [fromDate2, setFromDate2] = useState(getDate(new Date()));
  const [toDate1, setToDate1] = useState(getDate(new Date()));
  const [toDate2, setToDate2] = useState(getDate(new Date()));
  const [from, setFrom] = useState({ value: 0, label: "Canada" });
  const [fromCountry, setFromCountry] = useState("Canada");
  const [fromCountryCity, setFromCountryCity] = useState("Canada, Toronto");
  const [to, setTo] = useState({ value: 0, label: "Iran" });
  const [toCountry, setToCountry] = useState("Iran");
  const [toCountryCity, setToCountryCity] = useState("Iran, Tehran");
  const [isLoading, setIsLoading] = useState(false);
  const unitSizeOption = [
    { value: 0, label: "KG" },
    { value: 1, label: "LBS" },
  ];
  const currencySizeOption = [
    { value: 0, label: "CAD" },
    { value: 1, label: "USD" },
    { value: 2, label: "IRR" },
  ];
  const handleTermsCheckedChange = () => {
    setTermsChecked(!termsChecked);
  };

  const handleGovernmentChange = () => {
    setGovernmentChecked(!governmentChecked);
  };

  const changeFromPlace = (e) => {
    setFrom(getCityCountryFromGooglePlace(e).location);
    setFromCountry(getCityCountryFromGooglePlace(e).country);
    setFromCountryCity(getCityCountryFromGooglePlace(e).countryCity);
  };

  const changeToPlace = (e) => {
    setTo(getCityCountryFromGooglePlace(e).location);
    setToCountry(getCityCountryFromGooglePlace(e).country);
    setToCountryCity(getCityCountryFromGooglePlace(e).countryCity);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setTravelData({ ...travelData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userTravel.length !== 0 && mode === "edit") {
      const data = userTravel?.data;
      setFrom({ value: 0, label: data.fromCountry });
      setFromCountry(data.fromCountry);
      setFromCountryCity(data.fromCountryCity);
      setTo({ value: 0, label: data.toCountry });
      setToCountry(data.toCountry);
      setToCountryCity(data.toCountryCity);
      setSize(sizeOptions.find((option) => option.label === data.sizerange));
      setType(typeOptions.find((option) => option.label === data.packageTypes));
      setService(
        servicesOptions.find((option) => option.label === data.deliveryTypes)
      );
      setArrivalBetweenDate(convertHumanDateToUnix(data?.fromDate1));
      setArrivalToDate(convertHumanDateToUnix(data?.fromDate2));
      setDepartureBetweenDate(convertHumanDateToUnix(data?.toDate1));
      setDepartureToDate(convertHumanDateToUnix(data?.toDate2));
      setTravelData({
        ...travelData,
        weight: data.weight,
        message: data.description,
        value: data.itemValue,
        offerPrice: data.offerPrice,
      });
      setImages(data.images);
    }
  }, [userTravel]);

  useEffect(() => {
    dispatch(getAllSizeRange());
    dispatch(getAllDeliveryType());
    dispatch(getAllPackagesType());
  }, []);

  useEffect(() => {
    if (mode === "add") {
      setFrom({ value: 0, label: "Canada" });
      setFromCountry("Canada");
      setFromCountryCity("Canada, Toronto");
      setTo({ value: 0, label: "Iran" });
      setToCountry("Iran");
      setToCountryCity("Iran, Tehran");
      setSize({ value: null, label: null });
      setType({ value: null, label: null });
      setService({ value: null, label: null });
      setArrivalBetweenDate(new Date());
      setArrivalToDate(new Date());
      setDepartureBetweenDate(new Date());
      setDepartureToDate(new Date());
      setTravelData({
        ...travelData,
        weight: "0",
        message: "",
        value: "",
        offerPrice: "",
      });
      setImages([]);
    }
  }, [mode]);

  useEffect(() => {
    const options = sizeRanges?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setSize({ value: sizeRanges[0]?.id, label: sizeRanges[0]?.name });
    setSizeOptions(options);
  }, [sizeRanges]);

  useEffect(() => {
    const options = services?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setService({ value: services[0]?.id, label: services[0]?.name });
    setServicesOptions(options);
  }, [services]);

  useEffect(() => {
    const options = packagesType?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setType({ value: packagesType[0]?.id, label: packagesType[0]?.name });
    setTypeOptions(options);
  }, [packagesType]);

  const handleUnitChange = (selected) => {
    setUnit(selected);
  };

  const handleSizeChange = (selected) => {
    setSize(selected);
  };
  const handleTypeChange = (selected) => {
    setType(selected);
    setPackagetypeId(
      selected?.map((item) => {
        return item.value;
      })
    );
  };

  const handleServicesChange = (selected) => {
    setService(selected);
  };
  const handleCurrencyChange = (selected) => {
    setCurrency(selected);
  };

  const onArrivalBetweenDateChange = (date) => {
    setArrivalBetweenDate(date);
    setFromDate1(getDate(date));
  };

  const onArrivalToDateChange = (date) => {
    setArrivalToDate(date);
    setToDate1(getDate(date));
  };

  const onDepartureFromDateChange = (date) => {
    setDepartureBetweenDate(date);
    setFromDate2(getDate(date));
  };
  const onDepartureToDateChange = (date) => {
    setDepartureToDate(date);
    setToDate2(getDate(date));
  };

  const customStyle = {
    control: (styles) => ({
      ...styles,
      height: windowSize?.width < 768 ? 34 : 50,
    }),
    option: (styles) => ({
      ...styles,
      color: "#00043d",
      backgroundColor: "#fff",
      flexWrap: "nowrap",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#00043d",
    }),
    multiValue: (styles) => ({
      ...styles,
      color: "#00043d",
      padding: "6px",
      fontSize: "14px",
      borderRadius: "5px",
    }),
  };

  const unitCustomStyle = {
    control: (styles) => ({
      ...styles,
      height: 30,
      padding: 0,
    }),
    option: (styles) => ({
      ...styles,
      color: "#fff",
      backgroundColor: "#707070",
      flexWrap: "nowrap",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#00043d",
    }),
  };

  const SelectMenuButton = (props) => {
    return (
      <components.MenuList {...props}>{props.children}</components.MenuList>
    );
  };

  useEffect(() => {
    if (!addTravelData?.isSuccess) {
      setIsLoading(false);
    } else if (!addTravelData?.isSuccess) {
      setIsLoading(false);
      setIsOpen(false);
    }
  }, [addTravelData]);

  useEffect(() => {
    if (!editTravelData?.isSuccess) {
      setIsLoading(false);
    } else if (!editTravelData?.isSuccess) {
      setIsLoading(false);
      setIsOpen(false);
    }
  }, [editTravelData]);

  const callAddEditTravelApi = () => {
    const body = new FormData();
    if (mode === "edit") body.append("trvId", trvId);
    body.append("packagetypeId", packagetypeId);
    body.append("packageType", "");
    body.append("sizerangeId", size.value);
    body.append("weight", travelData.weight);
    body.append("value", travelData.value);
    body.append("sizeWidth", "");
    body.append("sizeHeight", "");
    body.append("sizeLength", "");
    body.append("deliverytypeIds", service.value);
    body.append("fromCountry", fromCountry);
    body.append("fromCountryCity", fromCountryCity);
    body.append("toCountry", toCountry);
    body.append("toCountryCity", toCountryCity);
    body.append("fromDate1", fromDate1);
    body.append("fromDate2", fromDate2);
    body.append("toDate1", toDate1);
    body.append("toDate2", toDate2);
    body.append("offerPrice", travelData.offerPrice);
    body.append("message", travelData.message);
    body.append("images", images);
    if (mode === "add") dispatch(addNewTravel(body));
    else if (mode === "edit") dispatch(editUserTravel(body));
    setIsLoading(true);
  };

  const addEditTravel = () => {
    callAddEditTravelApi();
  };

  return (
    <div className="request-slider-container">
      <Row className="request-wrapper">
        <Col xs={12} className="request-form">
          <h1>{mode === "edit" ? "Edit Travelers" : "Add Travelers"}</h1>
          <div className="send-input-wrapper">
            <span className="send-pack-title">I will travel from</span>
            <div className="d-inline-block">
              <GooglePlacesAutocomplete
                selectProps={{
                  className: "custom-place-from d-inline-block",
                  value: from,
                  placeholder: "City or Country",
                  onChange: (e) => changeFromPlace(e),
                  noOptionsMessage: () => null,
                  components: {
                    IndicatorSeparator: () => null,
                    MenuList: SelectMenuButton,
                  },
                  styles: customStyle,
                }}
                apiKey="AIzaSyBxY7vo5Y6IHZ2_0Xk0g3ZBFyVL_wZTuho"
              />
            </div>
            <span className="travel-to-title">To</span>
            <div className="d-inline-block">
              <GooglePlacesAutocomplete
                selectProps={{
                  className: "custom-place-to d-inline-block",
                  value: to,
                  placeholder: "City or Country",
                  onChange: (e) => changeToPlace(e),
                  noOptionsMessage: () => null,
                  components: {
                    IndicatorSeparator: () => null,
                    MenuList: SelectMenuButton,
                  },
                  styles: customStyle,
                }}
                apiKey="AIzaSyBxY7vo5Y6IHZ2_0Xk0g3ZBFyVL_wZTuho"
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="between-title">Between</span>
            <div className="d-inline-block">
              <DatePicker
                className="custom-input-between"
                selected={arrivalBetweenDate}
                onChange={(date) => onArrivalBetweenDateChange(date)}
                dateFormat="EEEE, MM/dd/yyyy"
                showTimeInput
              />
            </div>
            <span className="to-title">To</span>
            <div className="d-inline-block">
              <DatePicker
                className="custom-input-to-request"
                selected={arrivalToDate}
                onChange={(date) => onArrivalToDateChange(date)}
                dateFormat="EEEE, MM/dd/yyyy"
                showTimeInput
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="carry-title">And can carry</span>
            <div className="d-inline-block">
              <Select
                className="custom-select-size d-inline-block"
                value={size}
                onChange={handleSizeChange}
                options={sizeOptions}
                // value={sizeOptions.find((option) => option.label === sizeLabel)}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
              />
            </div>
            <span className="package-title">
              Package with maximum weight of
            </span>
            <div className="d-inline-block position-relative">
              <Input
                size="sm"
                id="weight"
                name="weight"
                placeholder="1"
                className="custom-input-package"
                value={travelData.weight}
                onChange={handleChange}
              />
              <Select
                className="custom-select-unit-size d-inline-block"
                value={unit}
                onChange={handleUnitChange}
                options={unitSizeOption}
                styles={unitCustomStyle}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => null,
                }}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="max-value-title">And max value of</span>
            <div className="d-inline-block position-relative">
              <Input
                size="sm"
                id="value"
                name="value"
                placeholder="200"
                className="custom-input-package-value"
                value={travelData.value}
                onChange={handleChange}
              />
              <Select
                className="custom-select-unit-size d-inline-block"
                value={currency}
                onChange={handleCurrencyChange}
                options={currencySizeOption}
                styles={unitCustomStyle}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => null,
                }}
              />
            </div>
            <span className="and-destination-title">And</span>
            <div className="d-inline-block">
              <Select
                className="custom-select-post-service d-inline-block"
                value={service}
                onChange={handleServicesChange}
                options={servicesOptions}
                components={{
                  IndicatorSeparator: () => null,
                  Option: InputOption,
                }}
                styles={customStyle}
              />
            </div>
            <span className="package-title">For</span>
            <div className="d-inline-block position-relative">
              <Input
                size="sm"
                id="offerPrice"
                name="offerPrice"
                placeholder="200"
                className="custom-input-package-price"
                value={travelData.offerPrice}
                onChange={handleChange}
              />
              <Select
                className="custom-select-unit-size d-inline-block"
                value={currency}
                onChange={handleCurrencyChange}
                options={currencySizeOption}
                styles={unitCustomStyle}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => null,
                }}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="package-type-title">Package Type</span>
            <div className="d-inline-block">
              <Select
                className="custom-select-package-type d-inline-block"
                value={type}
                onChange={handleTypeChange}
                options={typeOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                isMulti
                styles={customStyle}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="at-destination-title">At your Destination</span>
            <span className="between-destination-title">Between</span>
            <div className="d-inline-block">
              <DatePicker
                className="custom-input-between-destination"
                selected={departureBetweenDate}
                onChange={(date) => onDepartureFromDateChange(date)}
                dateFormat="EEEE, MM/dd/yyyy"
                showTimeInput
              />
            </div>
            <span className="to-destination-title">To</span>
            <div className="d-inline-block">
              <DatePicker
                className="custom-input-to-request-destination"
                selected={departureToDate}
                onChange={(date) => onDepartureToDateChange(date)}
                dateFormat="EEEE, MM/dd/yyyy"
                showTimeInput
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div
            style={
              windowSize.width < 768 ? { width: "345px" } : { width: "580px" }
            }
          >
            <MultipleUploader
              title="Upload Travel Documents"
              setPhotos={setImages}
              image={images}
            />
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="message-title">Message</span>
            <div>
              <Input
                size="sm"
                id="message"
                name="message"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod massa augue, non venenatis eros sollicitudin eget. Curabitur velit risus, consequat non dolor in, consectetur commodo urna."
                className="custom-input-message"
                value={travelData.message}
                rows={4}
                textArea={true}
                onChange={handleChange}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div style={{ marginTop: "30px" }}>
            <label className="checkbox-container">
              I agree with the terms and condition defined on this{" "}
              <a href="/" style={{ textDecorationLine: "underline" }}>
                link
              </a>
              .
              <input
                type="checkbox"
                checked={termsChecked}
                onChange={handleTermsCheckedChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div>
            <label className="checkbox-container gov-checkbox-container">
              I accept that this offer includes all expenses except the one
              forced by the government like import fee taxes, etc.,{" "}
              <input
                type="checkbox"
                checked={governmentChecked}
                onChange={handleGovernmentChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </Col>
        {/* <Col xs={12} className="request-form"> */}
        <div style={{ marginTop: "24px" }}>
          <Button
            variant="primary"
            onClick={addEditTravel}
            className="submit-request-btn mt-4"
            disabled={!termsChecked || !governmentChecked}
          >
            Submit Request
            {isLoading && (
              <Oval
                width="20"
                height="20"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ display: "inline", marginLeft: "8px" }}
              />
            )}
          </Button>
        </div>
        {/* </Col> */}
      </Row>
    </div>
  );
};
