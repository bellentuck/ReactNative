import React, { Component } from 'react';
import { G, Line } from 'react-native-svg';

class StraightPiece extends Component {
  render() {
    const { origin, length, rotation } = this.props;
    const xx = origin.x - 6;
    const dy = origin.y + length;
    return(
      <G rotate={rotation} origin={`${origin.x}, ${origin.y}`}>
        <Line
          x1={origin.x}
          y1={origin.y}
          x2={origin.x}
          y2={dy}
          stroke="red"
        />
        <Line
          x1={xx}
          y1={origin.y}
          x2={xx}
          y2={dy}
          stroke="red"
        />
      </G>
    );
  }
}

StraightPiece.propTypes = {
  origin: React.PropTypes.objectOf(React.PropTypes.number),
  length: React.PropTypes.number,
  rotation: React.PropTypes.number
}

export default StraightPiece;
