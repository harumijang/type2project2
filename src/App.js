import React from 'react';
import ProductPage from './components/ProductPage'
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="container">
              <Header />
        <ProductPage/>
    </div>
  );
}


export default App;
