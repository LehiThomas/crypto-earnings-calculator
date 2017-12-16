import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Calculator, Header, Footer } from './src/components';
import { BlockChainService } from './src/services/BlockChainService'; 
export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			BTC: 0
		}
		this.loadExternalData();
	}

	async loadExternalData(){
		let BTC = await BlockChainService.getBTCPrice();
		
		this.setState({BTC});
	}
	
	render() {
		return (
		<View style={styles.appContainer}>
			<Header BTC={this.state.BTC} />
			<Calculator BTC={this.state.BTC} />
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