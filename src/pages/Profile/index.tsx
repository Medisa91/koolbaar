import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Header, Footer } from "layers";
import { PersonalInfo, FinancialInfo } from "components";
import { useAppDispatch, useAppSelector } from "redux/store";
import { getUserInfo } from "redux/actions/Authorization";

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(
    (state) => state?.userInfo?.data && state?.userInfo?.data[0]?.data
  );

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="title-dashboard">
        <h2>My Account</h2>
      </div>
      <div className="flex-grow-1 request-info-wrapper mb-3">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <PersonalInfo userData={userData} />
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
