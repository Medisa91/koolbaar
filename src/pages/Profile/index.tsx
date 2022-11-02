import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import { Header, PersonalInfo, FinancialInfo, Footer } from "components";

export const Profile: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="title-dashboard">
        <h2>My Account</h2>
      </div>
      <div className="flex-grow-1 request-info-wrapper mb-3">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <PersonalInfo />
          </Col>
          <Col lg={6} md={6} sm={12} className="pl-5">
            <FinancialInfo />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};
