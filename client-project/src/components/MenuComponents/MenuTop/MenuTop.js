import React from "react";
import { Button } from "antd";
import Logo from "../../../assets/img/png/Logo.png";
import "./MenuTop.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Button
          className="btn-menu"
          type="link"
          onClick={() => setMenuCollapsed(!menuCollapsed)}
          aria-label={menuCollapsed ? "Mostrar menu" : "Ocultar menu"}
        >
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <img className="menu-top__left__logo" src={Logo} alt="Logo" />
      </div>
      <div className="menu-top__right">
        <LoginModal></LoginModal>
        <RegisterModal></RegisterModal>
      </div>
    </div>
  );
};
