import React from "react";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Video from "./assets/glitch.mp4";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Vehicles from "./components/article-photo";
import Film1 from "./components/Film1";
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <div className="container">
      <div className="Home">
        <br></br>
        <br></br>
        <h2>add some background information here</h2>
        <h2>add some background information here</h2>
        <h2>add some background information here</h2>
        <h2>add some background information here</h2>
        <Link to="/main">
          <h1>enter</h1>
        </Link>
      </div>
    </div>
  );
}

export default App;
