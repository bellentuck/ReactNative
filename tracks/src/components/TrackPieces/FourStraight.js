import React, { Component } from 'react';
import { View } from 'react-native';
import { G, Line } from 'react-native-svg';

class FourStraight extends Component {
  render() {
    const { rotation, xStart, yStart } = this.props;
    const rot = rotation.toString();
    const x = xStart.toString(); //100
    const y = yStart.toString(); //250
    const xx = (xStart-6).toString(); //94
    const yy = y; //250
    const yDelta = (yStart+66).toString();
    return(
      <G rotate={rot} origin={`${x}, ${y}`}>
        <Line
          x1={x}
          y1={y}
          x2={x}
          y2={yDelta}
          stroke="red"
        />
        <Line
          x1={xx}
          y1={yy}
          x2={xx}
          y2={yDelta}
          stroke="red"
        />
      </G>
      );
    }
  }

export default FourStraight;
