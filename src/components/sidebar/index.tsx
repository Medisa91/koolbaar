import React from "react";
import { Login, AcceptOffer, SendRequest } from "components";
import { slide as Menu } from 'react-burger-menu'
import { UseWindowSize } from "components/windowSize/UseWindowSize";

interface IProps {
    isOpen: boolean;
    setIsOpen:(key: any) => void;
    sidebarType: string;
}


export const RightSidebar: React.FC<IProps> = ({ isOpen, setIsOpen, sidebarType }) => {
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
        <Login />
      ) : sidebarType === "offer" ? (
        <AcceptOffer />
      ) : sidebarType === "request" ? (
        <SendRequest />
      ) : null}
    </Menu>
  );
};
