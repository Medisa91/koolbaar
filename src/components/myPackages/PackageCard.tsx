import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import data from "json/myPackges.json";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { SkeletonGrid } from "components";
import { Cards } from "./Cards";

export const PackageCard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const windowSize = UseWindowSize();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="flex-grow-1 request-info-wrapper mb-3">
        <Row
          style={
            windowSize.width < 768 ? { width: "318px", margin: "auto" } : null
          }
        >
          {loading ? (
            (data?.items ?? []).map((item) => (
              <Col key={item.name} lg={3} md={4} sm={12}>
                <SkeletonGrid />
              </Col>
            ))
          ) : (
            <>
              {data?.items?.map((item, idx) => (
                <Cards key={idx} data={item} />
              ))}
            </>
          )}
        </Row>
      </div>
    </>
  );
};
