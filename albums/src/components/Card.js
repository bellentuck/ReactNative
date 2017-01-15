import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    //Border
    borderWidth: 1, //thin border
    borderRadius: 2, //rounded corners
    borderColor: '#ddd', //light grey
    borderBottomWidth: 0,
    //Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, //shadow on top and bottom but not sides
    shadowOpacity: 0.1, //'see-through-ness'
    shadowRadius: 2,
    elevation: 1,
    //Spacing around the container
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
