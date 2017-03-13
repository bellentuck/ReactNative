import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EmployeeListItem extends Component {
  onRowPress() {
    // go to Router.js 'scene' w/ the following key,
    // communicating which employee you want to show.
    Actions.employeeEdit({ employee: this.props.employee });
  }
  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

EmployeeListItem.propTypes = {
  employee: React.PropTypes.object
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default EmployeeListItem;
