import React from "react";
import {Login} from "components"
import { slide as Menu } from 'react-burger-menu'

interface IProps {
    isOpen: boolean;
    setIsOpen:(key: any) => void;
}


export const RightSidebar: React.FC<IProps> = ({ isOpen, setIsOpen }) => {

  return (
    <Menu right width={"657px"} isOpen={isOpen} onOpen={setIsOpen}>
      <Login />
    </Menu>
  );
};
