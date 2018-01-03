import axios from 'axios';

export class BlockChainService {

	constructor(){}

	static async getDifficulty(){
		let difficultyRes = await axios.get('https://blockchain.info/q/getdifficulty');
		return difficultyRes.data;
	}


	static async getBTCPrice(){
		let BTCPriceRes = await axios.get('https://blockchain.info/ticker');
		return BTCPriceRes.data.USD.last;
	}

	static async getCoinTop10(){
		let coinPrices = await axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=5');
		return coinPrices.data;
	}

}