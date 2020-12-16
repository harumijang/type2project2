import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={App} />
//       <Route path="/book" component={MainPage} />
//       <Route path="/film1" component={Film1} />
//       <Route path="/film2" component={Film2} />
//       <Route path="/film3" component={Film3} />
//     </div>
//   </Router>
// );

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
