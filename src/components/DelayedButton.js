import React, { Component } from 'react';

export default class DelayedButton extends Component {

delayedCoords = event => {
  event.persist();
  setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
}

  render(){
    return (
      <button onClick={this.delayedCoords}>Click for Delayed Coordinates!</button>
    )
  }
}
