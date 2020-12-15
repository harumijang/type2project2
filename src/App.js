import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MainPage from "./components/MainPage";

var i = 0;
var txt = "Lorem ipsum typing effect!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var text =
  "as inclusion in the film industry continues to proceed at a very slow pace. The need to improve representation in Hollywood is a discussion that as old as Hollywood itself, and underrepresented groups continue to advocate for progress in an industry that has been slow to change.";

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("blurb").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function App() {
  return (
    <div>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
