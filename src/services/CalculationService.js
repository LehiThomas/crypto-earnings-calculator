import { HASHUNITS } from '../consts/HASHUNITS';

export class CalculationService {
	constructor(){
		this.calculateDay.bind(this);
		this.reinvestCalc.bind(this);
	}
	
	static calculateEarnings(currentPrice, originalCost, coin, coinAmount){
		const difference = currentPrice - originalCost
		const ROI = difference * coinAmount
		const name = coin.name
		const lastDayDiff = coin.percent_change_24h
		return { 
			ROI: ROI, 
			difference: difference,
			name: name,
			lastDayDiff: lastDayDiff }
	}
}


// H = Hashrate (hashes / second)
// D = Difficulty (Reference for values below)
// B = Reward per Block (Reference for value below)
// N = Number of days per month (default = 30)
// S = Number of seconds per day (S = 60 * 60 * 24 = 86400)

// N * B * H * 86400 / D * 2^32