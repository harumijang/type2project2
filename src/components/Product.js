import React, { Component } from 'react'

class Product extends Component {


constructor(props) {
    super(props);
    this.state = {
      movieInLibrary: this.props.inLibrary,
    }
  }


render() {
    return (
      <div className={'movie-listing--item'} onClick={}>
          <div className={'movie-listing--moviename'}>{this.props.carData.name}</div>
          <div className={'movie-listing--rating'}>{this.props.carData.price}</div>
      </div>
    )
  }
}


export default Product