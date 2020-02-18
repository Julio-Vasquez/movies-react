import React from "react";
import { Layout, Icon } from "antd";

import "./Footer.scss";

export default function Footer() {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <p>
        Copyright ©{new Date().getFullYear()} All Rights Reserved : Julio
        Vásquez
      </p>

      <a
        href="https://github.com/DarKPhuRioN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type="github" />
      </a>
    </Footer>
  );
}
