import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Calculator, Header, Footer } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Header />
        <Calculator />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
	flex: 1,
	flexDirection: 'column'
  }
});