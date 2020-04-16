/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppContainer from './src/Components/routingFile';
import Test from './src/Components/test';
import First from './src/Components/firstComponent';
class App extends Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}
export default App;
