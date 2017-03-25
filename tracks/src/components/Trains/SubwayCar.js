import React, { Component } from 'react';
import { Animated } from 'react-native';
import { G, Rect, Polyline, Line, Easing } from 'react-native-svg';

class SubwayCar extends Component {
  render() {
    const { rotation, xStart, yStart } = this.props;
    const rot = rotation.toString();
    const x = xStart.toString(); //100
    const y = yStart.toString(); //250
    const A = (yStart-2).toString();
    const B = (yStart+51.33+2).toString();
    const height = (yStart+51.33).toString();
    const x1 = (xStart+1.5).toString();
    const x2 = (xStart+7.5).toString();
    const x3 = (xStart+9).toString();
    {/*const mid = (xStart+4.5).toString();
    const edgeA = (yStart-2-1).toString();
    const edgeB = (yStart+51.33+2+1).toString();*/}
    const lineA = (yStart+1.5).toString();
    const lineB = (yStart+51.33-1.5).toString();
    const line1x = (xStart+2).toString();
    const line2x = (xStart+7).toString();

    return (
      <G
        rotate={rot}
        origin={`${x}, ${y}`}
        x={this.props.x}
        y={this.props.y}
      >
        <Rect
          x={x}
          y={y}
          width="8.60"
          height="51.33"
          fill="rgb(213,222,234)"
          strokeWidth="1"
          stroke="rgb(0,0,0)"
        />
        <Line
          x1={line1x}
          y1={lineA}
          x2={line1x}
          y2={lineB}
          stroke="black"
          strokeWidth=".3"
        />
        <Line
          x1={line2x}
          y1={lineA}
          x2={line2x}
          y2={lineB}
          stroke="black"
          strokeWidth=".3"
        />
        <Polyline
            points={`${x},${y} ${x1},${A} ${x2},${A} ${x3},${y}`}
            fill="none"
            stroke="black"
            strokeWidth="1"
        />
        <Polyline
            points={`${x},${height} ${x1},${B} ${x2},${B} ${x3},${height}`}
            fill="none"
            stroke="black"
            strokeWidth="1"
        />
        {/*<Line
          x1={mid}
          y1={A}
          x2={mid}
          y2={edgeA}
          stroke="black"
          strokeWidth=".8"
        />
        <Line
          x1={mid}
          y1={B}
          x2={mid}
          y2={edgeB}
          stroke="black"
          strokeWidth=".8"
        />*/}
    </G>
    );
  }
}

export default SubwayCar;
