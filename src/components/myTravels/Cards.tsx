import React, { useState } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import { Button } from "components";
import PlaneIcon from "../../assets/images/plane.png";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import CertificateYellowIcon from "../../assets/images/svg/verified-yellow.svg";
import CertificateGreenIcon from "../../assets/images/svg/verified-green.svg";

interface IProps {
  data: {
    name: string;
    label: string;
    size: number;
  };
}

export const Cards: React.FC<IProps> = ({ data }) => {
  const [openProfileBox, setOpenProfileBox] = useState(false);

  const handleSelect = (show) => {
    setOpenProfileBox(show);
  };

  const windowSize = UseWindowSize();

  return (
    <Col
      key={data?.name}
      lg={3}
      md={4}
      sm={12}
      className={`${windowSize.width < 768 && "p-0"} mb-5`}
      style={windowSize.width < 768 ? { width: "318px" } : null}
      data-testid="container"
    >
      <Card className="traveler-package-card-wrapper">
        <Card.Header className="card-request-header">
          <Row>
            <Col xs={3} className="text-left header-card-titles">
              <div>
                <span className="text-left">CGK</span>
              </div>
              <div>
                <span className="text-left">15:15</span>
              </div>
            </Col>
            <Col xs={6} className="text-center header-card-plane px-1">
              <div>
                <span>05/05/2022</span>
              </div>
              <div>
                <span className="mb-0">
                  - - - -{" "}
                  <img
                    src={PlaneIcon}
                    className="card-request-icon"
                    alt="location-img"
                  />{" "}
                  - - - -
                </span>
              </div>
            </Col>
            <Col xs={3} className="header-card-titles">
              <div className="text-right">
                <span>DPS</span>
              </div>
              <div className="text-right">
                <span>17:15</span>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="card-request-body pt-3">
          <Row>
            <Col xs={7} className="request-body-info">
              <div>
                <span className="card-text">Max Size: 35*35*36</span>
              </div>
              <div>
                <span className="card-text">Max Item Value: 250$</span>
              </div>
              <div>
                <span className="card-text">Max Weight: {data?.size}KG</span>
              </div>
            </Col>
            <Col xs={5} className="request-body-package text-right">
              <Button
                variant="primary"
                data-test="docs-btn-anchor"
                href="/"
                className="request-amount"
              >
                Requests <span>10</span>
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="card-request-footer">
          <Button
            variant="gray7"
            data-test="docs-btn-anchor"
            className="remove-travel-btn"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button
            variant="gray7"
            data-test="docs-btn-anchor"
            className="edit-travel-btn"
          >
            Edit
          </Button>
          <Button
            variant="warning"
            data-test="docs-btn-anchor"
            className="view-request-btn"
          >
            View Requests
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};
