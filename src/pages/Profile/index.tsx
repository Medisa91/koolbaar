import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Header, Footer, Button } from "layers";
import { PersonalInfo, FinancialInfo } from "components";
import { useAppDispatch, useAppSelector } from "redux/store";
import { getUserInfo } from "redux/actions/Authorization";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const size = UseWindowSize();
  const [isPersonal, setIsPersonal] = useState(true);
  const [isFinancial, setIsFinancial] = useState(false);
  const userData = useAppSelector(
    (state) => state?.userInfo?.data && state?.userInfo?.data[0]?.data
  );

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const showPersonalTab = () => {
    setIsPersonal(true);
    setIsFinancial(false);
  };
  const showFinancialTab = () => {
    setIsPersonal(false);
    setIsFinancial(true);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="title-dashboard">
        <h2>My Account</h2>
      </div>
      <div className="flex-grow-1 request-info-wrapper mb-3">
        {size.width < 768 && (
          <>
            <Button
              className={`${
                isPersonal ? "active-profile-btn" : "inactive-profile-btn"
              }`}
              onClick={showPersonalTab}
            >
              Personal
            </Button>
            <Button
              className={`${
                isFinancial ? "active-profile-btn" : "inactive-profile-btn"
              }`}
              onClick={showFinancialTab}
            >
              Financial
            </Button>
          </>
        )}
        {size?.width < 768 ? (
          <Row>
            {isPersonal && (
              <Col xs={12} className="p-0">
                <PersonalInfo userData={userData} />
              </Col>
            )}
            {isFinancial && (
              <Col xs={12} className="p-0">
                <FinancialInfo userData={userData} />
              </Col>
            )}
          </Row>
        ) : (
          <Row>
            <Col lg={6} md={6} sm={12}>
              <PersonalInfo userData={userData} />
            </Col>
            <Col lg={6} md={6} sm={12} className="pl-5">
              <FinancialInfo userData={userData} />
            </Col>
          </Row>
        )}
      </div>
      <Footer />
    </div>
  );
};
