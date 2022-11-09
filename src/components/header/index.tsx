import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Logo, Button, Menu, RightSidebar } from "components";
import { UseWindowSize } from "../../components/windowSize/UseWindowSize";
import BellIcon from "../../assets/images/bell.png";
import AvatarImg from "../../assets/images/avatar.png";

export const Header: React.FC = () => {
  const size = UseWindowSize();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {size?.width < 768 ? (
        <Row className={`${isLogin ? "dashboard-header-wrapper" : "header-wrapper"} `}>
          <Logo />
          <Menu />
        </Row>
      ) : (
        <Row className={`${isLogin ? "dashboard-header-wrapper" : "header-wrapper"} `}>
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
                <span className="user-profile-avatar d-inline-block">
                  <img src={AvatarImg} alt="avatar-img" />
                </span>
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
