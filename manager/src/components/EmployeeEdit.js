import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';


class EmployeeEdit extends Component {
  componentWillMount() {
    //1. we understand there is an employee model coming into this component.
    //2. we are going to iterate over every property on that object,
    // and update our reducer with that property.
    // Stuff them as pre-filled values inside our form reducer.
    // Another approach would be to make a new action creator to accept an entire employee model,
    // and then update all the values in the reducer in one go.
    _.forEach(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    // name, phone, shift out of our employee form reducer
    const { name, phone, shift } = this.props;
    //console.log(name, phone, shift);
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

// now we have access to the employeeUpdate
// action creator within this component:
export default connect(mapStateToProps, {
  employeeUpdate, employeeSave
})(EmployeeEdit);
