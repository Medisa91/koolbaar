import React, { useState } from "react";
import { Input, Uploader, Button } from "components";
import UserAvatar from "./../../assets/images/avatar-profile.png";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

export const PersonalInfo: React.FC = () => {
  const size = UseWindowSize();
  const [avatar, setAvatar] = useState(UserAvatar);
  const [changeImageStyle, setChangeImageStyle] = useState(false);

  const updateAvatars = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
    setChangeImageStyle(true);
  };

  return (
    <div>
      <h1 className="account-title">Personal information</h1>
      <div className="d-flex">
        <div
          className={`${
            "user-profile-box"
            // changeImageStyle ? "user-profile-box" : "user-default-box"
          }`}
        >
          <Input
            label={<img src={avatar} alt="user-avatar" />}
            size="sm"
            id="avatar-input"
            type="file"
            className="avatar-control-file"
            onChange={updateAvatars}
            // ref={profileImg}
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
            textArea={true}
            rows={2}
          />
        </div>
      </div>
      <Row>
        <Col xs={6} className="mb-4 pr-0">
          <Input
            size="sm"
            id="firstName-input"
            placeholder="First Name"
            className="half-custom-input-register w-100"
          />
        </Col>
        <Col xs={6} className="mb-4 text-center pr-0">
          <Input
            size="sm"
            id="lastName-input"
            placeholder="Last Name"
            className="half-custom-input-register w-100"
          />
        </Col>
        <Col xs={6} className="mb-4 pr-0">
          <Input
            size="sm"
            id="displayName-input"
            placeholder="Display Name"
            className="half-custom-input-register w-100"
          />
        </Col>
        <Col xs={6} className="mb-4 text-center pr-0">
          <Input
            size="sm"
            id="phoneNumber-input"
            placeholder="Phone Number"
            className="half-custom-input-register w-100"
          />
        </Col>
        <Col xs={12} className="mb-4">
          <Input
            size="sm"
            id="email-input"
            placeholder="Email"
            className="full-custom-input-register"
          />
        </Col>
        <Col xs={12} className="mb-4">
          <Input
            size="sm"
            id="address-input"
            placeholder="Address"
            className="full-custom-input-register"
          />
        </Col>
        <Col xs={6} className="mb-4 pr-0">
          <Input
            size="sm"
            id="passport-input"
            placeholder="Passport"
            className="half-custom-input-register w-100"
          />
        </Col>
        <Col xs={6} className="mb-4 text-center pr-0">
          <Input
            size="sm"
            id="retypePassport-input"
            placeholder="Retype Passport"
            className="half-custom-input-register w-100"
          />
        </Col>
      </Row>
      <Row>
        <section
          className="container"
          style={size.width < 768 ? { width: "400px" } : { width: "601px" }}
        >
          <Uploader title="Upload Passport front page" />
        </section>
      </Row>
      <Row>
        <section
          className="container"
          style={size.width < 768 ? { width: "400px" } : { width: "601px" }}
        >
          <Uploader title="Upload ID Driving License/PR Card/ Green Card/National Card)" />
        </section>
      </Row>
    </div>
  );
};
