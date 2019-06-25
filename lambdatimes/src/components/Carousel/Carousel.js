import React, { Component } from 'react';
import  carouselData  from '../../data'
// Complete this Carousel 
 class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: []
    }
    // console.log(this.state.images)
  }
  componentDidMount(){
    this.setState({images: carouselData})
  }

  leftClick = () => {
    
    
  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <img src={this.state.images} style={{display: 'block'}} />
  }
  
  render(){
    // console.log('in render',this.state.images)
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

export default Carousel