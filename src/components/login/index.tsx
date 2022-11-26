import React, { useState, useEffect } from "react";
import { Input, Button } from "layers";
import { Register } from "components";
import { Col, Row } from "react-bootstrap";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { loginUser, externalLoginUser } from "redux/actions/Authorization";
import { ILogin, IExternalLogin } from "models/interfaces";
import {
  osVersion,
  osName,
  browserName,
  browserVersion,
} from "react-device-detect";
import { useAppDispatch, useAppSelector } from "redux/store";
import { showLoginResult } from "redux/slices/Authorization/login";

const clientId =
  "165924336796-1o4rjbggsh4ph9qu8m5qnauvsn5ge2rn.apps.googleusercontent.com";

export const Login: React.FC = () => {
  const size = UseWindowSize();
  const dispatch = useAppDispatch();
  const data = useAppSelector(showLoginResult);
  const [isLoading, setIsLoading] = useState(false);
  const [deviceModel, setDeviceModel] = useState("");
  const checkTokenData = useAppSelector((state) => state.checkToken);
  const [loginData, setLoginData] = useState<ILogin>({
    grantType: "password",
    username: "",
    password: "",
    clientId: "517D58DC-95A5-4732-B182-2188A9853CF5",
    clientSecret: "QVWglh6wamKIEyI8kdSlWsD/gNTUpYKdC4GjTw/zFibEcBWH5Djoyw==",
    deviceModel: "",
    deviceId: "",
    playerId: "",
  });
  useEffect(() => {
    setDeviceModel(`${browserName}-${browserVersion}(${osName}${osVersion})`);
  }, []);

  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    const data: IExternalLogin = {
      provider: "google",
      accessToken: "",
      email: "",
      deviceModel,
      deviceId: "",
      playerId: "",
    };
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  const responseFacebook = (response) => {
    const data: IExternalLogin = {
      provider: response?.graphDomain,
      accessToken: response?.accessToken,
      email: response?.email,
      deviceModel,
      deviceId: "",
      playerId: "",
    };
    dispatch(externalLoginUser(data));
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
      deviceModel,
    };

    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (data?.data?.length !== 0) {
      window.localStorage.setItem("token", data?.data[0]?.data?.accessToken);
      window.localStorage.setItem("avatar", data?.data[0]?.data?.personalPhoto);
      window.localStorage.setItem("expire", data?.data[0]?.data?.expiresIn);
      window.localStorage.setItem(
        "refreshToken",
        data?.data[0]?.data?.refreshToken
      );
      window.localStorage.setItem("tokenType", data?.data[0]?.data?.tokenType);
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (checkTokenData?.data?.length !== 0) {
      if (
        checkTokenData?.data[0]?.data?.isRegistered === false &&
        checkTokenData?.data[0]?.data?.isValid === false
      ) {
        toast.error("The entered information is incorrect");
      }
      //   window.localStorage.setItem(
      //     "token",
      //     checkTokenData?.data[0]?.data?.accessToken
      //   );
      // window.localStorage.setItem(
      //   "avatar",
      //   checkTokenData?.data[0]?.data?.personalPhoto
      // );
      // window.localStorage.setItem(
      //   "expire",
      //   checkTokenData?.data[0]?.data?.expiresIn
      // );
      // window.localStorage.setItem(
      //   "refreshToken",
      //   checkTokenData?.data[0]?.data?.refreshToken
      // );
      // window.localStorage.setItem(
      //   "tokenType",
      //   checkTokenData?.data[0]?.data?.tokenType
      // );
      setIsLoading(false);
    }
  }, [checkTokenData]);

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
            callback={responseFacebook}
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
      <Register deviceModel={deviceModel} />
    </div>
  );
};
