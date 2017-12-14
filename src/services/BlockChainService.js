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
	
}