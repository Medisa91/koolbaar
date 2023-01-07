import React, { useState, useEffect } from "react";
import { Button } from "layers";
import { IGateway } from "models/interfaces";
import { RightSidebar } from "layers";
import { useAppDispatch, useAppSelector } from "redux/store";
import { getAllBankAccounts } from "redux/actions/banks";

interface IProps {
  gateways: IGateway[];
}

export const PaymentSetting: React.FC<IProps> = ({ gateways }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const allBanksAccount: any = useAppSelector((state) => state.bankAccounts);
  const dispatch = useAppDispatch();

  const openSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const onNameChanged = (e) => {
    setName(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(getAllBankAccounts());
  }, []);

  return (
    <div
      className={`${
        allBanksAccount?.length !== 0 ? "payment-wrapper" : "no-payment-wrapper"
      } `}
    >
      <h2>Payment Settings</h2>
      {allBanksAccount?.data?.map((account) => {
        return (
          <div className="payment-card-info mt-4">
            <div className="d-flex">
              {/* <img
                src={account?.imageUrl}
                className="paypal-card-img"
                alt="visa-img"
              /> */}
              <span className="visa-card-number">{account?.holderName}</span>
              <span className="visa-card-number">{account?.email}</span>
              <input
                className="ml-auto card-radio-btn"
                type="radio"
                name="site_name"
                value={account?.gatewayId}
                onChange={onNameChanged}
              />
            </div>

            <span className="visa-card-expiration">{account?.number}</span>
            <span className="visa-card-expiration">{account?.swiftCode}</span>
          </div>
        );
      })}
      <Button
        variant="primary"
        className="add-new-card-btn"
        onClick={openSidebar}
      >
        Add New
      </Button>
      {showSidebar && (
        <div className="offer-sidebar">
          <RightSidebar
            isOpen={showSidebar}
            setIsOpen={setShowSidebar}
            sidebarType="account"
          />
        </div>
      )}
    </div>
  );
};
