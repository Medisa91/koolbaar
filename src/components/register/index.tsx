import React, { useEffect, useState } from "react";
import { GoogleMapAPI, Uploader } from "components";
import { Input, Button } from "layers";
import UserAvatar from "./../../assets/images/user-avatar.png";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { useAppDispatch, useAppSelector } from "redux/store";
import { IRegister } from "models/interfaces";
import { createUser } from "redux/actions/Authorization";
import { ToastContainer } from "react-toastify";
import { showRegisterResult } from "redux/slices/Authorization/register";
import { Oval } from "react-loader-spinner";

interface IProps {
  deviceModel: string;
}

export const Register: React.FC<IProps> = ({ deviceModel }) => {
  const dispatch = useAppDispatch();
  const size = UseWindowSize();
  const data = useAppSelector(showRegisterResult);
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [secondIdentityPhoto, setSecondIdentityPhoto] = useState(null);
  const [avatar, setAvatar] = useState(UserAvatar);
  const [personalPhoto, setPersonalPhoto] = useState(null);
  const [changeImageStyle, setChangeImageStyle] = useState(false);
  const [positionLat, setLat] = useState(null);
  const [positionLong, setLng] = useState(null);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const Device_Model = deviceModel;
  const [registerData, setRegisterData] = useState<IRegister>({
    personalPhoto: null,
    aboutMe: "",
    firstName: "",
    lastName: "",
    displayName: "",
    phoneNumber: "",
    email: "",
    address: "",
    positionLat: "",
    positionLong: "",
    password: "",
    rePassword: "",
    passportPhoto: null,
    secondIdentityPhoto: null,
    clientId: "517D58DC-95A5-4732-B182-2188A9853CF5",
    clientSecret: "QVWglh6wamKIEyI8kdSlWsD/gNTUpYKdC4GjTw/zFibEcBWH5Djoyw==",
    deviceModel: "",
    deviceId: null,
    playerId: null,
  });

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

  const registerBtn = () => {
    setIsLoading(true);
    const data = {
      ...registerData,
      personalPhoto,
      // phoneNumber: parseInt(phoneNumber, 10),
      passportPhoto,
      secondIdentityPhoto,
      positionLat,
      positionLong,
      deviceModel,
    };

    dispatch(createUser(data));
  };

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
      <div className="register-wrapper">
        <h1>Register</h1>
        <div className="d-flex">
          <div
            className={`${
              changeImageStyle ? "user-profile-box" : "user-default-box"
            }`}
          >
            <Input
              label={<img src={avatar} alt="user-avatar" />}
              size="sm"
              id="avatar-input"
              name="avatar"
              type="file"
              className="avatar-control-file"
              onChange={updateAvatars}
            />
          </div>
          <div className="profile-box-container">
            <span className="short-label">About Me</span>
            <Input
              size="sm"
              id="aboutMe-input"
              placeholder="eg. I am a PHD student that living down town Toronto"
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
              placeholder="First Name"
              name="firstName"
              className="half-custom-input-register"
              value={registerData.firstName}
              onChange={handleChange}
            />
          </Col>
          <Col xs={6} className="mb-4 text-center">
            <Input
              size="sm"
              id="lastName-input"
              placeholder="Last Name"
              name="lastName"
              className="half-custom-input-register"
              value={registerData.lastName}
              onChange={handleChange}
            />
          </Col>
          <Col xs={6} className="mb-4">
            <Input
              size="sm"
              id="displayName-input"
              placeholder="Display Name"
              name="displayName"
              className="half-custom-input-register"
              value={registerData.displayName}
              onChange={handleChange}
            />
          </Col>
          <Col xs={6} className="mb-4 text-center">
            <Input
              size="sm"
              id="phoneNumber-input"
              placeholder="Phone Number"
              name="phoneNumber"
              className="half-custom-input-register"
              value={registerData.phoneNumber}
              onChange={handleChange}
            />
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
              className="full-custom-input-register"
              value={registerData.email}
              onChange={handleChange}
            />
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
              className="half-custom-input-register"
              name="password"
              type="password"
              value={registerData.password}
              onChange={handleChange}
            />
          </Col>
          <Col xs={6} className="mb-4 text-center">
            <Input
              size="sm"
              id="rePassword-input"
              placeholder="Retype Password"
              name="rePassword"
              type="password"
              className="half-custom-input-register"
              value={registerData.rePassword}
              onChange={handleChange}
            />
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
            onClick={registerBtn}
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
