import React, { Component } from "react";
import ImageFadeIn from "react-image-fade-in";

class Vehicles2 extends Component {
  render() {
    return (
      <ImageFadeIn
        id="article-photo2"
        src={this.props.photo}
        opacityTransition="2.5"
      ></ImageFadeIn>
    );
  }
}

export default Vehicles2;
