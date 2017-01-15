// Index.ios.js - place code in here for iOS

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component (quid - the what)
//function that returns an object that tells us about what we should experience on our device
// ONLY return 1 top-level tag. The solution is to wrap everything in a View tag.
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device (haec - the how)
AppRegistry.registerComponent('albums', () => App);
/*
1. the string that is the first arg or "prop" to registerComponent
must match up with the project name.
2. we pass a function that returns the first component to render for our application.
Each React Native app must register >=1 component.
*/
