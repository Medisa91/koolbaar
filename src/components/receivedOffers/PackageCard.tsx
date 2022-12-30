import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import data from "json/receives.json";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { SkeletonGrid } from "components";
import { IOfferReceived, Option } from "models/interfaces";
import { Cards } from "./Cards";

interface IProps {
  display: Option;
  offerReceivedData: IOfferReceived[];
}

export const PackageCard: React.FC<IProps> = ({
  display,
  offerReceivedData,
}) => {
  const [loading, setLoading] = useState(true);
  const windowSize = UseWindowSize();
  const isMobile = windowSize.width < 768;

  useEffect(() => {
    if (offerReceivedData) setLoading(false);
  }, [offerReceivedData]);

  return (
    <>
      {isMobile ? (
        <div className="container-horizontal">
          {offerReceivedData.map((item, idx) => (
            <div className="offer-card-horizontal">
              <Cards key={idx} data={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-grow-1 request-info-wrapper mb-3">
          <Row>
            {loading ? (
              (data?.items ?? []).map((item) => (
                <Col key={item.name} lg={3} md={4} sm={12}>
                  <SkeletonGrid />
                </Col>
              ))
            ) : (
              <>
                {offerReceivedData?.map((item, idx) => (
                  <Cards key={idx} data={item} />
                ))}
              </>
            )}
          </Row>
        </div>
      )}
    </>
  );
};
