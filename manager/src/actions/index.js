import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  //return an action
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  // I. return an anonymous function,
  // which will take 'dispatch' as an argument,
  //  II. and will return
  // a. any typed actions to be sent straightaway off to reducers, &
  // b. an asynchronous method,
  //  which returns a promise,
  //    III. and ultimately returns another (.then) method (exception: .catch case),
  //    which in turn takes 'user' as an argument,
  //      IV. and returns a manual dispatch of an action,
  //      of type
  //        [convention:
  //        semantically-in-accord-with-that-of-action-creator-name,
  //        viz., insert from types.js here],
  //      which takes 'user' as payload.

  // I.
  return (dispatch) => {
    // II.
    //a.
    dispatch({ type: LOGIN_USER });
    //b.
    firebase.auth().signInWithEmailAndPassword(email, password)
      // III.
      .then(user =>
        // IV.
        loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
          });
  };
};

//just supporting loginUser action creator;
//not going to use anywhere else in app
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

// "type" values form incredibly strong links between actions and reducers --
// reducers need to be able to pick up on dispatched actions.
