import React from "react";
import { Login, AcceptOffer, SendRequest } from "components";
import { slide as Menu } from "react-burger-menu";
import { UseWindowSize } from "components/windowSize/UseWindowSize";

interface IProps {
  isOpen: boolean;
  setIsOpen: (key: any) => void;
  setIsLogin?: Function;
  sidebarType: string;
}

export const RightSidebar: React.FC<IProps> = ({
  isOpen,
  setIsOpen,
  sidebarType,
  setIsLogin,
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
        <AcceptOffer />
      ) : sidebarType === "request" ? (
        <SendRequest />
      ) : null}
    </Menu>
  );
};
