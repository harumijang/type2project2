import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInLibrary: this.props.inLibrary,
    };
  }

  render() {
    return (
      <div className={"product-listing--item"}>
        <div className={"product-listing--img"}>
          <img
            src={
              "https://cdn.shopify.com/s/files/1/0087/6065/5938/products/arizona-raspberry-deck_c21999a3-d85d-49e7-a568-59638e3a8b24_2000x.png?v=1600447704"
            }
          />
        </div>
        <div className={"product-listing--name"}>
          {this.props.productData.name}
        </div>
        <div className={"product-listing--price"}>
          {this.props.productData.price}
        </div>
      </div>
    );
  }
}

export default Product;
