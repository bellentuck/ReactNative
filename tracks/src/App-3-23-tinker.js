import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Animated, Easing, StyleSheet } from 'react-native';
//import { Dimensions } from 'Dimensions';
import Svg, { G } from 'react-native-svg';
// import { Motion, spring } from 'react-motion';
//import { FourCurve, FourStraight } from './components/TrackPieces';
import FourCurve from './components/TrackPieces/FourCurve';
import FourStraight from './components/TrackPieces/FourStraight';
import BabysFirstTrain from './components/Trains/BabysFirstTrain';
import SubwayCar from './components/Trains/SubwayCar';

// animate SubwayCar
var AnimatedCar = Animated.createAnimatedComponent(SubwayCar);

const Dimensions = require('Dimensions');
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
var SQUARE_DIMENSIONS = 30;
var SPRING_CONFIG = {tension: 2, friction: 3}; //Soft spring



class App extends Component {
  // getInitialState() {
  //   return {
  //     pan: new Animated.ValueXY()
  //   };
  // }
  constructor(props){
    super(props);
    this.state = {
      pan: new Animated.ValueXY()
    }
  }
  componentDidMount() {
    this.startAndRepeat();
  }
  startAndRepeat() {
    try {
      this.triggerAnimation(this.startAndRepeat);
    } catch(err) {
      err;
    }
  }
  triggerAnimation(cb) {
    Animated.sequence([
      Animated.spring(this.state.pan, {
            ...SPRING_CONFIG,
            toValue: {x: 0, y: height - SQUARE_DIMENSIONS} //animate to bottom left
      }),
      Animated.spring(this.state.pan, {
          ...SPRING_CONFIG,
          toValue: {x: width - SQUARE_DIMENSIONS, y: height - SQUARE_DIMENSIONS} // animated to bottom right
      }),
      Animated.spring(this.state.pan, {
            ...SPRING_CONFIG,
            toValue: {x: width - SQUARE_DIMENSIONS, y: 0} //animate to top right
      }),
      Animated.spring(this.state.pan, {
          ...SPRING_CONFIG,
          toValue: {x: 0, y: 0} // return to start
      })
    ]).start(cb);
  }
  getStyle() {
    return [
      styles.square,
      {
        transform: this.state.pan.getTranslateTransform()
      }
    ];
  }
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   // slidingAnimationValue:
  //   //   // new Animated.ValueXY({
  //   //   //    x: 0,
  //   //   //    y: 0
  //   //   //  })
  //   //
  //   //   //fadeAnim: new Animated.Value(0), // init opacity 0
  //   // };
  // }
  // {/*componentDidMount() {
  //   Animated.timing(
  //     this.state.fadeAnim,
  //     {toValue: 1}
  //   ).start();*/}
  // componentDidMount() {
  //   const animationConfig = {
  //     duration: 2000, // milliseconds
  //     delay: 1000, // milliseconds
  //     easing: Easing.in(Easing.ease),
  //   };
  //   const value = this.state.slidingAnimationValue;
  //   const slidingInAnimation = Animated.timing(value, {
  //     ...animationConfig, // ES6 spread operator
  //     toValue: {
  //       x: 200,
  //       y: 0,
  //     },
  //   }).start();
  // }

  render() {
  //   const slidingAnimationStyle = this.state
  // .slidingAnimationValue
  // .getTranslateTransform(); // Get the initial transform style
    return (
      <View style={styles.container}>

      <Svg height="750" width="450">
        <FourStraight xStart={0} yStart={250} rotation={90}/>
        <FourStraight xStart={66} yStart={250} rotation={90}/>
        <FourStraight xStart={132} yStart={250} rotation={90}/>
        <FourStraight xStart={194} yStart={250} rotation={90}/>
        <FourStraight xStart={260} yStart={250} rotation={90}/>
        <FourCurve xStart={260} yStart={244} rotation={270} />
        <FourStraight xStart={326} yStart={170} rotation={0}/>
        <FourStraight xStart={326} yStart={200} rotation={0}/>
        <FourStraight xStart={326} yStart={104} rotation={0}/>
        {/*<Animated.View    // Special animatable View
          style={{
            opacity: this.state.fadeAnim,
            transform: [{
              translateY: this.state.fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
              }),
            }],
        }}>
          {this.props.children}*/}
<Animated.View style={this.getStyle()}>
          <AnimatedCar xStart={66} yStart={242.7} rotation={90} />
        </Animated.View>
          <SubwayCar xStart={123} yStart={242.7} rotation={90} />
          <SubwayCar xStart={180} yStart={242.7} rotation={90} />
          <SubwayCar xStart={237} yStart={242.7} rotation={90} />
        {/*</Animated.View>*/}
        <BabysFirstTrain />
        {/*<Motion style={{x: spring(400)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className="demo0">
              <div className="demo0-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>
          }
        </Motion>*/}

        {/*Circle:
        <FourCurve xStart={100} yStart={250} rotation={0} />
        <FourCurve xStart={160} yStart={190} rotation={90} />
        <FourCurve xStart={220} yStart={250} rotation={180} />
        <FourCurve xStart={160} yStart={310} rotation={270} />
        */}
        {/*
        <FourStraight xStart={100} yStart={250} rotation={0} />
        <FourStraight xStart={100-6} yStart={250} rotation={180} />
        <FourStraight xStart={100-6} yStart={250} rotation={0} />
        <FourStraight xStart={100-12} yStart={250} rotation={180} />
        */}
        {
          /*top portion*//*
        <FourStraight xStart={100-12} yStart={250-66} rotation={180} />
        <FourStraight xStart={100-12} yStart={250-66-66} rotation={180} />
        <FourStraight xStart={100} yStart={250-66-66} rotation={0} />
        <FourStraight xStart={100} yStart={250-66-66-66} rotation={0} />
        */}
      </Svg>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  square: {
    <SubwayCar />
  }
};


export default App;
