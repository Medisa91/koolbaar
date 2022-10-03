import React from "react";
import { Row, Col } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

export const Footer: React.FC = () => {
  const size = UseWindowSize();

  return (
    <>
      <div className="main-footer">
        <div>
          <Row className="mt-5 mb-5">
            <Col lg={2} md={2} sm={0}></Col>
            <Col lg={4} md={4} sm={12}>
              <Row>
                <Col
                  lg={6}
                  md={6}
                  sm={12}
                  style={size.width >= 768 ? { maxWidth: 269 } : null}
                >
                  <div className="links-footer-wrapper">
                    <h3>Useful links</h3>
                    <ol>
                      <li>
                        <span className="bullet-icon" />
                        Our Vision & Mission
                      </li>
                      <li>
                        <span className="bullet-icon" />
                        Corporate Directory
                      </li>
                      <li>
                        <span className="bullet-icon" />
                        Board of Directors
                      </li>
                    </ol>
                  </div>
                </Col>
                <Col
                  lg={6}
                  md={6}
                  sm={12}
                  style={size.width >= 768 ? { maxWidth: 358 } : null}
                >
                  <div className="links-footer-wrapper">
                    <h3>About us</h3>
                    <ol>
                      <li>
                        <span className="bullet-icon" />
                        Retail industry
                      </li>
                      <li>
                        <span className="bullet-icon" />
                        Financing
                      </li>
                      <li>
                        <span className="bullet-icon" />
                        Merger, Acquisition, and Investment Management
                      </li>
                    </ol>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={4} sm={12} style={{ maxWidth: 315 }}>
              <div className="links-footer-wrapper">
                <h3>About Koolbaar</h3>
                <ol>
                  <li className="last-list-footer">
                    <span>Correspondence and Business Address</span>
                    Unit 2-1, Level 2, Tower 9, UOA Business Park, No 1, Jalan
                    Pengaturcara U1/51A, Seksyen U1, 40150 Shah Alam, Selangor,
                    Malaysia.
                  </li>
                </ol>
              </div>
            </Col>
            <Col lg={2} md={2} sm={0}></Col>
          </Row>
        </div>
      </div>
      <div className="main-footer-copyright">
        <Row>
          <Col lg={2} md={2} sm={0}></Col>
          <Col
            lg={4}
            md={4}
            sm={6}
            style={
              size.width < 768 ? { lineHeight: 1.71 } : { lineHeight: "80px" }
            }
          >
            <span>Copyright © 2020 ADV. All rights reserved.</span>
          </Col>
          <Col
            lg={4}
            md={4}
            sm={6}
            style={
              size.width < 768 ? { lineHeight: 1.71 } : { lineHeight: "80px" }
            }
          >
            <span>Term & Conditions</span>
            <span className="ml-3">Privacy Policy</span>
          </Col>
          <Col lg={2} md={2} sm={0}></Col>
        </Row>
      </div>
    </>
  );
};
