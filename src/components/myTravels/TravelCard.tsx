import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import data from "json/myTravels.json";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { SkeletonGrid } from "components";
import { Cards } from "./Cards";
import { IMyTraveler } from "models/interfaces";

interface IProps {
  travelerData: IMyTraveler[];
}

export const TravelCard: React.FC<IProps> = ({ travelerData }) => {
  const [loading, setLoading] = useState(true);
  const windowSize = UseWindowSize();
  const isMobile = windowSize.width < 768;

  useEffect(() => {
    if (travelerData) setLoading(false);
  }, [travelerData]);

  return (
    <>
      {isMobile ? (
        <div className="container-horizontal">
          {travelerData.map((item, idx) => (
            <div className="traveler-card-horizontal">
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
                {travelerData?.map((item, idx) => (
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
