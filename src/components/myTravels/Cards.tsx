import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Button } from "layers";
import PlaneIcon from "../../assets/images/plane.png";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { IMyTraveler } from "models/interfaces";
import { RightSidebar } from "layers";
import { getTravel, deleteUserTravel } from "redux/actions/dashboard";
import { useAppDispatch } from "redux/store";
import { RemoveConfirmation } from "components/modals/RemoveConfirmation";

interface IProps {
  data: IMyTraveler;
}

export const Cards: React.FC<IProps> = ({ data }) => {
  const windowSize = UseWindowSize();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [removeConfirmed, setRemoveConfirmed] = useState(false);
  const [trvId, setTrvId] = useState("");
  const dispatch = useAppDispatch();

  const openEditTravel = (id) => {
    setShowSidebar(!showSidebar);
    dispatch(getTravel(id));
    setTrvId(id);
  };

  const removeTravelOpenModal = (id) => {
    setIsOpenModal(!isOpenModal);
    setTrvId(id);
  };

  useEffect(() => {
    if (removeConfirmed) dispatch(deleteUserTravel(trvId));
  }, [removeConfirmed]);

  return (
    <Col
      key={data?.owner}
      lg={3}
      md={4}
      sm={12}
      className={`${windowSize.width < 768 ? "p-0 mb-1" : "mb-5"} `}
      style={
        windowSize.width < 768 ? { width: "318px", marginRight: "13px" } : null
      }
      data-testid="container"
    >
      <Card className="traveler-package-card-wrapper">
        <Card.Header className="card-request-header">
          <Row>
            <Col xs={3} className="text-left header-card-titles">
              <div>
                <span className="text-left">{data?.fromCountryAbbr}</span>
              </div>
              <div>
                <span className="text-left">{data?.fromTime1}</span>
              </div>
            </Col>
            <Col xs={6} className="text-center header-card-plane px-1">
              <div>
                <span>{data?.fromDate1}</span>
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
                <span>{data?.toCountryAbbr}</span>
              </div>
              <div className="text-right">
                <span>{data?.fromTime2}</span>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="card-request-body pt-3">
          <Row>
            <Col xs={7} className="request-body-info">
              <div>
                <span className="card-text">Max Size: {data?.size}</span>
              </div>
              <div>
                <span className="card-text">
                  Max Item Value: {data?.itemValue}
                </span>
              </div>
              <div>
                <span className="card-text">Max Weight: {data?.weight}</span>
              </div>
            </Col>
            <Col xs={5} className="request-body-package text-right">
              <Button
                variant="primary"
                data-test="docs-btn-anchor"
                className="request-amount"
              >
                Requests <span>{data?.requests}</span>
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="card-request-footer">
          <Button
            variant="gray7"
            onClick={() => removeTravelOpenModal(data.trvId)}
            className="remove-travel-btn"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button
            variant="gray7"
            onClick={() => openEditTravel(data.trvId)}
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
        {showSidebar && (
          <div className="offer-sidebar">
            <RightSidebar
              isOpen={showSidebar}
              setIsOpen={setShowSidebar}
              sidebarType="travel"
              mode="edit"
              trvId={trvId}
            />
          </div>
        )}
        {isOpenModal && (
          <RemoveConfirmation
            title="Remove My Travel"
            description="Are you sure you want to delete this item?"
            isOpen={isOpenModal}
            setIsOpen={setIsOpenModal}
            setRemoveConfirmed={setRemoveConfirmed}
            type="travel"
          />
        )}
      </Card>
    </Col>
  );
};
