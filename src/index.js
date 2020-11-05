import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainPage from "./components/MainPage";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Film1 from "./components/Film1";
import Film2 from "./components/Film2";
import Film3 from "./components/Film3";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/book" component={MainPage} />
      <Route path="/film1" component={Film1} />
      <Route path="/film2" component={Film2} />
      <Route path="/film3" component={Film3} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
