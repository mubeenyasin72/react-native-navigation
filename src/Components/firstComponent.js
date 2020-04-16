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
class firstComponent extends Component {
  render() {
    return (
      <View
        style={{
        }}>
        <Text>First Components</Text>
        <Button
          title="Go to Second Page"
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}
export default firstComponent;
