import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from '../actions/types';

//just make it very clear wht the init state is,
// what properties this reducer takes care of
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      //console.log('action!');
      //return a new obj w/ all the state props, plus an 'email' prop on top,
      //set to action.payload (new text)
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
