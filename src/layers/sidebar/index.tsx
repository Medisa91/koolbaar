import React from "react";
import {
  Login,
  AcceptOffer,
  SendRequest,
  AddPackage,
  AddTravel,
  StripePayment,
  AddAccount,
} from "components";
import { slide as Menu } from "react-burger-menu";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { IRequest, IMyTraveler, IMyPackages } from "models/interfaces";

interface IProps {
  isOpen: boolean;
  setIsOpen: (key: any) => void;
  setIsLogin?: Function;
  sidebarType: string;
  data?: IRequest;
  mode?: string;
  pkgId?: string;
  trvId?: string;
}

export const RightSidebar: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  sidebarType,
  setIsLogin,
  data,
  mode,
  trvId,
  pkgId,
}) => {
  const size = UseWindowSize();
  return (
    <Menu
      right
      width={size.width < 768 ? "400px" : "657px"}
      isOpen={isOpen}
      onOpen={setIsOpen}
      sidebarType="login"
    >
      {sidebarType === "login" ? (
        <Login setIsOpen={setIsOpen} setIsLogin={setIsLogin} />
      ) : sidebarType === "offer" ? (
        <AcceptOffer acceptOfferData={data} />
      ) : sidebarType === "request" ? (
        <SendRequest />
      ) : sidebarType === "travel" ? (
        <AddTravel setIsOpen={setIsOpen} mode={mode} trvId={trvId} />
      ) : sidebarType === "package" ? (
        <AddPackage setIsOpen={setIsOpen} mode={mode} pkgId={pkgId} />
      ) : sidebarType === "stripe" ? (
        <StripePayment />
      ) : sidebarType === "account" ? (
        <AddAccount />
      ) : null}
    </Menu>
  );
};
