import React from "react";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Video from "./assets/glitch.mp4";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Vehicles from "./components/article-photo";
import Film1 from "./components/Film1";

function App() {
  return (
    <div className="container">
      <div className="Home">
        <Link to="/main">
          <br></br>
          <br></br>
          <h1>enter</h1>
        </Link>
      </div>
    </div>
  );
}

export default App;
