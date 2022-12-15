import Button from "@components/button";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useState } from "react";

function Header() {
  const items: MenuProps["items"] = [
    {
      label: (
        <>
          <a href="">
            <b>Seller Login</b>
          </a>
        </>
      ),
      key: "0",
      icon: <SearchOutlined />,
    },
    {
      type: "divider",
    },
    {
      label: (
        <a href="">
          <b>Maker login</b>
        </a>
      ),
      icon: <SearchOutlined />,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Know us",
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: "Blogs",
      key: "4",
    },
    {
      type: "divider",
    },
    {
      label: "Contact Us",
      key: "5",
    },
    {
      type: "divider",
    },
    {
      label: "Terms of Use",
      key: "6",
    },
    {
      type: "divider",
    },
    {
      label: "Privacy Policy",
      key: "8",
    },
    {
      type: "divider",
    },
  ];

  return (
    <header className="header">
      <div className="left">
        <Dropdown
          placement="bottomLeft"
          // openClassName={"rotate"}
          transitionName="rotate"
          menu={{ items }}
          trigger={["click"]}
        >
          <a
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <MenuOutlined />
          </a>
        </Dropdown>
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
