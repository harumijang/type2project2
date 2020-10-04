import React from "react";
import ProductPage from "./components/ProductPage";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <ProductPage />
    </div>
  );
}

export default App;
