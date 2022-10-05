import React, { useState , useRef} from "react";
import { Input, GoogleMap, Uploader,Button } from "components";
import UserAvatar from "./../../assets/images/user-avatar.png";
import { Col, Row } from "react-bootstrap";

export const Register: React.FC = () => {
  const [avatar, setAvatar] = useState(UserAvatar);
  const [changeImageStyle, setChangeImageStyle] = useState(false);
  const [checked, setChecked] = useState(false);

  // const profileImg = useRef();

  const handleChange = () => { 
    setChecked(!checked); 
  }; 

  const updateAvatars = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
    setChangeImageStyle(true)
  };

  return (
    <>
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
          <Col xs={6} className="mb-4">
            <Input
              size="sm"
              id="firstName-input"
              placeholder="First Name"
              className="half-custom-input-register"
            />
          </Col>
          <Col xs={6} className="mb-4 text-center">
            <Input
              size="sm"
              id="lastName-input"
              placeholder="Last Name"
              className="half-custom-input-register"
            />
          </Col>
          <Col xs={6} className="mb-4">
            <Input
              size="sm"
              id="displayName-input"
              placeholder="Display Name"
              className="half-custom-input-register"
            />
          </Col>
          <Col xs={6} className="mb-4 text-center">
            <Input
              size="sm"
              id="phoneNumber-input"
              placeholder="Phone Number"
              className="half-custom-input-register"
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
        </Row>
        <div className="map-wrapper">
          <GoogleMap />
        </div>
        <Row className="mt-4">
          <Col xs={6} className="mb-4">
            <Input
              size="sm"
              id="passport-input"
              placeholder="Passport"
              className="half-custom-input-register"
            />
          </Col>
          <Col xs={6} className="mb-4 text-center">
            <Input
              size="sm"
              id="retypePassport-input"
              placeholder="Retype Passport"
              className="half-custom-input-register"
            />
          </Col>
        </Row>
        <Row>
          <Uploader title="Upload Passport front page" />
        </Row>
        <Row>
          <Uploader title="Upload ID Driving License/PR Card/ Green Card/National Card)" />
        </Row>
        <div>
          <label className="checkbox-container">
            I agree with the terms and condition defined on this{" "}
            <a href="/" style={{ textDecorationLine: "underline" }}>
              link
            </a>
            .
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <span className="checkmark"></span>
          </label>
        </div>
        <div>
          <Button
            variant="primary"
            data-test="docs-btn-anchor"           
            className="submit-request-btn mt-4"
          >
            Submit Request
          </Button>
        </div>
      </div>
    </>
  );
};
