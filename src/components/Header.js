import React, { Component } from "react";
import logo from "../Asset 1.png";

class Header extends Component {
  render() {
    return (
      <div>
        <div class="topnav">
          <a href="#login">LOG IN</a>
          <a href="#cart">CART [NUMBER]</a>
          <a href="#search">SEARCH ICON</a>
        </div>
        <img id="logo" src={logo} />
        <div class="midnav">
          <a href="#login">SHOP</a>
          <a href="#cart">CORE</a>
          <a href="#search">ONE ON ONE</a>
        </div>
      </div>
    );
  }
}

export default Header;
