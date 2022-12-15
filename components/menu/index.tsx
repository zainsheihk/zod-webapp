import React from "react";
import MenuIcon from "@icons/menu-shape.png";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";

function Menu() {
  const groupItemStyles = {
    color: "#000",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };
  const items: MenuProps["items"] = [
    {
      type: "group",
      label: (
        <a href="">
          <b style={groupItemStyles}>
            <Image src={MenuIcon} alt="" width={16} />
            Seller Login
          </b>
        </a>
      ),
    },
    {
      type: "divider",
    },
    {
      type: "group",
      label: (
        <a href="">
          <b style={groupItemStyles}>
            <Image src={MenuIcon} alt="" width={16} />
            Maker Login
          </b>
        </a>
      ),

      children: [
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
      ],
    },
  ];
  return (
    <Dropdown
      overlayClassName="menuHeader"
      placement="bottomLeft"
      openClassName={"rotate"}
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
  );
}

export default Menu;
