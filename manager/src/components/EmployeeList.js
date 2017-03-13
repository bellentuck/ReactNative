import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    // always attempt to create data source
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    // call w/ a props obj w/ list of employees
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
    // cloneWithRows expects an array
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

  render() {
    //console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

EmployeeList.propTypes = {
  employeesFetch: React.PropTypes.func
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { shift: 'Monday', name: 'Methuselah', id: '9j6j9'};
  });
  return { employees }; //-> this.props.employees
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
