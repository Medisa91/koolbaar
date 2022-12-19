import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "layers";
import { ITransaction } from "models/interfaces";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

interface IProps {
  transactions: ITransaction[];
}

export const Transactions: React.FC<IProps> = ({ transactions }) => {
  const size = UseWindowSize();
  const isMobile = size.width < 768;

  return (
    <>
      {transactions && (
        <div className="transaction-wrapper">
          <h2>Transactions</h2>
          {transactions?.map((item, index) => {
            return (
              <div key={index} className="transaction-box">
                <Row>
                  <Col xs={isMobile ? 3 : 2} className="pr-0">
                    <div className="icon-transaction-wrapper">
                      <img src={item?.imageUrl} alt="shopping-bag-img" />
                    </div>
                  </Col>
                  <Col xs={isMobile ? 9 : 10} className="pl-0">
                    <Row>
                      <Col xs={isMobile ? 7 : 6} className="pl-0">
                        <span className="transaction-name d-block">
                          {item?.number}
                        </span>
                        <span className="transaction-date">
                          {item?.insertTime}
                        </span>
                      </Col>
                      <Col
                        xs={isMobile ? 5 : 6}
                        className="transaction-amount-wrapper"
                      >
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
