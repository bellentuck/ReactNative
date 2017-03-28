import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Easing, StyleSheet, Animated } from 'react-native';
//import { Dimensions } from 'Dimensions';
import Svg, { G, Path, Rect, Line, Polyline } from 'react-native-svg';
import RNAnimated from 'Animated';
import AnimatedImplementation from 'AnimatedImplementation';
// import { Motion, spring } from 'react-motion';
//import { FourCurve, FourStraight } from './components/TrackPieces';
import FourCurve from './components/TrackPieces/FourCurve';
import FourStraight from './components/TrackPieces/FourStraight';
import BabysFirstTrain from './components/Trains/BabysFirstTrain';
import SubwayCar from './components/Trains/SubwayCar';
import AnimateSubwayCar from './components/Trains/AnimateSubwayCar';


// animate SubwayCar
var AnimatedCar = Animated.createAnimatedComponent(SubwayCar);
// let AnimatedPath = Animated.createAnimatedComponent(Path);

//unneccessary, probs:
// const Animate = {
//   ...RNAnimated,
//   Path: AnimatedImplementation.createAnimatedComponent(Path),
// }


class App extends Component {

  // so basically this all should get put into Redux as a "CarMovementAction"/"CarMovementReducer"
  // so that then, at a higher level, we can coordinate with the tracks themselves, feeding these expressions (e.g. curves) into "CarMovement"
  //(now, that's not to say CarMovement can't *also* take attributes from the car itself (vs the tracks) - things like speed/easing. however, *direction* IS up to the tracks to determine!)
  constructor(props){
    super(props);
    this._origin = { x: 200, y: 242.7 }
    this._radius = 50
    this.state = {
    //   carAnimationValue: new Animated.ValueXY({ x: 66, y: 242.7 }),
    // }
      arcEndX: Math.sin(0) * this._radius,
      arcEndY: Math.cos(0) * this._radius - this._radius,
      largeArcFlag: Math.sin(0) >= 0 ? 0 : 1,
      rotation: 90
    }
    this.setArcEndFromRadians = this.setArcEndFromRadians.bind(this)
  }

  setArcEndFromRadians(radians) {
    this.setState({
      arcEndX: Math.sin(radians) * this._radius,
      arcEndY: Math.cos(radians) * this._radius - this._radius,
      largeArcFlag: Math.sin(radians) >= 0 ? 0 : 1,
      rotation: this.state.rotation+10
    })
  }

  componentDidMount() {
    let radians = 0
      let timer = setInterval(() => {
         radians += 0.01
         this.setArcEndFromRadians(radians)
      }, 16)
  }

// // componentDidMount W/ ANIMATED:
//     const animationConfig = {
//       duration: 2000, // milliseconds
//       delay: 1000,
//       easing: Easing.bezier(.66, .242, .250, .242)
//       //easing: Easing.inOut(Easing.ease),
//     }
//     const value = this.state.carAnimationValue;
// //Next step is to make the train move *along the track*.....
//     const slidingInAnimation = Animated.sequence([
//       Animated.timing(value, {
//         ...animationConfig,
//         toValue: {
//           x: 250,
//           y: 242.7
//         },
//       }),
//       Animated.timing(value, {
//         ...animationConfig,
//         toValue: {
//           x: 300,
//           y: 202.7
//         },
//       }),
//     ]).start();
// }

  render() {
    // const carAnimationStyle = this.state
    //   .carAnimationValue
    //   .getTranslateTransform();



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
        {/*<AnimateSubwayCar xStart={200} yStart={242.7} xEnd={250} yEnd={242.7} rotation={90} />*/}
        {/* <Path
        // d={ `M ${this._origin.x},${this._origin.y} l 0,50 a 50,50 0 ${this.state.largeArcFlag} 0 ${this.state.arcEndX},${this.state.arcEndY} z` }/>*/}

          {/*<AnimatedCar style={carAnimationStyle} xStart={this.state.carAnimationValue.x} yStart={this.state.carAnimationValue.y} rotation={90} />*/}

          <SubwayCar x={this._origin.x} y={this._origin.y} xStart={this.state.arcEndX} yStart={this.state.arcEndY} rotation={this.state.rotation}/>


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
