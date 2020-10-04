import React from "react";
import data from "./data.js";
import Product from "./Product";
import shoe from "../nike.jpg";

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    return (
      <div>
        <img id="shoe" src={shoe} />
        <br></br>
        <h1>Board Decks</h1>
        <div class="container" id="products">
          <div class="row">
            {data.slice(0, 2).map((el) => {
              return <Product className="col" productData={el}></Product>;
            })}
          </div>
          <div class="row">
            {data.slice(2, 4).map((el) => {
              return <Product className="col" productData={el}></Product>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
