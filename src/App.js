import React from "react";
import ProductPage from "./components/ProductPage";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Video from "./assets/glitch.mp4";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="Home">
        <Link to="/shop">
          <video autostart loop autoPlay src={Video} type="video/mp4" />
          <br></br>
          <br></br>
          <h1 className="clickToEnter">CLICK TO ENTER SHOP</h1>
        </Link>
      </div>
    </div>
  );
}

export default App;
