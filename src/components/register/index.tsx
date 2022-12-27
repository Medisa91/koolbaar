import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GoogleMapAPI, Uploader } from "components";
import { Input, Button } from "layers";
import UserAvatar from "./../../assets/images/user-avatar.png";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { useAppDispatch, useAppSelector } from "redux/store";
import { IRegister, ILogin } from "models/interfaces";
import { loginUser } from "redux/actions/Authorization";
import { createUser } from "redux/actions/Authorization";
import { Oval } from "react-loader-spinner";
import PhoneInput from "react-phone-number-input";
import { useTranslation } from "react-i18next";
import {
  isValidFirstName,
  isValidLastName,
  isValidDisplayName,
  isValidPhoneNumber,
  isValidEmail,
  isValidPassword,
  isValidRePassword,
  isMatchPasswords,
  isValidFormatEmail,
  isValid,
  isValidPhoneNumberLength,
} from "helpers/registerValidation";

interface IGoogleResponse {
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
}

interface IProps {
  deviceModel: string;
  thirdPartyResponse: IGoogleResponse;
  setIsOpen: Function;
  setIsLogin: Function;
}

export const Register: React.FC<IProps> = ({
  deviceModel,
  thirdPartyResponse,
  setIsOpen,
  setIsLogin,
}) => {
  const dispatch = useAppDispatch();
  const size = UseWindowSize();
  const { t } = useTranslation();
  const createUserData: any = useAppSelector((state) => state.register);
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [secondIdentityPhoto, setSecondIdentityPhoto] = useState(null);
  const [avatar, setAvatar] = useState(UserAvatar);
  const [personalPhoto, setPersonalPhoto] = useState(null);
  const [code, setCode] = useState("+1");
  const [changeImageStyle, setChangeImageStyle] = useState(false);
  const [positionLat, setLat] = useState(null);
  const [positionLong, setLng] = useState(null);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);
  const clientId = "517D58DC-95A5-4732-B182-2188A9853CF5";
  const clientSecret =
    "QVWglh6wamKIEyI8kdSlWsD/gNTUpYKdC4GjTw/zFibEcBWH5Djoyw==";
  const deviceId = "";
  const playerId = "";
  const [registerData, setRegisterData] = useState<IRegister>({
    personalPhoto: null,
    aboutMe: "",
    firstName: "",
    lastName: "",
    displayName: "",
    phoneNumber: "",
    email: "",
    address: "",
    positionLat: 0,
    positionLong: 0,
    password: "",
    rePassword: "",
    passportPhoto: null,
    secondIdentityPhoto: null,
    clientId: "517D58DC-95A5-4732-B182-2188A9853CF5",
    clientSecret: "QVWglh6wamKIEyI8kdSlWsD/gNTUpYKdC4GjTw/zFibEcBWH5Djoyw==",
    deviceModel: "",
    deviceId: "",
    playerId: "",
  });

  useEffect(() => {
    if (thirdPartyResponse.avatar) {
      setAvatar(thirdPartyResponse.avatar);
      const image = thirdPartyResponse.avatar;
      const urlToObject = async () => {
        const response = await fetch(image);
        const blob = await response.blob();
        const file = new File([blob], "image.jpg", { type: blob.type });
        console.log(file);
        setPersonalPhoto(file);
        return file;
      };
      setRegisterData({
        ...registerData,
        personalPhoto: urlToObject(),
        firstName: thirdPartyResponse.firstName,
        lastName: thirdPartyResponse.lastName,
        email: thirdPartyResponse.email,
      });
    }
  }, [thirdPartyResponse]);

  const handleCheckChange = () => {
    setChecked(!checked);
  };

  const updateAvatars = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
    setChangeImageStyle(true);
    setPersonalPhoto(e.target.files[0]);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const callRegisterApi = () => {
    const phone = `${code}${registerData.phoneNumber}`;
    const body = new FormData();
    body.append("personalPhoto", personalPhoto);
    body.append("passportPhoto", passportPhoto);
    body.append("secondIdentityPhoto", secondIdentityPhoto);
    body.append("aboutMe", registerData.aboutMe);
    body.append("firstName", registerData.firstName);
    body.append("lastName", registerData.lastName);
    body.append("displayName", registerData.displayName);
    body.append("phoneNumber", phone);
    body.append("email", registerData.email);
    body.append("address", registerData.address);
    body.append("positionLat", positionLat);
    body.append("positionLong", positionLong);
    body.append("password", registerData.password);
    body.append("rePassword", registerData.rePassword);
    body.append("clientId", clientId);
    body.append("clientSecret", clientSecret);
    body.append("deviceModel", deviceModel);
    body.append("deviceId", deviceId);
    body.append("playerId", playerId);

    dispatch(createUser(body));
    setIsLoading(true);
  };

  const register = () => {
    setRegisterClicked(true);
    if (isValid(registerData, checked)) {
      toast.error("Enter the parameters correctly!");
      return;
    }
    callRegisterApi();
  };

  useEffect(() => {
    if (createUserData?.accessToken) {
      window.localStorage.setItem("token", createUserData?.accessToken);
      window.localStorage.setItem("avatar", createUserData?.personalPhoto);
      window.localStorage.setItem("expire", createUserData?.expiresIn);
      window.localStorage.setItem("refreshToken", createUserData?.refreshToken);
      window.localStorage.setItem("tokenType", createUserData?.tokenType);
      setIsOpen(false);
      setIsLoading(false);
      setIsLogin(true);
      return;
    }
    setIsLoading(false);
  }, [createUserData]);

  return (
    <>
      <div className="register-wrapper">
        <h1>{t("register")}</h1>
        <div className="d-flex">
          <div
            className={`${
              changeImageStyle ? "user-profile-box" : "user-default-box"
            }`}
          >
            <Input
              label={
                <img
                  src={
                    thirdPartyResponse?.avatar
                      ? thirdPartyResponse?.avatar
                      : avatar
                  }
                  alt="user-avatar"
                  className="avatar-main-img"
                />
              }
              size="sm"
              id="avatar-input"
              name="avatar"
              type="file"
              className="avatar-control-file"
              onChange={updateAvatars}
              disabled={thirdPartyResponse?.avatar !== ""}
            />
          </div>
          <div className="profile-box-container">
            <span className="short-label">{t("aboutMe")}</span>
            <Input
              size="sm"
              id="aboutMe-input"
              placeholder={t("aboutUsExample")}
              className="custom-textarea-register"
              type="text"
              name="aboutMe"
              value={registerData.aboutMe}
              onChange={handleChange}
              textArea={true}
              rows={2}
            />
          </div>
        </div>
        <Row>
          <Col xs={6} className="mb-4">
            <Input
              size="sm"
              id="firstName-input"
              placeholder={t("firstName")}
              name="firstName"
              className={`half-custom-input-register ${
                registerClicked &&
                !isValidFirstName(registerData.firstName) &&
                "empty-input-style"
              }`}
              value={registerData.firstName}
              disabled={thirdPartyResponse?.firstName !== ""}
              onChange={handleChange}
            />
            {registerClicked && !isValidFirstName(registerData.firstName) && (
              <span className="err-validation">Required!</span>
            )}
          </Col>
          <Col xs={6} className="mb-4 text-left">
            <Input
              size="sm"
              id="lastName-input"
              placeholder={t("lastName")}
              name="lastName"
              className={`half-custom-input-register ${
                registerClicked &&
                !isValidLastName(registerData.lastName) &&
                "empty-input-style"
              }`}
              value={registerData.lastName}
              disabled={thirdPartyResponse?.lastName !== ""}
              onChange={handleChange}
            />
            {registerClicked && !isValidLastName(registerData.lastName) && (
              <span className="err-validation">Required!</span>
            )}
          </Col>
          <Col xs={size.width < 768 ? 12 : 6} className="mb-4">
            <Input
              size="sm"
              id="displayName-input"
              placeholder="Display Name"
              name="displayName"
              className={`half-custom-input-register ${
                registerClicked &&
                !isValidDisplayName(registerData.displayName) &&
                "empty-input-style"
              }`}
              value={registerData.displayName}
              onChange={handleChange}
            />
            {registerClicked &&
              !isValidDisplayName(registerData.displayName) && (
                <span className="err-validation">Required!</span>
              )}
          </Col>
          <Col
            xs={size.width < 768 ? 12 : 6}
            className="mb-4 text-left phone-wrapper"
          >
            <PhoneInput
              international
              defaultCountry="US"
              value={code}
              onChange={setCode}
            ></PhoneInput>
            <span className="PhoneInputCountryArrow"></span>
            <Input
              size="sm"
              id="phoneNumber-input"
              placeholder="Phone Number"
              name="phoneNumber"
              className={`${
                size.width < 768
                  ? "responsive-half-custom-phone-register"
                  : "half-custom-phone-register"
              }  d-inline-flex ${
                registerClicked &&
                !isValidPhoneNumber(registerData.phoneNumber) &&
                "empty-input-style"
              }`}
              value={registerData.phoneNumber}
              onChange={handleChange}
            />
            {registerClicked &&
              !isValidPhoneNumber(registerData.phoneNumber) && (
                <span className="err-validation">Required!</span>
              )}
            {registerClicked &&
              !isValidPhoneNumberLength(registerData.phoneNumber) && (
                <span className="err-validation">
                  Phone number should be 10 digits
                </span>
              )}
            {/* <NumericFormat
              className="half-custom-input-register"
              id="phoneNumber"
              placeholder="Phone Number"
              name="phoneNumber"
              value={registerData.phoneNumber}
              allowLeadingZeros={true}
              // onValueChange={handleChange}
              onValueChange={(values) => {
                const { formattedValue, value } = values;
                setPhoneNumber(formattedValue);
              }}
            /> */}
          </Col>
          <Col xs={12} className="mb-4">
            <Input
              size="sm"
              id="email-input"
              placeholder="Email"
              name="email"
              className={`full-custom-input-register ${
                registerClicked &&
                (!isValidEmail(registerData.email) ||
                  !isValidFormatEmail(registerData.email)) &&
                "empty-input-style"
              }`}
              disabled={thirdPartyResponse?.email !== ""}
              value={registerData.email}
              onChange={handleChange}
            />
            {registerClicked && !isValidEmail(registerData.email) && (
              <span className="err-validation">Required!</span>
            )}
            {registerClicked && !isValidFormatEmail(registerData.email) && (
              <span className="err-validation">
                Email format isn't correct!
              </span>
            )}
          </Col>
          <Col xs={12} className="mb-4">
            <Input
              size="sm"
              id="address-input"
              placeholder="Address"
              name="address"
              className="full-custom-input-register"
              value={registerData.address}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <div className="map-wrapper">
          <GoogleMapAPI setLat={setLat} setLng={setLng} />
        </div>
        <Row className="mt-4">
          <Col xs={6} className="mb-4">
            <Input
              size="sm"
              id="password-input"
              placeholder="Password"
              className={`half-custom-input-register ${
                registerClicked &&
                !isValidPassword(registerData.password) &&
                "empty-input-style"
              }`}
              name="password"
              type="password"
              value={registerData.password}
              onChange={handleChange}
            />
            {registerClicked && !isValidPassword(registerData.password) && (
              <span className="err-validation">Required!</span>
            )}
          </Col>
          <Col xs={6} className="mb-4 text-left">
            <Input
              size="sm"
              id="rePassword-input"
              placeholder="Retype Password"
              name="rePassword"
              type="password"
              className={`half-custom-input-register ${
                registerClicked &&
                (!isValidRePassword(registerData.rePassword) ||
                  !isMatchPasswords(
                    registerData.rePassword,
                    registerData.password
                  )) &&
                "empty-input-style"
              }`}
              value={registerData.rePassword}
              onChange={handleChange}
            />
            {registerClicked && !isValidRePassword(registerData.rePassword) && (
              <span className="err-validation">Required!</span>
            )}
            {registerClicked &&
              !isMatchPasswords(
                registerData.rePassword,
                registerData.password
              ) && (
                <span className="err-validation">
                  The passwords don't match!
                </span>
              )}
          </Col>
        </Row>
        <Row>
          <section
            className="container"
            style={size.width < 768 ? { width: "400px" } : { width: "601px" }}
          >
            <Uploader
              title="Upload Passport front page"
              photo={passportPhoto}
              setPhoto={setPassportPhoto}
            />
          </section>
        </Row>
        <Row>
          <section
            className="container"
            style={size.width < 768 ? { width: "400px" } : { width: "601px" }}
          >
            <Uploader
              title="Upload ID Driving License/PR Card/ Green Card/National Card)"
              photo={secondIdentityPhoto}
              setPhoto={setSecondIdentityPhoto}
            />
          </section>
        </Row>
        <div>
          <label className="checkbox-container">
            I agree with the terms and condition defined on this{" "}
            <a href="/" style={{ textDecorationLine: "underline" }}>
              link
            </a>
            .
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div>
          <Button
            disabled={!checked}
            variant="primary"
            data-test="docs-btn-anchor"
            className="submit-request-btn mt-4"
            onClick={register}
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
      </div>
    </>
  );
};
