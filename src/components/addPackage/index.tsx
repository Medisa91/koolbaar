import React, { useState, useEffect } from "react";
import { Input, Button } from "layers";
import { MultipleUploader } from "components";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { useAppSelector, useAppDispatch } from "redux/store";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { components } from "react-select";
import { getAllPackagesType, getAllDeliveryType } from "redux/actions/types";
import { addNewPackage, editUserPackage } from "redux/actions/dashboard";
import { IAddPackage, IMyPackages } from "models/interfaces";
import { Oval } from "react-loader-spinner";
import { getCityCountryFromGooglePlace } from "helpers/googlePlaceCityCountry";
import { getDate, convertHumanDateToUnix } from "helpers/convertDate";

interface IProp {
  setIsOpen: Function;
  mode: string;
  pkgId: string;
}

export const AddPackage: React.FC<IProp> = ({ setIsOpen, mode, pkgId }) => {
  const { t } = useTranslation();
  const windowSize = UseWindowSize();
  const dispatch = useAppDispatch();
  const size = UseWindowSize();
  const [images, setImages] = useState<any>([]);
  const [packageData, setPackageData] = useState<IAddPackage>({
    packagetypeId: "",
    packageType: "",
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
  const [typeOptions, setTypeOptions] = useState([]);
  const [type, setType] = useState({ value: null, label: null });
  const [service, setService] = useState({ value: null, label: null });
  const [servicesOptions, setServicesOptions] = useState([]);
  const packagesType = useAppSelector((state) => state.packageTypes);
  const services = useAppSelector((state) => state.deliveryType);
  const addPackageData: any = useAppSelector((state) => state.addPackage);
  const editPackageData: any = useAppSelector((state) => state?.editPackage);
  const userPackage: any = useAppSelector((state) => state?.userPackage);
  const [currency, setCurrency] = useState({ value: 0, label: "CAD" });
  const screenSize = UseWindowSize();
  const [betweenDate, setBetweenDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
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
    setPackageData({ ...packageData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userPackage.length !== 0 && mode === "edit") {
      const data = userPackage?.data;
      setFrom({ value: 0, label: data.fromCountry });
      setFromCountry(data.fromCountry);
      setFromCountryCity(data.fromCountryCity);
      setTo({ value: 0, label: data.toCountry });
      setToCountry(data.toCountry);
      setToCountryCity(data.toCountryCity);
      setType(typeOptions.find((option) => option.label === data.packageTypes));
      setService(
        servicesOptions.find((option) => option.label === data.deliveryTypes)
      );
      setArrivalBetweenDate(convertHumanDateToUnix(data?.fromDate1));
      setArrivalToDate(convertHumanDateToUnix(data?.fromDate2));
      setDepartureBetweenDate(convertHumanDateToUnix(data?.toDate1));
      setDepartureToDate(convertHumanDateToUnix(data?.toDate2));
      setPackageData({
        ...userPackage,
        weight: data.weight,
        message: data.description,
        value: data.itemValue,
      });
      setImages(data.images);
    }
  }, [userPackage]);

  useEffect(() => {
    if (mode === "add") {
      setFrom({ value: 0, label: "Canada" });
      setFromCountry("Canada");
      setFromCountryCity("Canada, Toronto");
      setTo({ value: 0, label: "Iran" });
      setToCountry("Iran");
      setToCountryCity("Iran, Tehran");
      setType({ value: null, label: null });
      setService({ value: null, label: null });
      setArrivalBetweenDate(new Date());
      setArrivalToDate(new Date());
      setDepartureBetweenDate(new Date());
      setDepartureToDate(new Date());
      setPackageData({
        ...packageData,
        weight: "0",
        message: "",
        value: "",
        offerPrice: "",
      });
      setImages([]);
    }
  }, [mode]);

  useEffect(() => {
    dispatch(getAllDeliveryType());
    dispatch(getAllPackagesType());
  }, []);

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

  const handleServicesChange = (selected) => {
    setService(selected);
  };

  const handleTypeChange = (selected) => {
    setType(selected);
    // setPackagetypeId(
    //   selected?.map((item) => {
    //     return item.value;
    //   })
    // );
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

  const SelectMenuButton = (props) => {
    return (
      <components.MenuList {...props}>{props.children}</components.MenuList>
    );
  };

  useEffect(() => {
    if (!addPackageData?.isSuccess) {
      setIsLoading(false);
    } else if (!addPackageData?.isSuccess) {
      setIsLoading(false);
      setIsOpen(false);
    }
  }, [addPackageData]);

  useEffect(() => {
    if (!editPackageData?.isSuccess) {
      setIsLoading(false);
    } else if (!editPackageData?.isSuccess) {
      setIsLoading(false);
      setIsOpen(false);
    }
  }, [editPackageData]);

  const callAddEditTravelApi = () => {
    const body = new FormData();
    if (mode === "edit") body.append("pkgId", pkgId);
    body.append("packagetypeId", type.value);
    body.append("packageType", "");
    body.append("weight", packageData.weight);
    body.append("value", packageData.value);
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
    body.append("offerPrice", packageData.offerPrice);
    body.append("message", packageData.message);
    body.append("images", images);
    if (mode === "add") dispatch(addNewPackage(body));
    else if (mode === "edit") dispatch(editUserPackage(body));
    setIsLoading(true);
  };

  const addEditTravel = () => {
    callAddEditTravelApi();
  };

  return (
    <div className="request-slider-container">
      <Row className="request-wrapper">
        <Col xs={12} className="request-form">
          <h1>Send Request</h1>
          <div className="send-input-wrapper">
            <span className="send-pack-title">I want to send my</span>
            <div className="d-inline-block">
              {/* <Input
                size="sm"
                id="send-pack"
                placeholder="Gadget"
                className="custom-input-send"
                value={offerData.offerType}
              /> */}
              <Select
                className="custom-select-send d-inline-block"
                value={type}
                onChange={handleTypeChange}
                options={typeOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
              />
            </div>
            <span className="weight-title">At weight</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="weight"
                name="weight"
                placeholder="1.2 kg"
                className="custom-input-weight"
                value={packageData.weight}
                onChange={handleChange}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="value-title">And value of</span>
            <div className="d-inline-block position-relative">
              <Input
                size="sm"
                id="value"
                name="value"
                placeholder="200"
                className="custom-input-value"
                value={packageData.value}
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
            <span className="size-title">And size</span>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="sizeWidth"
                name="sizeWidth"
                placeholder="Width"
                className="custom-input-size-width"
                value={packageData.sizeWidth}
                onChange={handleChange}
              />
            </div>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="sizeHeight"
                name="sizeHeight"
                placeholder="Height"
                className="custom-input-size-height"
                value={packageData.sizeHeight}
                onChange={handleChange}
              />
            </div>
            <div className="d-inline-block">
              <Input
                size="sm"
                id="sizeLength"
                name="sizeLength"
                placeholder="Length"
                className="custom-input-size-length"
                value={packageData.sizeLength}
                onChange={handleChange}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="package-from-title">From</span>
            <div className="d-inline-block">
              <GooglePlacesAutocomplete
                selectProps={{
                  className: "custom-package-place-from d-inline-block",
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
          </div>
        </Col>
        <Col xs={12} className="request-form">
          <div className="send-input-wrapper">
            <span className="package-and-title">And</span>
            <div className="d-inline-block">
              <Select
                className="custom-select-package-service d-inline-block"
                value={service}
                onChange={handleServicesChange}
                options={servicesOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyle}
              />
            </div>
            <span className="at-title">At</span>
            <div className="d-inline-block">
              {/* <Input
                size="sm"
                id="at"
                placeholder="No2, Razavi 22, Rezashahr, Mashhad, Iran"
                className="custom-input-at-request"
                // value={offerData.at}
              /> */}
              <GooglePlacesAutocomplete
                selectProps={{
                  className: "custom-input-at-destination d-inline-block",
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
            <span className="to-date-title">To</span>
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
            <span className="and-offer-title">And offer</span>
            <div className="d-inline-block position-relative">
              <Input
                size="sm"
                id="offerPrice"
                name="offerPrice"
                placeholder="600"
                className="custom-input-and-offer"
                value={packageData.offerPrice}
                onChange={handleChange}
              />
              <Select
                className="custom-select-unit-price d-inline-block"
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
          <div
            style={size.width < 768 ? { width: "345px" } : { width: "580px" }}
          >
            <MultipleUploader
              title="Upload package photo"
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
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod massa augue, non venenatis eros sollicitudin eget. Curabitur velit risus, consequat non dolor in, consectetur commodo urna."
                className="custom-input-message"
                value={packageData.message}
                onChange={handleChange}
                textArea={true}
                rows={4}
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
