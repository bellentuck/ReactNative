import React, { Component } from 'react';
import { G, Path, Line } from 'react-native-svg';
import { connect } from 'react-redux';
import { trackUpdate } from '.../actions';

class Curve extends Component {
  render() {
    const t0 = {
      x: this.props.origin.x,
      y: this.props.origin.y,
      dx1: this.props.origin.x + (this.props.radius * 2**.5) / 2;
      dy1: this.props.origin.y + (this.props.radius * 2**.5) / 2;
      dx: 
      dy: this.props.origin.y
    }
    const t1 = {
      x: this.props.origin.x - 6,
      y: this.props.origin.y,
      dx1:
      dy1:
      dx:
      dy:
    }
    const x0 = this.props.origin.x;
    const y0 = this.props.origin.y;
    const x1 = x0;
    const y1 = y0 + this.props.radius;
    const dx = x0 + this.props.radius;
    const dy = y1;
    const xx = (xStart-6); //94
    const yy = y; //250
    return (
      <G rotate={this.props.rotation} origin={`${x0}, ${y0}`}>
        <Path
            d={`M${x0} ${y0} q 0,60 60,60`} //length=60
            // d="M100 250 q 0,60 60,60" //length=60
            fill="none"
            stroke="red"
        />
        <Path
            d={`M${xx} ${yy} q 0,66 66,66`} //length=66? or 72?
            fill="none"
            stroke="red"
        />
      </G>
    );
  }
}

Curve.propTypes = {
  origin: React.PropTypes.objectOf(React.PropTypes.number),
  radius: React.PropTypes.number
}

const mapStateToProps = (state) => {
  const { origin, radius, rotation } = state.curve;
  return { origin, radius, rotation };
}

export default connect(mapStateToProps, {trackUpdate})(Curve);
