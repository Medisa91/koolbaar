import React, { useState, useEffect } from "react";
import { Uploader } from "components";
import { Input } from "layers";
import UserAvatar from "./../../assets/images/user-avatar.png";
import { Col, Row } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { IUserInfo } from "models/interfaces";
import { SkeletonForm } from "components/Skeleton/skeletonForm";

interface IProps {
  userData: IUserInfo;
}

export const PersonalInfo: React.FC<IProps> = ({ userData }) => {
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
      {userData ? (
        <>
          <div className="d-flex">
            <div
              className={`${
                "user-profile-box"
                // changeImageStyle ? "user-profile-box" : "user-default-box"
              }`}
            >
              <Input
                label={
                  <img
                    src={
                      userData?.personalPhoto ? userData?.personalPhoto : avatar
                    }
                    alt="user-avatar"
                  />
                }
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
                value={userData?.aboutMe}
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
                value={userData?.firstName}
              />
            </Col>
            <Col xs={6} className="mb-4 text-center pr-0">
              <Input
                size="sm"
                id="lastName-input"
                placeholder="Last Name"
                className="half-custom-input-register w-100"
                value={userData?.lastName}
              />
            </Col>
            <Col xs={6} className="mb-4 pr-0">
              <Input
                size="sm"
                id="displayName-input"
                placeholder="Display Name"
                className="half-custom-input-register w-100"
                value={userData?.displayName}
              />
            </Col>
            <Col xs={6} className="mb-4 text-center pr-0">
              <Input
                size="sm"
                id="phoneNumber-input"
                placeholder="Phone Number"
                className="half-custom-input-register w-100"
                value={userData?.phoneNumber}
              />
            </Col>
            <Col xs={12} className="mb-4">
              <Input
                size="sm"
                id="email-input"
                placeholder="Email"
                className="full-custom-input-register"
                value={userData?.email}
              />
            </Col>
            <Col xs={12} className="mb-4">
              <Input
                size="sm"
                id="address-input"
                placeholder="Address"
                className="full-custom-input-register"
                value={userData?.address}
              />
            </Col>
            {/*<Col xs={6} className="mb-4 pr-0">
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
        </Col> */}
          </Row>
          <Row>
            <section
              className="container"
              style={size.width < 768 ? { width: "400px" } : { width: "601px" }}
            >
              <Uploader
                image={userData?.passportPhoto}
                title="Upload Passport front page"
              />
            </section>
          </Row>
          <Row>
            <section
              className="container"
              style={size.width < 768 ? { width: "400px" } : { width: "601px" }}
            >
              <Uploader
                image={userData?.secondIdentityPhoto}
                title="Upload ID Driving License/PR Card/ Green Card/National Card)"
              />
            </section>
          </Row>
        </>
      ) : (
        <SkeletonForm />
      )}
    </div>
  );
};
