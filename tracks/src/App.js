import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Svg from 'react-native-svg';
//import { FourCurve } from './components/TrackPieces';
import FourCurve from './components/TrackPieces/FourCurve';
import FourStraight from './components/TrackPieces/FourStraight';
import BabysFirstTrain from './components/Trains/BabysFirstTrain';
import SubwayCar from './components/Trains/SubwayCar';

class App extends Component {
  render() {
    return (
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
        <SubwayCar xStart={66} yStart={242.7} rotation={90} />
        <SubwayCar xStart={123} yStart={242.7} rotation={90} />
        <SubwayCar xStart={180} yStart={242.7} rotation={90} />
        <SubwayCar xStart={237} yStart={242.7} rotation={90} />
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
    );
  }
}

export default App;
