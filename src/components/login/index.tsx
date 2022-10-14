import React from "react";
import { Input, Button, Register } from "components";
import { Col, Row } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";

const clientId = "165924336796-1o4rjbggsh4ph9qu8m5qnauvsn5ge2rn.apps.googleusercontent.com"

export const Login: React.FC = () => {

const onSuccess = (res) => {
  console.log("[Login Success] currentUser:", res.profileObj);
}

const onFailure = (res) => {
  console.log("[Login Failed] res:", res);
}

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
          <Button variant="info" className="facebook-btn">
            Facebook
          </Button>
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
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
          <span className="mt-4 d-block">
            Forgot password? Click <a href="/">Here</a>
          </span>
        </Col>
      </Row>
      <div className="bottom-line-separate-login"></div>
      <Register />
    </div>
  );
};
