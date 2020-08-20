import React from 'react'
import data from './data.js'
import Product from './Product'



export default class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
            
    }
};

componentDidMount() {
    console.log("component did mount");

  }


render() {
        
    return (
        <div>
            <h1>Product Page</h1>
            <div class="container">
            <div class="row">

            {data.map(el => {
                  return (
                        <Product
                          className="col-sm"
                          carData={el}>
                        </Product>             
                                 );
                })}
        </div>
        </div>
        </div>



    )
}}