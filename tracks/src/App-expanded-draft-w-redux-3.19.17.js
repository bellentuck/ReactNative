// REDUX EXTENSIIONS //
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import reducers from './reducers';


import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Svg from 'react-native-svg';
// import { Motion, spring } from 'react-motion';
//import { FourCurve, FourStraight } from './components/TrackPieces';
import FourCurve from './components/TrackPieces/FourCurve';
import FourStraight from './components/TrackPieces/FourStraight';
import BabysFirstTrain from './components/Trains/BabysFirstTrain';
import SubwayCar from './components/Trains/SubwayCar';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';


class App extends Component {
  render() {
    // REDUX
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    //
    // "PROVIDER" COURTESY REDUX
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
