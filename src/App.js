import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

var i = 0;
var txt = "Lorem ipsum typing effect!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("blurb").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function App() {
  return (
    <div className="container">
      <div className="Home">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 id="app-title">The Diversity Problem in the Film Industry</h1>
        <br></br>
        <br></br>
        <h2 id="blurb">
          Hollywood still remains as white, straight, and male as ever, as
          inclusion in the film industry continues to proceed at a very slow
          pace. The need to improve representation in Hollywood is a discussion
          that as old as Hollywood itself, and underrepresented groups continue
          to advocate for progress in an industry that has been slow to change.
        </h2>
        <div />
        <br></br>
        <br></br>
        <Link to="/book">
          <h1>ENTER</h1>
        </Link>
      </div>
    </div>
  );
}

export default App;
