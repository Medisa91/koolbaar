import React from "react";
import { Button } from "layers";
import { PaymentSetting } from "./paymentSetting";
import { Transactions } from "./transactions";

export const FinancialInfo: React.FC = () => {
  return (
    <div>
      <h1 className="account-title">Financial information</h1>
      <div className="balance-wrapper">
        <h1>
          Balance : <span>90 USD</span>
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
      <PaymentSetting />
      <Transactions />
    </div>
  );
};
