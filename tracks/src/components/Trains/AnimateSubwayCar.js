import React, { Component } from 'react';
import { Animated } from 'react-native';
import { G, Rect, Polyline, Line, Easing } from 'react-native-svg';
import SubwayCar from './SubwayCar';

var AnimatedCar = Animated.createAnimatedComponent(SubwayCar);

class AnimateSubwayCar extends Component {
  constructor(props){
    super(props);
    this.state = {
      carAnimationValue: new Animated.ValueXY({ x: this.props.xStart, y: this.props.yStart }),
    }
  }
  componentDidMount() {
    const animationConfig = {
      duration: 2000, // milliseconds
      delay: 1000,
      //easing: Easing.bezier(.66, .242, .250, .242)
      //easing: Easing.inOut(Easing.ease),
    }
    const value = this.state.carAnimationValue;
    const movement = Animated.timing(value, {
      ...animationConfig,
      toValue: {
        x: this.props.xEnd,
        y: this.props.yEnd
      },
    }).start();
  }


  render() {
    const { rotation, xStart, yStart, xEnd, yEnd } = this.props;
    const carAnimationStyle = this.state
      .carAnimationValue
      .getTranslateTransform();
    return (
      <AnimatedCar style={carAnimationStyle} xStart={xStart} yStart={yStart} rotation={rotation}/>
    );
  }
}

export default AnimateSubwayCar;
