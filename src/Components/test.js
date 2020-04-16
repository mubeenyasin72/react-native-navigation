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
class test extends Component {
  render() {
    alert('First Component');
    console.log('This IS THe First Component');
    return (
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
        }}>
        <Text>First Components</Text>
        <Button
          title="Go to Second Page"
        />
      </View>
    );
  }
}
export default test;
