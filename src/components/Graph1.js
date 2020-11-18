import React from "react";
import ReactDOM from "react-dom";
import timeline from "../assets/p2_timeline.png";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function Graph1() {
  var imgUrl = { timeline };
  var imgHeight = "900px";
  const divStyle = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(" +
      imgUrl +
      ") 0px 0px/100% " +
      imgHeight +
      " no-repeat",
    maxWidth: "100%",
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

      <FadeInSection>
        <h1>
          In the over 90-year history of the Oscars, only five women have been
          nominated for the Academy Award for Best Director, with one female
          winner, in 2010.
        </h1>
        <br></br>
        <img id="graph1" src={timeline}></img>
      </FadeInSection>
      <br></br>
      <br></br>
    </div>
  );
}
export default Graph1;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Graph1 />, rootElement);
