import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { getRandomPoem,
  nextLine, prevLine, poemStart, poemEnd, poemReset
} from '../actions';
import { Button } from './common';

import Shakespeare from './content/ShakespeareSonnets.json';


// First, just a single poem;
// Next, can move on to multiple poems.

//"Reeder"
//(theres something very good about that. cassandra does the ideal thing)
//but the ideal thing (and this is platos problem with homer) appears shaky or unsustainable; it isn't that it's not working out exactly yet so much as it's strained. and the loom is the thing. but is it not generalizable in the fall of the platonic ideal down to earth in its activity of becoming an aristotelian mean,
//that it may have had to land somewhere.
//and why not here?
////here could be just fine.
//here could be good.
//"Gift yourself a poem"

//At the end of the poem we should fade out and return to the reset screen.
// i think this tends to be more than if statements, more like routing.

//var data = require('json!./content/ShakespeareSonnets.json');

//helper methods:
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
const getRandom = (data) => {
  let i = getRandomInt(0, data.length);
  return data[i];
};

class Sonnet extends Component {
  componentWillMount() {
    const rand = getRandom(Shakespeare);
    //0-153
  }

  onTapForNextLine() {
    const { currentLine } = this.props;
    this.props.nextLine({ currentLine });
  }

  onSwipeForPrevLine(line) {
    this.props.prevLine(line);
  }

  onButtonPressForReset() {
    this.props.poemReset();
  }

  renderButton() {
    return (
      <Button onPress={this.onButtonPressForReset()}>
        Reread
      </Button>
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onTapForNextLine.bind(this)}>
        <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>
          {Shakespeare[100].lines[this.props.currentLine]}
          {/*lines[this.props.currentLine]*/}
        </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'pink',
  },
  textStyle: {
    fontSize: 42,
    //color: 'white'
  }
}

// Hook up state attributes to component props
const mapStateToProps = ({ poem }) => {
  const { currentLine, poemHasBegun, poemHasEnded } = poem;
  return { currentLine, poemHasBegun, poemHasEnded };
};

// Hook up state methods to component props
export default connect(mapStateToProps, {
  nextLine, prevLine, poemStart, poemEnd, poemReset
})(Sonnet);
