import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  //the auth piece of state is produced by the auth reducer:
  auth: AuthReducer,
  // not a great name but ehfn
  employeeForm: EmployeeFormReducer,

  employees: EmployeeReducer
});
