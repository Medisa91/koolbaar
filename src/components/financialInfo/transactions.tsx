import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "layers";
import { ITransaction } from "models/interfaces";

interface IProps {
  transactions: ITransaction[];
}

export const Transactions: React.FC<IProps> = ({ transactions }) => {
  return (
    <>
      {transactions && (
        <div className="transaction-wrapper">
          <h2>Transactions</h2>
          {transactions?.map((item, index) => {
            return (
              <div key={index} className="transaction-box">
                <Row>
                  <Col xs={2} className="pr-0">
                    <div className="icon-transaction-wrapper">
                      <img src={item?.imageUrl} alt="shopping-bag-img" />
                    </div>
                  </Col>
                  <Col xs={10} className="pl-0">
                    <Row>
                      <Col xs={6} className="pl-0">
                        <span className="transaction-name d-block">
                          {item?.number}
                        </span>
                        <span className="transaction-date">
                          {item?.insertTime}
                        </span>
                      </Col>
                      <Col xs={6} className="transaction-amount-wrapper">
                        <span>-${item?.amount}</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            );
          })}
          <Button className="load-more-btn">Load More</Button>
        </div>
      )}
    </>
  );
};
