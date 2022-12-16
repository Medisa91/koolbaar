/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faLock,
  faDashboard,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { UseWindowSize } from "../../components/windowSize/UseWindowSize";
import { RightSidebar } from "components";
import BellIcon from "../../assets/images/bell.png";
import { Dropdown } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "redux/store";
import { logoutUser } from "redux/actions/Authorization";
import { Button } from "layers";
import { showLoginResult } from "redux/slices/Authorization/login";
import { showLogoutResult } from "redux/slices/Authorization/logout";

export const Menu: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const size = UseWindowSize();
  const dispatch = useAppDispatch();
  const loginData = useAppSelector(showLoginResult);
  const logoutData = useAppSelector(showLogoutResult);

  const [isToggle, setIsToggle] = useState(size?.width < 768);
  const [isLogin, setIsLogin] = useState(
    window.localStorage.getItem("token") === "undefined" ||
      window.localStorage.getItem("token") === null
      ? false
      : true
  );
  const AvatarImg = window.localStorage.getItem("avatar")
    ? window.localStorage.getItem("avatar")
    : null;

  const handleToggle = (e) => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    setShowSidebar(false);
    if (loginData?.data[0]?.isSuccess === true) {
      setIsLogin(true);
    }
  }, [loginData]);

  const handleLoginSidebar = () => {
    setShowSidebar(true);
  };

  const logoutBtn = () => {
    const data = {
      accessToken: window.localStorage.getItem("token"),
      refreshToken: window.localStorage.getItem("refreshToken"),
    };
    dispatch(logoutUser(data));
  };

  return (
    <>
      {size?.width < 768 ? (
        <>
          <Navbar collapseOnSelect expand="lg" className="ml-auto">
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
                  className="profile-dropdown d-inline ml-1 responsive-header-profile-dropdown"
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
                        <FontAwesomeIcon icon={faUser} />
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
            <a onClick={handleToggle} className="toggle-btn">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </Navbar>
          {isToggle ? (
            <Nav className="header-nav-wrapper" defaultActiveKey="/" as="ul">
              <Nav.Item as="li">
                <Nav.Link eventKey="1" as={Link} to="/Home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="2" as={Link} to="/Contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="3" as={Link} to="/More">
                  More <FontAwesomeIcon icon={faChevronDown} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          ) : null}
        </>
      ) : (
        <Navbar collapseOnSelect expand="lg">
          <Nav className="header-nav-wrapper" defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
              <Nav.Link eventKey="1" as={Link} to="/Home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="2" as={Link} to="/Contant">
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="3" as={Link} to="/More">
                More <FontAwesomeIcon icon={faChevronDown} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
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
