//import React, { Component } from 'react';
import { Rect } from 'react-native-svg';

const Cabin (props) => {
  render() {
    const { w, h, x, y } = this.props;
    return (
      <Rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="rgb(213,222,234)"
        strokeWidth="1"
        stroke="rgb(0,0,0)"
      />
    );
  }
}

export default Cabin;
