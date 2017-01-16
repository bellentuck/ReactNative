import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBum_JLEjajbBCOg2qI362QLCOLUyfKXCQ',
      authDomain: 'auth-3883b.firebaseapp.com',
      databaseURL: 'https://auth-3883b.firebaseio.com',
      storageBucket: 'auth-3883b.appspot.com',
      messagingSenderId: '463355207459'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
