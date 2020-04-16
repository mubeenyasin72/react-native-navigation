import React, {Component} from 'react';
import {View, Text} from 'react-native';

class secondComponent extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello Second Navigation App</Text>
      </View>
    );
  }
}
export default secondComponent;
