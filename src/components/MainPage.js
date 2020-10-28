import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Film1 from "./Film1.js";
import Vehicles from "./article-photo.js";

class MainPage extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>MAIN PAGE</h1>
        <Link to="/home">
          <h1>home</h1>
        </Link>
        <Link to="/film1">
          <h1>article1</h1>
        </Link>
        <div class="container" id="products"></div>
      </div>
    );
  }
}

export default MainPage;
