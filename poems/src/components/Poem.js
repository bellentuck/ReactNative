import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { nextLine, prevLine, poemStart, poemEnd, poemReset } from '../actions';
import { Button } from './common';

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



class Poem extends Component {
  onTapForNextLine() {
    const { line } = this.props;
    console.log(line);
    this.props.nextLine({ line });
    console.log(line);
    //this.setState({line: this.state.line++});
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

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Picking the Next Poem Should Be a State Update.
  // renderPoem(poemSelection) {
  //   let n = getRandomInt(0, poemSelection.length);
  //   return (
  //     <Text style={styles.textStyle}>
  //       {poemSelection[n].lines[this.props.line]}
  //     </Text>
  //   );
  // }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onTapForNextLine.bind(this)}>
        <View style={styles.containerStyle}>
        <Text style={styles.textStyle}>
          {samplePoems[1].lines[this.props.line]}
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
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 42
  }
}

// Hook up state attributes to component props
const mapStateToProps = ({ poem }) => {
  const { line, poemHasBegun, poemHasEnded } = poem;
  return { line, poemHasBegun, poemHasEnded };
};

// Hook up state methods to component props
export default connect(mapStateToProps, {
  nextLine, prevLine, poemStart, poemEnd, poemReset
})(Poem);

let samplePoems = [
// ];
// let samplePoem1 =
{
  "title": "Ozymandias",
  "author": "Percy Bysshe Shelley",
  "lines": [
    "I met a traveller from an antique land",
    "Who said: \"Two vast and trunkless legs of stone",
    "Stand in the desert. Near them on the sand,",
    "Half sunk, a shattered visage lies, whose frown",
    "And wrinkled lip and sneer of cold command",
    "Tell that its sculptor well those passions read",
    "Which yet survive, stamped on these lifeless things,",
    "The hand that mocked them and the heart that fed.",
    "And on the pedestal these words appear:",
    "'My name is Ozymandias, King of Kings:",
    "Look on my works, ye mighty, and despair!'",
    "Nothing beside remains. Round the decay",
    "Of that colossal wreck, boundless and bare,",
    "The lone and level sands stretch far away\"."
  ]
},
 {
  "title": "This Is Just to Say",
  "author": "William Carlos Williams",
  "lines": [
    "I have eaten",
    "the plums",
    "that were in",
    "the icebox",
    "",
    "and which",
    "you were probably",
    "saving",
    "for breakfast",
    "",
    "Forgive me",
    "they were delicious",
    "so sweet",
    "and so cold"
  ]
},
{
  "title": "Sonnet",
  "author": "Ben Ellentuck",
  "lines": [
    "Becoming ways",
    "In which oscures disclose",
    "Through with can bask",
    "Becoming this",
    "Becoming its haecceity the action of its playing out itself",
    "Of on or through",
    "Pendant in the night and of the morn",
    "The one of two most humans never know our sun",
    "",
    "Becoming relicked in our sun becoming this",
    "Does via flow",
    "Wi-hros shan-tay",
    "Where no one'd know",
    "",
    "For earth or end the sky",
    "There is no is there are no I",
    ""
  ]
}
];
