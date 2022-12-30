import React, { useState, useEffect } from "react";
import { Input, Button } from "layers";
import { Register } from "components";
import { Col, Row } from "react-bootstrap";
import { Oval } from "react-loader-spinner";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { gapi } from "gapi-script";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { loginUser, externalLoginUser } from "redux/actions/authorization";
import { ILogin, IExternalLogin } from "models/interfaces";
import { useTranslation } from "react-i18next";
import {
  osVersion,
  osName,
  browserName,
  browserVersion,
} from "react-device-detect";
import { useAppDispatch, useAppSelector } from "redux/store";
import { showLoginResult } from "redux/slices/authorization/login";

const clientId =
  "165924336796-1o4rjbggsh4ph9qu8m5qnauvsn5ge2rn.apps.googleusercontent.com";

interface IProp {
  setIsOpen: Function;
  setIsLogin: Function;
}

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => any;
  }
}

export const Login: React.FC<IProp> = ({ setIsOpen, setIsLogin }) => {
  const size = UseWindowSize();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const data = useAppSelector(showLoginResult);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [googleAccessToken, setGoogleAccessToken] = useState("");
  const [facebookAccessToken, setFacebookAccessToken] = useState("");
  const [deviceModel, setDeviceModel] = useState("");
  const [thirdPartyResponse, setThirdPartyResponse] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
    email: "",
  });
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

  const onLoginClick = () => {
    window.FB.login(
      function (res) {
        if (res.authResponse) {
          setFacebookAccessToken(res.authResponse.accessToken);

          window.FB.api(
            "/me",
            { fields: "name, email, picture" },
            function (response) {
              const name = response.name.split(" ");
              setThirdPartyResponse({
                email: response.email,
                firstName: name[0],
                lastName: name[1],
                avatar: response.picture.data.url,
              });
              const data: IExternalLogin = {
                provider: res?.authResponse?.graphDomain,
                accessToken: res.authResponse.accessToken,
                email: response?.email,
                deviceModel,
                deviceId: "",
                playerId: "",
              };
              dispatch(externalLoginUser(data));
            }
          );
        }
      },
      { scope: "email" }
    );
  };

  const loadAsyncInit = () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: "598976655336817",
        autoLogAppEvents: true,
        xfbml: false,
        status: true,
        cookie: true,
        version: "v15.0",
      });
      window.FB.getLoginStatus(function (response) {
        console.log("FB.getLoginStatus", response);
        if (response.status === "connected") {
          setFacebookAccessToken(response.authResponse.accessToken);
        }
      });
    };
  };

  gapi.load("client:auth2", () => {
    gapi.auth2
      .init({
        clientId: clientId,
      })
      .then((res) => {
        setGoogleAccessToken(
          res.currentUser.get().getAuthResponse(true).access_token
        );
      });
  });

  const onSuccess = (res) => {
    setThirdPartyResponse({
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      avatar: res.profileObj.imageUrl,
      email: res.profileObj.email,
    });
    const data: IExternalLogin = {
      provider: "google",
      accessToken: googleAccessToken,
      email: res.profileObj.email,
      deviceModel,
      deviceId: "",
      playerId: "",
    };
    dispatch(externalLoginUser(data));
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  const responseFacebook = (response) => {
    loadAsyncInit();
    // const data: IExternalLogin = {
    //   provider: response?.graphDomain,
    //   accessToken: facebookAccessToken,
    //   email: response?.email,
    //   deviceModel,
    //   deviceId: "",
    //   playerId: "",
    // };
    // dispatch(externalLoginUser(data));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const login = () => {
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
    if (checkTokenData?.data?.accessToken) {
      window.localStorage.setItem("token", checkTokenData?.data?.accessToken);
      window.localStorage.setItem(
        "avatar",
        checkTokenData?.data?.personalPhoto
      );
      window.localStorage.setItem("expire", checkTokenData?.data?.expiresIn);
      window.localStorage.setItem(
        "refreshToken",
        data?.data[0]?.data?.refreshToken
      );
      window.localStorage.setItem("tokenType", checkTokenData?.data?.tokenType);
      setIsLoading(false);
      setIsOpen(false);
      setIsLogin(true);
    }
    if (checkTokenData?.data?.isValid && !checkTokenData?.data?.isRegistered) {
      setShowLoginForm(false);
    }
  }, [checkTokenData]);

  return (
    <div className="login-slider-container">
      {showLoginForm && (
        <Row className="login-wrapper">
          <Col className="login-form" lg={5} md={5} xs={12}>
            <h1>{t("login")}</h1>
            <Input
              size="sm"
              id="email-input"
              placeholder={t("emailAddress")}
              className="custom-input-login"
              name="username"
              value={loginData.username}
              onChange={handleChange}
            />
            <Input
              size="sm"
              id="password-input"
              placeholder={t("password")}
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
              onClick={login}
            >
              {t("login")}
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
                <span>{t("or")}</span>
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
            <h1>{t("SigninWith")}</h1>
            <FacebookLogin
              appId="598976655336817"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="facebook-btn"
              textButton="Facebook"
              onClick={onLoginClick}
            />
            {/* <button onClick={onLoginClick}>facebook</button> */}
            <GoogleLogin
              clientId={clientId}
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="danger"
                  className="google-btn mt-4"
                >
                  {t("google")}
                </Button>
              )}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
            <span className="mt-4 d-block forget-password-text">
              {t("forgotPassword")} {t("click")} <a href="/">{t("here")}</a>
            </span>
          </Col>
        </Row>
      )}

      <div className="bottom-line-separate-login"></div>
      <Register
        deviceModel={deviceModel}
        thirdPartyResponse={thirdPartyResponse}
        setIsOpen={setIsOpen}
        setIsLogin={setIsLogin}
      />
    </div>
  );
};
