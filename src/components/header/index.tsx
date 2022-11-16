import React, { useState, useEffect } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { Logo, Button, Menu, RightSidebar } from "components";
import { UseWindowSize } from "../../components/windowSize/UseWindowSize";
import BellIcon from "../../assets/images/bell.png";
import AvatarImg from "../../assets/images/avatar.png";
import { logoutUser } from "redux/actions/Authorization";
import { useAppDispatch, useAppSelector } from "redux/store";
import { showLoginResult } from "redux/slices/Authorization/login";
import { showLogoutResult } from "redux/slices/Authorization/logout";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faDashboard, faUser } from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = () => {
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
    }
  }, [logoutData]);

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
          } `}
        >
          <Logo />
          <Menu />
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
                    <span className="user-profile-avatar d-inline-block">
                      <img src={AvatarImg} alt="avatar-img" />
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
          sidebarType="login"
        />
      )}
    </>
  );
};
