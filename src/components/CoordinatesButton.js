// Code CoordinatesButton Component Here
import React from 'react'
export default class CoordinatesButton extends React.Component {

getCoord = (event) => {
const coorFolder = [event.clientX, event.clientY]
this.props.onReceiveCoordinates(coorFolder);

}


  render() {
    return(
      <button onClick={this.getCoord}> Click here </button>
    )
  }

}
