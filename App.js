import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { Calculator } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Bitcoin Mining Calculator', style: { color: '#fff' } }}
        />
        <Calculator />
      </View>
    );
  }
}
