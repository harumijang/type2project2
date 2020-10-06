import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ProductPage from "./components/ProductPage";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import About from "./components/AboutPage";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={App} />
      <Route path="/shop" component={ProductPage} />
      <Route path="/about" component={About} />
      {/* <Route path="/login" component={LoginPage} />
      <Route path="/cart" component={Cart} /> */}
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
