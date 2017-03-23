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



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      carAnimationValue: new Animated.ValueXY({ x: 66, y: 242.7 }),
      //car: new Animated.Value(0) //(1)
      //pan: new Animated.ValueXY()
    }
  }
  componentDidMount() {
    const animationConfig = {
      duration: 2000, // milliseconds
      delay: 1000,
      easing: Easing.in(Easing.ease),
    }
    const value = this.state.carAnimationValue;
    const slidingInAnimation = Animated.timing(value, {
      ...animationConfig,
      toValue: {
        x: 400,
        y: 0,
      },
    }).start();
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
    const carAnimationStyle = this.state
      .carAnimationValue
      .getTranslateTransform();
  //   const slidingAnimationStyle = this.state
  // .slidingAnimationValue
  // .getTranslateTransform(); // Get the initial transform style
    return (

      <View style={styles.container}>
      {/*<Animated.View style={this.getStyle()} />*/}
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
          <AnimatedCar style={carAnimationStyle} xStart={this.state.carAnimationValue.x} yStart={this.state.carAnimationValue.y} rotation={90} />
          {/*
          <AnimatedCar style={carAnimationStyle} xStart={66} yStart={242.7} rotation={90} />
          <AnimatedCar xStart={123} yStart={242.7} rotation={90} />
          <AnimatedCar xStart={180} yStart={242.7} rotation={90} />
          <AnimatedCar xStart={237} yStart={242.7} rotation={90} />
        */}
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
  vector: {
    width: 100,
    height: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    marginTop: 100
  }
};


export default App;
