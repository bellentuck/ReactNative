import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';


export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // ensure action creator called w/ correct data:
  // console.log(name, phone, shift);

  // access currently-authenticated user
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    // pass to ref path thru JSON data store
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      //push creates a new property
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
      });
      // reset entire view stack - nav back to employeeList screen
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    // anytime you get data, call the interior fat-arrow function
    // with an object to describe the data present (the "snapshot")
    // snapshot = obj that *describes* what data's in there
    // snapshot => +declarative, ++metadata
    // called anytime new data created - Redux & Firebase working togetha
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

// need to specify employee yr trying to save
export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      //set updates an existing property
      .set({ name, phone, shift })
      .then(() => console.log('saved!'));
  };
};
