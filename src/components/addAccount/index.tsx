import React, { useState, useEffect } from "react";
import { Input, Button } from "layers";
import { Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "redux/store";
import {
  addNewBankAccount,
  getAllGateways,
  getAllBankAccounts,
} from "redux/actions/banks";
import { IAccount } from "models/interfaces";
import { Oval } from "react-loader-spinner";

interface IProp {
  setIsOpen: Function;
}

export const AddAccount: React.FC<IProp> = ({ setIsOpen }) => {
  const [gatewayId, setGatewayId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [accountData, setAccountData] = useState<IAccount>({
    gatewayId: "",
    holderName: "",
    number: "",
    email: "",
    swiftCode: "",
  });
  const allGateways: any = useAppSelector((state) => state.gateways);
  const addAccountData: any = useAppSelector((state) => state.addBankAccount);
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getAllGateways());
  }, []);

  const onGatewayChanged = (item) => {
    setGatewayId(item.id);
  };

  const addAccount = () => {
    setIsLoading(true);
    const data = {
      ...accountData,
      gatewayId,
    };
    dispatch(addNewBankAccount(data));
  };

  useEffect(() => {
    if (addAccountData.isSuccess) {
      setIsLoading(false);
      setIsOpen(false);
      dispatch(getAllBankAccounts());
    } else if (!addAccountData.isSuccess) {
      setIsLoading(false);
    }
  }, [addAccountData]);

  return (
    <div className="payment-slider-container">
      <Row className="stripe-payment-wrapper">
        <Col xs={12} className="payment-form">
          <h1>Add Account</h1>
        </Col>
        <Col xs={12} className="payment-form">
          <div className="gateways-radio-wrapper">
            <form>
              {allGateways.data?.map((item) => {
                return (
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value={item.id}
                      onClick={() => onGatewayChanged(item)}
                    />
                    <span>{item.name}</span>
                  </label>
                );
              })}
            </form>
          </div>
        </Col>
        <Col xs={6} className="payment-form pr-0">
          <div className="profile-box-container">
            <Input
              size="sm"
              id="holderName"
              name="holderName"
              placeholder="Account Holder Name"
              className="custom-account-input"
              type="text"
              value={accountData.holderName}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col xs={6} className="payment-form pl-0">
          <div className="profile-box-container">
            <Input
              size="sm"
              id="number"
              name="number"
              placeholder="Account Number"
              className="custom-account-input-2th"
              type="text"
              value={accountData.number}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col xs={6} className="payment-form pr-0">
          <div className="profile-box-container">
            <Input
              size="sm"
              id="email"
              name="email"
              placeholder="Email"
              className="custom-account-input"
              type="text"
              value={accountData.email}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col xs={6} className="payment-form pl-0">
          <div className="profile-box-container">
            <Input
              size="sm"
              id="swiftCode"
              name="swiftCode"
              placeholder="Swift Code"
              className="custom-account-input-2th"
              type="text"
              value={accountData.swiftCode}
              onChange={handleChange}
            />
          </div>
        </Col>

        <Col
          xs={12}
          className="payment-form text-right"
          style={{ marginTop: "24px" }}
        >
          <Button
            variant="primary"
            className="add-new-request-btn"
            onClick={addAccount}
          >
            Add new
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
        </Col>
      </Row>
    </div>
  );
};
