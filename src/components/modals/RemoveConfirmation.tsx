import React, { useState, useEffect } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Button } from "layers";
import { useAppDispatch, useAppSelector } from "redux/store";
import { getAllDashboardData } from "redux/actions/dashboard";
import { Oval } from "react-loader-spinner";

interface IProps {
  isOpen: boolean;
  setIsOpen: (key: any) => void;
  setRemoveConfirmed: (key: any) => void;
  title: string;
  description: string;
  type: string;
}

export const RemoveConfirmation: React.FC<IProps> = ({
  setRemoveConfirmed,
  isOpen,
  setIsOpen,
  title,
  description,
  type,
}) => {
  const screenSize = UseWindowSize();
  const dispatch = useAppDispatch();
  const handleClose = () => setIsOpen(false);
  const deletedTravel: any = useAppSelector((state) => state.deleteTravel);
  const deletedPackage: any = useAppSelector((state) => state.deletePackage);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (type === "travel" && deletedTravel.isSuccess) {
      setIsOpen(false);
      setIsLoading(false);
      dispatch(getAllDashboardData());
    } else if (!deletedTravel.isSuccess) {
      setIsLoading(false);
    }

    if (type === "package" && deletedPackage.isSuccess) {
      setIsOpen(false);
      setIsLoading(false);
      dispatch(getAllDashboardData());
    } else if (!deletedPackage.isSuccess) {
      setIsLoading(false);
    }
  }, [deletedTravel, deletedPackage, type]);

  const confirmDeleteBtn = () => {
    setIsLoading(true);
    setRemoveConfirmed(true);
  };

  return (
    <>
      <Modal
        className="remove-modal-wrapper"
        show={isOpen}
        backdrop="static"
        onHide={handleClose}
      >
        <Modal.Body>
          <div className="close-modal-btn-wrapper">
            <a onClick={handleClose}>
              <FontAwesomeIcon icon={faClose} />
            </a>
          </div>
          <span className="enter-travel-information">{title}</span>
          <Row>
            <Col xs={12}>
              <span className="remove-desc-title">{description}</span>
            </Col>
          </Row>
          <Button
            variant="warning"
            data-test="docs-btn-anchor"
            onClick={confirmDeleteBtn}
            className="confirm-remove-btn"
          >
            Confirm
            {isLoading && (
              <Oval
                width="20"
                height="20"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ display: "inline", marginLeft: "8px" }}
              />
            )}
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
