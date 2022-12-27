import React from "react";
import { Login, AcceptOffer, SendRequest, StripePayment } from "components";
import { slide as Menu } from "react-burger-menu";
import { UseWindowSize } from "components/windowSize/UseWindowSize";
import { IRequest } from "models/interfaces";

interface IProps {
  isOpen: boolean;
  setIsOpen: (key: any) => void;
  setIsLogin?: Function;
  sidebarType: string;
  data?: IRequest;
}

export const RightSidebar: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  sidebarType,
  setIsLogin,
  data
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
        <AcceptOffer data={data} />
      ) : sidebarType === "request" ? (
        <SendRequest />
      ) : sidebarType === "stripe" ? (
        <StripePayment />
      ) : null}
    </Menu>
  );
};
