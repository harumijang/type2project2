import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Film1 from "./Film1.js";
import Vehicles from "./article-photo.js";
import Film2 from "./Film2.js";
import Film3 from "./Film3.js";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({
          showHideDemo1: true,
          showHideDemo2: false,
          showHideDemo3: false,
        });
        break;
      case "showHideDemo2":
        this.setState({
          showHideDemo1: false,
          showHideDemo2: true,
          showHideDemo3: false,
        });
        break;
      case "showHideDemo3":
        this.setState({
          showHideDemo1: false,
          showHideDemo2: false,
          showHideDemo3: true,
        });
        break;
      default:
        return null;
    }
  }

  render() {
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;

    return (
      <div>
        <br></br>
        <Link to="/">
          <h1>home</h1>
        </Link>
        <div class="row" id="article-links">
          <a onClick={() => this.hideComponent("showHideDemo1")}>
            Women Made Them. Viewers and Critics Liked Them. No One Nominated
            Them.
          </a>
          <a onClick={() => this.hideComponent("showHideDemo2")}>
            Why Do Asian-Americans Remain Largely Unseen in Film and Television?
          </a>
          <a onClick={() => this.hideComponent("showHideDemo3")}>
            How the Criterion Collection Crops Out African-American Directors
          </a>
          {showHideDemo1 && <Film1 />}
          {showHideDemo2 && <Film2 />}
          {showHideDemo3 && <Film3 />}
        </div>
      </div>
    );
  }
}

export default MainPage;
