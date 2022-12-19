import React, { useState, useEffect } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { RightSidebar } from "components";
import { Logo, Button, Menu } from "layers";
import { UseWindowSize } from "../../components/windowSize/UseWindowSize";
import BellIcon from "../../assets/images/bell.png";
import { logoutUser } from "redux/actions/Authorization";
import { useAppDispatch, useAppSelector } from "redux/store";
import { showLoginResult } from "redux/slices/Authorization/login";
import { showLogoutResult } from "redux/slices/Authorization/logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faDashboard, faUser } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const size = UseWindowSize();
  const dispatch = useAppDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(
    window.localStorage.getItem("token") === "undefined" ||
      window.localStorage.getItem("token") === null
      ? false
      : true
  );
  const loginData = useAppSelector(showLoginResult);
  const logoutData = useAppSelector(showLogoutResult);
  const AvatarImg = window.localStorage.getItem("avatar")
    ? window.localStorage.getItem("avatar")
    : null;

  const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    console.log(i18n.dir(lang));
    window.location.reload();
  };

  const handleLoginSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    setShowSidebar(false);
    if (loginData?.data[0]?.isSuccess === true) {
      setIsLogin(true);
    }
  }, [loginData]);

  const logoutBtn = () => {
    const data = {
      accessToken: window.localStorage.getItem("token"),
      refreshToken: window.localStorage.getItem("refreshToken"),
    };
    dispatch(logoutUser(data));
  };

  useEffect(() => {
    if (logoutData.data?.length !== 0) {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("expire");
      window.localStorage.removeItem("refreshToken");
      window.localStorage.removeItem("tokenType");
      setIsLogin(false);
      const win: Window = window;
      win.location = "/";
    }
  }, [logoutData]);

  return (
    <>
      {/* <h2>{t("hello")}</h2>
      <div>
        <button onClick={() => changeLanguage("fa")}>fa Persian</button>
        <button onClick={() => changeLanguage("en")}>🇺🇸 English</button>
      </div> */}

      {size?.width < 768 ? (
        <Row
          style={
            window.location.pathname === "/dashboard" ||
            window.location.pathname === "/profile"
              ? { background: "#00043d" }
              : { background: "transparent" }
          }
          className={`${
            isLogin ? "dashboard-header-wrapper" : "header-wrapper"
          }`}
        >
          <Col xs={5}>
            <Logo />
          </Col>
          <Col xs={7}>
            <Menu />
          </Col>
        </Row>
      ) : (
        <Row
          style={
            window.location.pathname === "/dashboard" ||
            window.location.pathname === "/profile"
              ? { background: "#00043d" }
              : { background: "transparent" }
          }
          className={`${
            isLogin ? "dashboard-header-wrapper" : "header-wrapper"
          } `}
        >
          <Col className="text-right">
            <Logo />
          </Col>
          <Col xs={6}>
            <Menu />
          </Col>
          <Col className="text-left">
            {isLogin ? (
              <div>
                <span className="d-inline-block">
                  <img
                    src={BellIcon}
                    className="bell-request-icon"
                    alt="bell-img"
                  />
                  <span className="notification-count">1</span>
                </span>
                <Dropdown
                  className="profile-dropdown d-inline ml-1 header-profile-dropdown"
                  // onToggle={handleSelect}
                >
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-basic"
                    className="px-0 mx-0"
                  >
                    <span
                      className={`${
                        AvatarImg === "null" && "pt-3"
                      } user-profile-avatar d-inline-block`}
                    >
                      {AvatarImg !== "null" ? (
                        <img src={AvatarImg} alt="avatar-img" />
                      ) : (
                        <span>No Image</span>
                      )}
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/profile">
                      <FontAwesomeIcon icon={faUser} />
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item className="mt-2" href="/dashboard">
                      <FontAwesomeIcon icon={faDashboard} />
                      Dashboard
                    </Dropdown.Item>

                    <Dropdown.Item className="mt-2" onClick={logoutBtn}>
                      <FontAwesomeIcon icon={faLock} />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <Button
                variant="warning"
                data-test="docs-btn-anchor"
                href="#"
                className="login-header-btn"
                onClick={handleLoginSidebar}
              >
                Login/Sign Up
              </Button>
            )}
          </Col>
        </Row>
      )}
      {showSidebar && (
        <RightSidebar
          isOpen={showSidebar}
          setIsOpen={setShowSidebar}
          setIsLogin={setIsLogin}
          sidebarType="login"
        />
      )}
    </>
  );
};
