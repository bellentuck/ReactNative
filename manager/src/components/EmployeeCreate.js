import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    // take ["destructure"] name, phone, shift out of our props object:
    const { name, phone, shift } = this.props;
    // pass name, phone, shift to the action creator:
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    //console.log(this.props.employee);
    return (
      <Card>
        {
          // take all the different props that EmployeeCreate has been passed,
          // and forward those to EmployeeForm as well:
        }
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
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

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
