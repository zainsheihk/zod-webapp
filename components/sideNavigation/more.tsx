import { Dropdown, MenuProps } from "antd";
import { MoreOutlined, LogoutOutlined } from "@ant-design/icons";
import React from "react";

function More() {
  const items: MenuProps["items"] = [
    {
      label: "Terms & Conditions",
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Privacy Policy",
      key: "2",
    },

    {
      type: "divider",
    },
    {
      label: "Contact Us",
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: "Settings",
      key: "4",
    },
    {
      type: "divider",
    },
    {
      label: "Log out",
      key: "5",
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <div className="more">
      <Dropdown
        placement="bottomRight"
        menu={{ items }}
        trigger={["click"]}
        overlayClassName="moreMenu"
      >
        <MoreOutlined />
      </Dropdown>
    </div>
  );
}

export default More;
