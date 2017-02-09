import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
     apiKey: 'AIzaSyD9wU5HbBi-uVHQvpzDKlzlysRJDuO3qkw',
     authDomain: 'manager-a62bf.firebaseapp.com',
     databaseURL: 'https://manager-a62bf.firebaseio.com',
     storageBucket: 'manager-a62bf.appspot.com',
     messagingSenderId: '114427908822'
   };
   firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
