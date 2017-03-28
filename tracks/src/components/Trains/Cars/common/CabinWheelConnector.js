//import React, { Component } from 'react';
import { Line } from 'react-native-svg';

const CabinWheelConnector (props) => {
  render() {
    const { y, x1, x2 } = this.props;
    return (
      <Line
        rotate={/*insert redux stuff*/}
        x1={x1}
        y1={y}
        x2={x2}
        y2={y}
        stroke="black"
        strokeWidth="0"
      />

      // something's gotta trigger a change in state here. b/c we're going to need to update the x1 and x2, and based on that, update the rest.
      // or, rather, instead of rotation, could just change both x and y.
    );
  }
}

export default CabinWheelConnector;
