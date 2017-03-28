import React, { Component } from 'react';
import { G, Path } from 'react-native-svg';

class CurvePiece extends Component {
  render() {
    const { origin, height, length, rotation } = this.props;
    return(
      <G rotate={rotation} origin={`${origin.x}, ${origin.y}`}>
        <Path
            d={`M${origin.x} ${origin.y} q 0,${height} ${length},${length}`}
            // e.g.: d="M100 250 q 0,60 60,60" // pseudo-height=60, length=60
            fill="none"
            stroke="red"
        />
        <Path
            d={`M${origin.x - 6} ${origin.y} q 0,${height + 6} ${length + 6},${length + 6}`} 
            fill="none"
            stroke="red"
        />
      </G>
    );
  }
}

CurvePiece.propTypes = {
  origin: React.PropTypes.objectOf(React.PropTypes.number),
  height: React.PropTypes.number,
  length: React.PropTypes.number,
  rotation: React.PropTypes.number
}

export default CurvePiece;
