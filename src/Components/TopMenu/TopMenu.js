import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
//import Logo from "./../../assets/img/logo/logo.svg";
import { ReactComponent as Logo } from "./../../assets/img/logo/logo.svg";

import "./TopMenu.scss";

export default function TopMenu() {
  const { Item } = Menu;
  return (
    <div className="top-menu">
      <div className="top-menu__logo">
        <Logo />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Item key="1">
          <Link to="/">Home</Link>
        </Item>

        <Item key="2">
          <Link to="/new-movies">Nuevo Lanzamiento</Link>
        </Item>

        <Item key="3">
          <Link to="/popular">Mas Populares</Link>
        </Item>

        <Item key="4">
          <Link to="/search">
            <Icon type="search" />
            Buscar
          </Link>
        </Item>
      </Menu>
    </div>
  );
}
