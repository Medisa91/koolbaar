import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import data from "json/travelers.json";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { SkeletonGrid } from "components";
import { Option, ITraveler } from "models/interfaces";
import { Cards } from "./Cards";

interface IProps {
  isEmpty: boolean;
  isLoading: boolean;
  travelerData: ITraveler[];
}

export const PackageCard: React.FC<IProps> = ({
  travelerData,
  isEmpty,
  isLoading,
}) => {
  const windowSize = UseWindowSize();

  return (
    <>
      <div className="flex-grow-1 request-info-wrapper mb-3">
        <Row
          style={
            windowSize.width < 768 ? { width: "318px", margin: "auto" } : null
          }
        >
          {isLoading ? (
            (data?.items ?? []).map((item) => (
              <Col key={item.name} lg={3} md={4} sm={12}>
                <SkeletonGrid />
              </Col>
            ))
          ) : (
            <>
              {!isEmpty ? (
                travelerData?.map((data, idx) => <Cards key={idx} data={data} />)
              ) : (
                <span style={{ margin: "auto", fontSize: 20, fontWeight: 600 }}>
                  No Data
                </span>
              )}
            </>
          )}
        </Row>
      </div>
    </>
  );
};
