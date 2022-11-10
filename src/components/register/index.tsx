import React, { useEffect, useState } from "react";
import { Input, GoogleMapAPI, Uploader, Button } from "components";
import UserAvatar from "./../../assets/images/user-avatar.png";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { useAppDispatch, useAppSelector } from "redux/store";
// import { createUser } from "redux/slices/register";
import { IRegister } from "models/interfaces";
import {
  osVersion,
  osName,
  browserName,
  browserVersion,
} from "react-device-detect";
import { createUser } from "redux/actions/register";
import { ToastContainer } from "react-toastify";

export const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const size = UseWindowSize();
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [secondIdentityPhoto, setSecondIdentityPhoto] = useState(null);
  const [avatar, setAvatar] = useState(UserAvatar);
  const [personalPhoto, setPersonalPhoto] = useState(null);
  const [changeImageStyle, setChangeImageStyle] = useState(false);
  const [position_lat, setLat] = useState(null);
  const [position_long, setLng] = useState(null);
  const [checked, setChecked] = useState(false);
  const [device_Model, setDeviceModel] = useState("");
  const [registerData, setRegisterData] = useState<IRegister>({
    personalPhoto: null,
    aboutMe: "",
    firstName: "",
    lastName: "",
    displayName: "",
    phoneNumber: "",
    email: "",
    address: "",
    position_lat: "",
    position_long: "",
    password: "",
    rePassword: "",
    passportPhoto: null,
    secondIdentityPhoto: null,
    client_Id: "517D58DC-95A5-4732-B182-2188A9853CF5",
    client_Secret: "QVWglh6wamKIEyI8kdSlWsD/gNTUpYKdC4GjTw/zFibEcBWH5Djoyw==",
    device_Model: "",
    device_Id: null,
    player_Id: null,
  });

  useEffect(() => {
    setDeviceModel(`${browserName}-${browserVersion}(${osName}${osVersion})`);
  }, []);

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
    const data = {
      ...registerData,
      personalPhoto,
      passportPhoto,
      secondIdentityPhoto,
      position_lat,
      position_long,
      device_Model,
    };
    console.log(data);

    dispatch(createUser(data))
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
              id="passport-input"
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
              id="retypePassport-input"
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
            variant="primary"
            data-test="docs-btn-anchor"
            className="submit-request-btn mt-4"
            onClick={registerBtn}
          >
            Submit Request
          </Button>
        </div>
      </div>
    </>
  );
};
