import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "../style.css";

const Sidebar = props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
			<i class="fas fa-home"></i> Home
      </a>

      <a className="menu-item" href="/page1">
        Page 1
      </a>

      <a className="menu-item" href="/page2">
        Page 2
      </a>
    </Menu>
  );
};

export default Sidebar;
