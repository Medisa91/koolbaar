import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Button } from "layers";
import PlaneIcon from "../../assets/images/plane.png";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { IMyPackages } from "models/interfaces";
import { RightSidebar } from "layers";
import { getPackage, deleteUserPackage } from "redux/actions/dashboard";
import { useAppDispatch } from "redux/store";
import { RemoveConfirmation } from "components/modals/RemoveConfirmation";

interface IProps {
  data: IMyPackages;
}

export const Cards: React.FC<IProps> = ({ data }) => {
  const windowSize = UseWindowSize();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [removeConfirmed, setRemoveConfirmed] = useState(false);
  const [pkgId, setPkgId] = useState("");
  const dispatch = useAppDispatch();

  const openEditTravel = (id) => {
    setShowSidebar(!showSidebar);
    dispatch(getPackage(id));
    setPkgId(id);
  };

  const removeTravelOpenModal = (id) => {
    setIsOpenModal(!isOpenModal);
    setPkgId(id);
  };

  useEffect(() => {
    if (removeConfirmed) dispatch(deleteUserPackage(pkgId));
  }, [removeConfirmed]);

  return (
    <Col
      key={data?.owner}
      lg={3}
      md={4}
      sm={12}
      className={`${windowSize.width < 768 && "p-0"} mb-5`}
      style={windowSize.width < 768 ? { width: "318px" } : null}
      data-testid="container"
    >
      <Card className="my-package-card-wrapper">
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
                <span>{data?.packagetype}</span>
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
                <span>{data?.toTime1}</span>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="card-request-body pt-3">
          <Row>
            <Col xs={12} className="request-body-info">
              <div className="size-received-container">
                <span className="card-text">Size: {data?.size}</span>
                <span className="card-text ml-3">Weight: {data?.weight}</span>
              </div>
              <div>
                <span className="card-text">Item Value: {data?.itemValue}</span>
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={8} className="myPackages-body-card text-left">
              <div>
                <span className="card-text">Shipping Deadline:</span>
              </div>
              <div>
                <span className="card-text">{data?.shippingDeadline}</span>
              </div>
            </Col>
            <Col xs={4} className="myPackages-body-card text-right">
              <Button
                variant="primary"
                data-test="docs-btn-anchor"
                href="/"
                className="offer-my-package-btn"
              >
                Offers {data?.offers}
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="card-request-footer">
          <Button
            variant="gray7"
            onClick={() => removeTravelOpenModal(data.pkgId)}
            className="remove-travel-btn"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button
            variant="gray7"
            onClick={() => openEditTravel(data.pkgId)}
            className="edit-travel-btn"
          >
            Edit
          </Button>
          <Button
            variant="warning"
            data-test="docs-btn-anchor"
            className="view-request-btn"
          >
            View Offers
          </Button>
        </Card.Footer>
        {showSidebar && (
          <div className="offer-sidebar">
            <RightSidebar
              isOpen={showSidebar}
              setIsOpen={setShowSidebar}
              sidebarType="package"
              mode="edit"
              pkgId={pkgId}
            />
          </div>
        )}
        {isOpenModal && (
          <RemoveConfirmation
            title="Remove My Package"
            description="Are you sure you want to delete this item?"
            isOpen={isOpenModal}
            setIsOpen={setIsOpenModal}
            setRemoveConfirmed={setRemoveConfirmed}
            type="package"
          />
        )}
      </Card>
    </Col>
  );
};
