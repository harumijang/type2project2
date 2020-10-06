import React, { Component } from "react";
import logo from "../Asset 1.png";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div class="topnav">
          <a href="login">LOG IN</a>
          <a href="cart">CART [NUMBER]</a>
          <a href="search">SEARCH ICON</a>
        </div>
        <img id="logo" src={logo} />
        <div class="midnav">
          <Link to="/home">
            <a href="home">HOME</a>
          </Link>
          <Link to="/shop">
            <a href="shop">SHOP</a>
          </Link>
          <Link to="/about">
            <a href="about">ABOUT</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
