//import React, { Component } from 'react';
import { Line } from 'react-native-svg';

const Topline (props) => {
  render() {
    const { y1, y2, x } = this.props;
    return (
      <Line
        x1={x}
        y1={y1}
        x2={x}
        y2={y2}
        stroke="black"
        strokeWidth=".3"
      />
    );
  }
}

export default Topline;
