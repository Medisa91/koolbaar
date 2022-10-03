import React from "react";
import { Input, Button, Register } from "components";
import { Col, Row } from "react-bootstrap";

export const Login: React.FC = () => {
  return (
    <div className="login-slider-container">
      <Row className="login-wrapper">
        <Col className="login-form" xs={5}>
          <h1>Login</h1>
          <Input
            size="sm"
            id="email-input"
            placeholder="Email Address"
            className="custom-input-login"
          />
          <Input
            size="sm"
            id="password-input"
            placeholder="Password"
            className="custom-input-login mt-4"
          />
          <Button
            variant="primary"
            data-test="docs-btn-anchor"
            href="/"
            className="login-btn mt-4"
          >
            Login
          </Button>
        </Col>
        <Col xs={2} className="right-line-wrapper pr-1">
          <div className="right-line-separate-login">
            <span>OR</span>
          </div>
        </Col>
        <Col className="login-via-form pl-0" xs={5}>
          <h1>Login Via</h1>
          <Button
            variant="info"
            data-test="docs-btn-anchor"
            href="/"
            className="facebook-btn"
          >
            Facebook
          </Button>
          <Button
            variant="danger"
            data-test="docs-btn-anchor"
            href="/"
            className="google-btn mt-4"
          >
            Google
          </Button>
          <span className="mt-4 d-block">Forgot password? Click <a href="/">Here</a></span>
        </Col>
      </Row>
      <div className="bottom-line-separate-login"></div>
      <Register/>
    </div>
  );
};
