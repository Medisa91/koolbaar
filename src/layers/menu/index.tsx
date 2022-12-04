/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { UseWindowSize } from "../../components/windowSize/UseWindowSize";
import { RightSidebar } from "components";

export const Menu: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const size = UseWindowSize();
  const [isToggle, setIsToggle] = useState(size?.width < 768);

  const handleToggle = (e) => {
    setIsToggle(!isToggle);
  };

  const handleLoginSidebar = () => {
    setShowSidebar(true);
  }

  return (
    <>
      {size?.width < 768 ? (
        <>
          <Navbar collapseOnSelect expand="lg" className="ml-auto">
            <a onClick={handleLoginSidebar} className="user-btn">
              <FontAwesomeIcon icon={faUser} />
            </a>
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
        <RightSidebar isOpen={showSidebar} setIsOpen={setShowSidebar} sidebarType="login" />
      )}
    </>
  );
};
