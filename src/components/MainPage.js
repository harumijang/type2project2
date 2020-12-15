import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Film1 from "./Film1.js";
import Film2 from "./Film2.js";
import Film3 from "./Film3.js";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false,
      imgUrl: require("../assets/combined_header.png"),
      imgHeight: 0,
      imgUrlGraph: 0,
      clickCount: 0,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 10;
    var headerBg = document.getElementById("blah");
    let pic = this.state.imgUrl;
    let imgHeight = this.state.imgHeight;

    var graphBg = document.getElementById("blah1");
    let picGraph = this.state.imgUrlGraph;
  };

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState(
          {
            showHideDemo1: true,
            showHideDemo2: false,
            showHideDemo3: false,
            // imgUrl: require("../assets/combined_header.png"),
            // imgHeight: "1300px",
          },
          () => window.scrollTo(0, 1300),
          (document.getElementById("blocker").style.height = "0px")
        );
        break;
      case "showHideDemo2":
        this.setState(
          {
            showHideDemo1: false,
            showHideDemo2: true,
            showHideDemo3: false,
            // imgUrl: require("../assets/combined_header.png"),
            // imgHeight: "1300px",
          },
          () => window.scrollTo(0, 1300),
          (document.getElementById("blocker").style.height = "0px")
        );

        console.log(this.state);
        break;
      case "showHideDemo3":
        this.setState(
          {
            showHideDemo1: false,
            showHideDemo2: false,
            showHideDemo3: true,
            // imgUrl: require("../assets/combined_header.png"),
            // imgHeight: "1300px",
          },
          () => window.scrollTo(0, 1300),
          (document.getElementById("blocker").style.height = "0px")
        );
        break;
      default:
        return null;
    }
  }

  render() {
    const {
      showHideDemo1,
      showHideDemo2,
      showHideDemo3,
      imgUrl,
      imgUrlGraph,
      imgHeight,
      clickCount,
    } = this.state;

    const divStyle = {
      backgroundImage: "url(" + imgUrl + ")",
      height: "1300px",
    };

    return (
      <div>
        <div class="fade-in" id="header" style={divStyle}></div>
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
        </div>
        <div id="blocker"></div>
        <div>
          {showHideDemo1 && <Film1 />}
          {showHideDemo2 && <Film2 />}
          {showHideDemo3 && <Film3 />}
        </div>
      </div>
    );
  }
}

export default MainPage;
