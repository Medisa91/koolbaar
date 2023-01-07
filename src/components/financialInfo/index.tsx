import React from "react";
import { Button } from "layers";
import { PaymentSetting } from "./paymentSetting";
import { Transactions } from "./transactions";
import { IUserInfo } from "models/interfaces";
import { SkeletonFinancial } from "components/Skeleton/skeletonFinancial";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

interface IProps {
  userData: IUserInfo;
}

export const FinancialInfo: React.FC<IProps> = ({ userData }) => {
  const size = UseWindowSize();
  const isMobile = size.width < 768;

  return (
    <div>
      {!isMobile && <h1 className="account-title">Financial information</h1>}
      {userData ? (
        <>
          <div className="balance-wrapper">
            <h1>
              Balance : <span>{userData?.balance}</span>
            </h1>
            <Button
              variant="primary"
              data-test="docs-btn-anchor"
              href="/"
              className="withdraw-btn"
            >
              Withdraw
            </Button>
          </div>
          <PaymentSetting gateways={userData?.gateways} />
          <Transactions transactions={userData?.transactions} />
        </>
      ) : (
        <SkeletonFinancial />
      )}
    </div>
  );
};
