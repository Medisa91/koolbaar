import React, { useState, useEffect } from "react";
import { Input, Button, Register } from "components";
import { Col, Row, Spinner } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { loginUser } from "redux/actions/login";
import { ILogin } from "models/interfaces";
import {
  osVersion,
  osName,
  browserName,
  browserVersion,
} from "react-device-detect";
import { useAppDispatch, useAppSelector } from "redux/store";
import { showLoginResult } from "redux/slices/login";

const clientId =
  "165924336796-1o4rjbggsh4ph9qu8m5qnauvsn5ge2rn.apps.googleusercontent.com";

export const Login: React.FC = () => {
  const size = UseWindowSize();
  const dispatch = useAppDispatch();
  const data = useAppSelector(showLoginResult);
  const [isLoading, setIsLoading] = useState(false);
  const [Device_Model, setDeviceModel] = useState("");
  const [loginData, setLoginData] = useState<ILogin>({
    grant_type: "password",
    username: "",
    password: "",
    client_id: "517D58DC-95A5-4732-B182-2188A9853CF5",
    client_secret: "QVWglh6wamKIEyI8kdSlWsD/gNTUpYKdC4GjTw/zFibEcBWH5Djoyw==",
    device_model: "",
    device_id: "",
    player_id: "",
  });

  useEffect(() => {
    setDeviceModel(`${browserName}-${browserVersion}(${osName}${osVersion})`);
  }, []);

  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginBtn = () => {
    setIsLoading(true);
    const data = {
      ...loginData,
      Device_Model,
    };

    dispatch(loginUser(data));
  };
  
  useEffect(() => {
    setIsLoading(false);
  }, [data, isLoading]);

  return (
    <div className="login-slider-container">
      <Row className="login-wrapper">
        <Col className="login-form" lg={5} md={5} xs={12}>
          <h1>Login</h1>
          <Input
            size="sm"
            id="email-input"
            placeholder="Email Address"
            className="custom-input-login"
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
          <Input
            size="sm"
            id="password-input"
            placeholder="Password"
            className="custom-input-login mt-4"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <Button
            variant="primary"
            data-test="docs-btn-anchor"
            className="login-btn mt-4"
            onClick={loginBtn}
          >
            Login
          </Button>
        </Col>
        {size.width >= 768 && (
          <Col xs={2} className="right-line-wrapper pr-1">
            <div className="right-line-separate-login">
              <span>OR</span>
            </div>
          </Col>
        )}
        <Col
          className={`login-via-form ${
            size.width < 768 ? "pl-3 mt-5" : "pl-0"
          }`}
          lg={5}
          md={5}
          xs={12}
        >
          <h1>Login Via</h1>

          <FacebookLogin
            appId="598976655336817"
            autoLoad={false}
            fields="name,email,picture"
            onClick={responseFacebook}
            cssClass="facebook-btn"
            textButton="Facebook"
          />
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                // disabled={renderProps.disabled}
                variant="danger"
                className="google-btn mt-4"
                // href="https://localhost/signin-google"
              >
                Google
              </Button>
            )}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
          <span className="mt-4 d-block forget-password-text">
            Forgot password? Click <a href="/">Here</a>
          </span>
        </Col>
      </Row>
      <div className="bottom-line-separate-login"></div>
      <Register deviceModel={Device_Model} />
    </div>
  );
};
