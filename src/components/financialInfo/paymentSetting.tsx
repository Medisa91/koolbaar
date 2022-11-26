import React, { useState } from "react";
import { Button } from "layers";
import VisaImg from "../../assets/images/visa.png";
import PaypalImg from "../../assets/images/paypal.png";
import { IGateway } from "models/interfaces";

interface IProps {
  gateways: IGateway[];
}

export const PaymentSetting: React.FC<IProps> = ({ gateways }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const onNameChanged = (e) => {
    setName(e.currentTarget.value);
  };
  // const onAddressChanged = (e) => {
  //   setAddress(e.currentTarget.value);
  // };

  return (
    <div
      className={`${
        gateways?.length !== 0 ? "payment-wrapper" : "no-payment-wrapper"
      } `}
    >
      <h2>Payment Settings</h2>
      {gateways?.map((gateway) => {
        return (
          <div className="payment-card-info mt-4">
            <div className="d-flex">
              <img
                src={gateway?.imageUrl}
                className="paypal-card-img"
                alt="visa-img"
              />
              <input
                className="ml-auto card-radio-btn"
                type="radio"
                name="site_name"
                value={gateway?.id}
                onChange={onNameChanged}
              />
            </div>
            <span className="visa-card-number">{gateway?.text}</span>
            <span className="visa-card-expiration">{gateway?.date}</span>
          </div>
        );
      })}
      {/* <div className="payment-card-info mt-4">
        <div className="d-flex">
          <img src={PaypalImg} className="paypal-card-img" alt="visa-img" />
          <input
            className="ml-auto card-radio-btn"
            type="radio"
            name="site_name"
            value={name}
            onChange={onNameChanged}
          />
        </div>
        <span className="paypal-card-account">myself@me.com</span>
        <span className="paypal-card-added">Added 15-02-2017</span>
      </div>
      <div className="payment-card-info mt-3">
        <div className="d-flex">
          <img src={VisaImg} className="visa-card-img" alt="paypal-img" />
          <input
            className="ml-auto card-radio-btn"
            type="radio"
            name="site_name"
            value={address}
            onChange={onAddressChanged}
          />
        </div>
        <span className="visa-card-number">**** **** **** 0817</span>
        <span className="visa-card-expiration">Expires 10-19</span>
      </div> */}
      <Button variant="primary" className="add-new-card-btn">
        Add New
      </Button>
    </div>
  );
};
