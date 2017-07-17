

// import ettiğim bölüm

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';

// kendi komopnentlerimizi yazıyoruz.
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Denem'} />
    <Liste />
  </View>

);

// kodlarımızı render ettiğimiz yer
AppRegistry.registerComponent('ornekproje', () => App);
