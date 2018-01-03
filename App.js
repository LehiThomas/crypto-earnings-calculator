import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Asset, AppLoading } from 'expo';

import { Calculator, Header, Footer } from './src/components';
import { BlockChainService } from './src/services/BlockChainService';

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			isReady: false,
		}

		this.loadExternalData = this.loadExternalData.bind(this);
	}

	componentWillMount(){
		this.loadExternalData();
	}

	async loadExternalData(){
		let coins = await BlockChainService.getCoinTop10();
		this.setState({coins});

		return Promise.all(coins);
	}

	render() {
		if (!this.state.isReady) {
			return (
			  <AppLoading
				startAsync={this.loadExternalData}
				onFinish={() => this.setState({ isReady: true })}
				onError={console.warn}
			  />
			);
		  }

		return (
		<View style={styles.appContainer}>
			<Header BTC={this.state.BTC} />
			<Calculator coins={this.state.coins} />
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