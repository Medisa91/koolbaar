import React, { useEffect, useState } from "react";
import { Input, GoogleMapAPI, Uploader, Button } from "components";
import UserAvatar from "./../../assets/images/user-avatar.png";
import { Col, Row, Spinner } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { useAppDispatch, useAppSelector } from "redux/store";
import { IRegister } from "models/interfaces";
import { createUser } from "redux/actions/register";
import { ToastContainer } from "react-toastify";
import { showRegisterResult } from "redux/slices/register";

interface IProps {
  deviceModel: string;
}

export const Register: React.FC<IProps> = ({ deviceModel }) => {
  const dispatch = useAppDispatch();
  const size = UseWindowSize();
  const data = useAppSelector(showRegisterResult);
  const [PassportPhoto, setPassportPhoto] = useState(null);
  const [SecondIdentityPhoto, setSecondIdentityPhoto] = useState(null);
  const [avatar, setAvatar] = useState(UserAvatar);
  const [PersonalPhoto, setPersonalPhoto] = useState(null);
  const [changeImageStyle, setChangeImageStyle] = useState(false);
  const [Position_lat, setLat] = useState(null);
  const [Position_long, setLng] = useState(null);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const Device_Model = deviceModel;
  const [registerData, setRegisterData] = useState<IRegister>({
    PersonalPhoto: null,
    AboutMe: "",
    FirstName: "",
    LastName: "",
    DisplayName: "",
    PhoneNumber: "",
    Email: "",
    Address: "",
    Position_lat: "",
    Position_long: "",
    Password: "",
    RePassword: "",
    PassportPhoto: null,
    SecondIdentityPhoto: null,
    Client_Id: "517D58DC-95A5-4732-B182-2188A9853CF5",
    Client_Secret: "QVWglh6wamKIEyI8kdSlWsD/gNTUpYKdC4GjTw/zFibEcBWH5Djoyw==",
    Device_Model: "",
    Device_Id: null,
    Player_Id: null,
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
      PersonalPhoto,
      PassportPhoto,
      SecondIdentityPhoto,
      Position_lat,
      Position_long,
      Device_Model,
    };

    dispatch(createUser(data));
  };

  useEffect(() => {
    setIsLoading(false);
    // console.log(data);
  }, [data, isLoading]);

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
              id="AboutMe-input"
              placeholder="eg. I am a PHD student that living down town Toronto"
              className="custom-textarea-register"
              type="text"
              name="AboutMe"
              value={registerData.AboutMe}
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
              id="FirstName-input"
              placeholder="First Name"
              name="FirstName"
              className="half-custom-input-register"
              value={registerData.FirstName}
              onChange={handleChange}
            />
          </Col>
          <Col xs={6} className="mb-4 text-center">
            <Input
              size="sm"
              id="LastName-input"
              placeholder="Last Name"
              name="LastName"
              className="half-custom-input-register"
              value={registerData.LastName}
              onChange={handleChange}
            />
          </Col>
          <Col xs={6} className="mb-4">
            <Input
              size="sm"
              id="DisplayName-input"
              placeholder="Display Name"
              name="DisplayName"
              className="half-custom-input-register"
              value={registerData.DisplayName}
              onChange={handleChange}
            />
          </Col>
          <Col xs={6} className="mb-4 text-center">
            <Input
              size="sm"
              id="PhoneNumber-input"
              placeholder="Phone Number"
              name="PhoneNumber"
              className="half-custom-input-register"
              value={registerData.PhoneNumber}
              onChange={handleChange}
            />
          </Col>
          <Col xs={12} className="mb-4">
            <Input
              size="sm"
              id="Email-input"
              placeholder="Email"
              name="Email"
              className="full-custom-input-register"
              value={registerData.Email}
              onChange={handleChange}
            />
          </Col>
          <Col xs={12} className="mb-4">
            <Input
              size="sm"
              id="Address-input"
              placeholder="Address"
              name="Address"
              className="full-custom-input-register"
              value={registerData.Address}
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
              id="Password-input"
              placeholder="Password"
              className="half-custom-input-register"
              name="Password"
              type="password"
              value={registerData.Password}
              onChange={handleChange}
            />
          </Col>
          <Col xs={6} className="mb-4 text-center">
            <Input
              size="sm"
              id="RePassword-input"
              placeholder="Retype Password"
              name="RePassword"
              type="password"
              className="half-custom-input-register"
              value={registerData.RePassword}
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
              photo={PassportPhoto}
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
              photo={SecondIdentityPhoto}
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
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            Submit Request
          </Button>
        </div>
      </div>
    </>
  );
};
