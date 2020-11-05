import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
        <Link to="/book">
          <h1>enter</h1>
        </Link>
      </div>
    </div>
  );
}

export default App;
