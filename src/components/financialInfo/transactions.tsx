import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "layers";
import ShoppingBagImg from "../../assets/images/shopping-bag.png";
import HomeImg from "../../assets/images/home.png";
import CoinsImg from "../../assets/images/coins.png";
import GadgetImg from "../../assets/images/smartphone.png";

export const Transactions: React.FC = () => {
  return (
    <div className="transaction-wrapper">
      <h2>Transactions</h2>
      <div className="transaction-box">
        <Row>
          <Col xs={2} className="pr-0">
            <div className="icon-transaction-wrapper">
              <img src={ShoppingBagImg} alt="shopping-bag-img" />
            </div>
          </Col>
          <Col xs={10} className="pl-0">
            <Row>
              <Col xs={6} className="pl-0">
                <span className="transaction-name d-block">CA98589958</span>
                <span className="transaction-date">21 Mon 2022, 04:30 pm</span>
              </Col>
              <Col xs={6} className="transaction-amount-wrapper">
                <span>-$193.00</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="transaction-box">
        <Row>
          <Col xs={2} className="pr-0">
            <div className="icon-transaction-wrapper">
              <img src={HomeImg} alt="shopping-bag-img" />
            </div>
          </Col>
          <Col xs={10} className="pl-0">
            <Row>
              <Col xs={6} className="pl-0">
                <span className="transaction-name d-block">CA98589958</span>
                <span className="transaction-date">20 Sun 2022, 12:00 am</span>
              </Col>
              <Col xs={6} className="transaction-amount-wrapper">
                <span>-$324.00</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="transaction-box">
        <Row>
          <Col xs={2} className="pr-0">
            <div className="icon-transaction-wrapper">
              <img src={GadgetImg} alt="shopping-bag-img" />
            </div>
          </Col>
          <Col xs={10} className="pl-0">
            <Row>
              <Col xs={6} className="pl-0">
                <span className="transaction-name d-block">CA98589958</span>
                <span className="transaction-date">20 Sat 2022, 02:00 pm</span>
              </Col>
              <Col xs={6} className="transaction-amount-wrapper">
                <span>-$421.00</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="transaction-box">
        <Row>
          <Col xs={2} className="pr-0">
            <div className="icon-transaction-wrapper">
              <img src={CoinsImg} alt="shopping-bag-img" />
            </div>
          </Col>
          <Col xs={10} className="pl-0">
            <Row>
              <Col xs={6} className="pl-0">
                <span className="transaction-name d-block">CA98589958</span>
                <span className="transaction-date">19 Fri 2022, 11:10 am</span>
              </Col>
              <Col xs={6} className="transaction-amount-wrapper">
                <span>-$500.00</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="transaction-box">
        <Row>
          <Col xs={2} className="pr-0">
            <div className="icon-transaction-wrapper">
              <img src={CoinsImg} alt="shopping-bag-img" />
            </div>
          </Col>
          <Col xs={10} className="pl-0">
            <Row>
              <Col xs={6} className="pl-0">
                <span className="transaction-name d-block">CA98589958</span>
                <span className="transaction-date">19 Fri 2022, 11:10 am</span>
              </Col>
              <Col xs={6} className="transaction-amount-wrapper">
                <span>-$500.00</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Button className="load-more-btn">
        Load More
      </Button>
    </div>
  );
};
