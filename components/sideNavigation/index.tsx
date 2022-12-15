import React from "react";
import {
  MenuOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Drawer, List, Space } from "antd";
import More from "./more";
import shopping from "@icons/shopping.png";
import UserDetail from "./userDetail";
import Image from "next/image";

function SideNavigation() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const data = [
    { title: "Home", icon: <HomeOutlined /> },
    { title: "My Favourites", icon: <HeartOutlined /> },
    { title: "My Orders", icon: <UnorderedListOutlined /> },
    { title: "Become a Seller", icon: <Image src={shopping} alt="" /> },
  ];
  return (
    <>
      <div className="sideNavigation">
        <MenuOutlined onClick={showDrawer} />
      </div>
      <Drawer
        className="sideNavigationDrawer"
        title={
          <div className="sideNavigationHeader">
            <Space className="sideMenuIcon">
              <MenuOutlined onClick={onClose} />
            </Space>
            <UserDetail />
            <More />
          </div>
        }
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <List
          size="large"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a href="">{item.title}</a>}
                avatar={<>{item.icon}</>}
              />
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
}

export default SideNavigation;
