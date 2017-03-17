// rewrighten in snazzybogstyle?

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BabysFirstTrain extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>Yo. #BabysFirstTrain</Text>
      </View>
    );
  }
}


const styles = {
  textStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2  //allocating 2/3 space to inputStyle
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1  // 1/3 space to labelStyle
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default BabysFirstTrain;
