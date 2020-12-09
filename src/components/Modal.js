import React, { Component } from "react";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.openPopupbox = this.openPopupbox.bind(this);
  }

  openPopupbox() {
    const content = <img id="chart" src={this.props.img} />;
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: this.props.text,
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  }

  render() {
    return (
      <div id="chart wrapper">
        <img
          id="chart-link"
          onClick={this.openPopupbox}
          src={this.props.img}
        ></img>
        <PopupboxContainer />
      </div>
    );
  }
}
export default Modal;
