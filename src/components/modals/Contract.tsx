import React, { useState, useEffect } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import { Button } from "layers";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { DepartureOptions, ArrivalOptions } from "models/interfaces";

interface IProps {
  isOpen: boolean;
  setIsOpen: (key: any) => void;
}

export const Contract: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Modal
        className="contract-modal-wrapper"
        show={isOpen}
        onHide={handleClose}
      >
        <Modal.Body>
          <Row className="mt-4">
            <Col xs={6} className="ml-0">
              <span className="agreement-title-contract">
                Agreement between Traveler and Sender
              </span>
            </Col>
            <Col xs={6} className="text-right">
              <Button variant="primary" className="download-contract-btn">
                Download
              </Button>
              <Button className="edit-contract-btn">Edit</Button>
            </Col>
          </Row>
          <Row className="ml-0">
            <span className="contract-title">Traveler</span>
          </Row>
          <Row className="ml-0 mt-4 contract-content-wrapper">
            <p className="contract-content">
              -Mr./Ms. …… - Address country of departure : ------------ -
              Address country of arrival : -----------
            </p>
            <p className="contract-content">
              - Phone: -------- - Whatsapp: ---------- - email: --------
            </p>
            <p className="contract-content">
              - Identity Document Type : For International Traveling Passport is
              Mandatory for the Traveler - Identity Document Number : -------
            </p>
            <p className="contract-content">
              - Country/city of departure ......................... -
              Country/city of arrival
              ...........................................
            </p>
            <p className="contract-content">
              - Departure date ............................................. -
              Arrival date
              ...........................................................
            </p>
            <p className="contract-content">
              -Number of Kg offered by the traveler .............. -Number of Kg
              booked by the shipper ..............
            </p>
            <p className="contract-content">
              - The price of the service has been fixed at an amount of (Minimum
              20$) -------
            </p>
            <p className="contract-content">* Including:</p>
            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">
              Post/Mail the package
            </span>
            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">Taxi/Uber</span>

            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">Customs</span>

            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">Fuel/Gas</span>

            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">Pick up</span>

            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">Drop off</span>

            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">Will a nnounce later</span>

            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">Other</span>

            <p className="contract-content">
              Cancellation policy (Will be Filled by the Traveler)
            </p>
            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">No Cancellation</span>

            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">Free cancellation</span>

            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">
              Free cancellation at least 24 hours in advance of the departure
              date
            </span>

            <input
              className="ml-0 mr-1 contract-radio-btn"
              type="radio"
              name="site_name"
            />
            <span className="contract-content-radio">
              Free cancellation at least 48 hours in advance of the departure
              date
            </span>

            <p className="contract-content">- Empty Field: Details</p>
          </Row>
          <Row className="ml-0 mt-5 contract-content-wrapper">
            <span className="contract-title">Sender</span>
          </Row>
          <Row className="ml-0 mt-4 contract-content-wrapper">
            <p className="contract-content">-Mr./Ms. ……</p>
            <p className="contract-content">
              - Address country of departure : ------------ - Address country of
              arrival : -----------
            </p>
            <p className="contract-content">
              - Phone: -------- - Whatsapp: ---------- - Address : -------- -
              email: --------
            </p>
            <p className="contract-content">
              - Identity Document Type : - Identity Document Number : -------- -
            </p>
            <p className="contract-content">
              Recipient&apos;s Full Name: ----------
            </p>
            <p className="contract-content">
              - Recipient&apos;s Address: (If the traveler is supposed to either
              Drop off or Post the package to the Recipient)
            </p>
            <p className="contract-content">
              - Recipient&apos;s phone : ------------ - Recipient&apos;s
              Whatsapp : -------------
            </p>
            <p className="contract-content">
              (To be filled in if the recipient i.e. the one who receives the
              package, is different from the sender)
            </p>
            <p className="contract-content">
              - Deadline for delivery/Post: -----------------
            </p>
            <p className="contract-content">Items to Buy/carry:</p>
            <p className="contract-content">ITEM 1:</p>
            <p className="contract-content">
              - Designation: (Example: Smartphone) - Quantity: (Example: 2) -
              Approximate Value per unit: (Example : 50 $) - Total price: (Unit
              Value X QTY) Weight of the Object: KG Attach the picture: Optional
              Link: Optional
            </p>
            <p className="contract-content">ITEM 2:</p>
            <p className="contract-content">
              - Designation: (Example: Smartphone) - Quantity: (Example: 2) -
              Approximate Value per unit: (Example : 50 $) - Total price: (Unit
              Value X QTY) Weight of the Object: KG Attach the picture: Optional
              Link: Optional
            </p>
            {/* <p className="contract-content"></p>
            <p className="contract-content"></p> */}
            <p className="contract-content">
              *Adding new lines needs to be possible. Total Value: Sum of all
              Values Total Weight: Sum of all Weights kg ⃝ The package is picked
              up directly at the airport by the recipient. ⃝ The package is
              delivered by the traveler himself, at the address of the
              recipient. ⃝ The package is posted by the traveler to the address
              of the recipient. ⃝ The package is picked up at the
              traveler&apos;s home by the sender, or a recipient sent by the
              sender (e.g. a family member). ⃝ Other. Empty Field: Please
              specify the delivery method here.
            </p>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
