import React from "react";
import ReactDOM from "react-dom";
import timeline from "../assets/criterion_chart.png";

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

function Graph3() {
  var imgUrl = { timeline };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

      <FadeInSection>
        <h1>
          There are 45 directors who have more films than there are Black
          directors (US) in the Criterion. Only four Black directors (US) have
          films featured in the collection.
        </h1>
        <br></br>
        <img id="graph3" src={timeline}></img>
      </FadeInSection>
      <br></br>
      <br></br>
    </div>
  );
}
export default Graph3;
