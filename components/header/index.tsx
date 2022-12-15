import Button from "@components/button";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import { SearchOutlined } from "@ant-design/icons";
import Menu from "@components/menu";
import SideNavigation from "@components/sideNavigation";

function Header() {
  return (
    <header className="header">
      <div className="left">
        {/* <Menu /> */}
        <SideNavigation />
        <SearchOutlined />
      </div>
      <div className="logo">
        <Image src={logo} alt={"logo"}></Image>
      </div>
      <div className="right">
        <Button buttonType="primary-outline">Sign up</Button>
      </div>
    </header>
  );
}

export default Header;
