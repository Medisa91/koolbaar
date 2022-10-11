import React from "react";
import { Login, AcceptOffer, SendRequest } from "components";
import { slide as Menu } from 'react-burger-menu'

interface IProps {
    isOpen: boolean;
    setIsOpen:(key: any) => void;
    sidebarType: string;
}


export const RightSidebar: React.FC<IProps> = ({ isOpen, setIsOpen, sidebarType }) => {

  return (
    <Menu
      right
      width={"657px"}
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
