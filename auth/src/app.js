import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBum_JLEjajbBCOg2qI362QLCOLUyfKXCQ',
      authDomain: 'auth-3883b.firebaseapp.com',
      databaseURL: 'https://auth-3883b.firebaseio.com',
      storageBucket: 'auth-3883b.appspot.com',
      messagingSenderId: '463355207459'
    });

    //can be called anytime in app
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.centerStyle}>
          <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  centerStyle: {
    alignSelf: 'center',
    justifyContent: 'center'
  }
};

export default App;
