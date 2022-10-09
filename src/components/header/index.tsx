import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Logo, Button, Menu , RightSidebar } from "components";
import { UseWindowSize } from "../../components/windowSize/UseWindowSize";

export const Header: React.FC = () => {
  const size = UseWindowSize();
  const [showSidebar, setShowSidebar] = useState(false)

  const handleLoginSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      {size?.width < 768 ? (
        <Row className="header-wrapper">
          <Logo />
          <Menu />
        </Row>
      ) : (
        <Row className="header-wrapper">
          <Col className="text-right">
            <Logo />
          </Col>
          <Col xs={6}>
            <Menu />
          </Col>
          <Col className="text-left">
            <Button
              variant="warning"
              data-test="docs-btn-anchor"
              href="#"
              className="login-header-btn"
              onClick={handleLoginSidebar}
            >
              Login/Sign Up
            </Button>
          </Col>
        </Row>
      )}
      {showSidebar && (
        <RightSidebar isOpen={showSidebar} setIsOpen={setShowSidebar} sidebarType="login" />
      )}
    </>
  );
};
