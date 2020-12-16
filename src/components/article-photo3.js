import React, { Component } from "react";
import ImageFadeIn from "react-image-fade-in";

class Vehicles3 extends Component {
  render() {
    return (
      <ImageFadeIn
        id="article-photo3"
        src={this.props.photo}
        opacityTransition="2.5"
      ></ImageFadeIn>
    );
  }
}

export default Vehicles3;
