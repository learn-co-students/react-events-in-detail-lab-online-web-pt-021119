import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  findCoords = e => {
    const coordArr = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordArr);
  }

  render(){
    return(
      <button onClick={this.findCoords}>Click for Coordinates!</button>
    )
  }
}
