import React from 'react';
import { View } from 'react-native';

import { Calculator, Header } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Calculator />
      </View>
    );
  }
}
