import React from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={(onPress)} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, //'fill as much content as you can'
    alignSelf: 'stretch', //flexbox rule: stretch to fill the limits of the container
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    ...Platform.select({
      ios: {
        borderRadius: 5,
      },
      android: {
        borderRadius: 1,
      },
    }),
  },
};

export { Button };
