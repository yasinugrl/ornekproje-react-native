

// import ettiğim bölüm

import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';

// kendi komopnentlerimizi yazıyoruz.
const App = () => (
  <Header headerText={'Denem'} />
);

// kodlarımızı render ettiğimiz yer
AppRegistry.registerComponent('ornekproje', () => App);
