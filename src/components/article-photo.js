import React, { Component } from "react";
import ImageFadeIn from "react-image-fade-in";

class Vehicles extends Component {
  render() {
    return (
      <ImageFadeIn
        id="article-photo"
        src={this.props.photo}
        opacityTransition="2.5"
      ></ImageFadeIn>
    );
  }
}

export default Vehicles;
