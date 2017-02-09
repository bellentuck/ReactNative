import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      // "HERE'S THE FUN PART"
      // 'key interpolation':
      // aka anonymous objects??
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
