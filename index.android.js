//import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a Component
const App = () => (
  //flex 1 here to root view support all of content
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render it to the device
AppRegistry.registerComponent('albums', () => App);
