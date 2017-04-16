// A. Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// B. Add component propTypes!
// Header.propTypes = {
//   headerText: React.PropTypes.string
// };

// C. Make the component
//name it a function that is the same as the file it's in.
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, //pixels
    paddingTop: 15,
    // shadow stuff
    shadowColor: '#000', //black
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// D. Make the component available to other parts of the app
export { Header };
