import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import data from "json/travelers.json";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { SkeletonGrid } from "components";
import { Option, ITraveler } from "models/interfaces";
import { Cards } from "./Cards";

interface IProps {
  type: Option;
  size: Option;
  deliveryType: Option;
  travelerData: ITraveler[];
}

export const PackageCard: React.FC<IProps> = ({
  type,
  size,
  deliveryType,
  travelerData,
}) => {
  const [loading, setLoading] = useState(true);
  const windowSize = UseWindowSize();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const getSizeRange = (size) => {
    if (size < 5) return "0KG - 5KG";
    else if (size >= 5 && size < 10) return "5KG - 10KG";
    else return "10KG - 20KG";
  };

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
              {/* {type.label !== "All"
                ? data?.items
                    ?.filter((filter) => filter.label === type.label)
                    ?.map((item, idx) => <Cards key={idx} data={item} />)
                : size.label !== "All"
                ? data?.items
                    ?.filter(
                      (filter) => getSizeRange(filter.size) === size.label
                    )
                    ?.map((item, idx) => <Cards key={idx} data={item} />)
                : data?.items?.map((item, idx) => (
                    <Cards key={idx} data={item} />
                  ))} */}
              {travelerData?.map((data, idx) => (
                <Cards key={idx} data={data} />
              ))}
            </>
          )}
        </Row>
      </div>
    </>
  );
};
