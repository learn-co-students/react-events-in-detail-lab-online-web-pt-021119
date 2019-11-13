import React, { Component } from 'react';

export default class CoordinateButton extends Component {

    handleChange = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }


    render(){
        return(<button onClick={event => this.handleChange(event)}>

        </button>

        )
    }
}