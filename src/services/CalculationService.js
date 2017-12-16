import { HASHUNITS } from '../consts/HASHUNITS';

export class CalculationService {
	constructor(){
		this.calculateDay.bind(this);
		this.reinvestCalc.bind(this);
	}
	
	static dayCalc(hashRate, unit, BTC, difficulty) {
		const blockReward = 12.5;
		const secondsPerDay = 86400;

		let hashSpeed = unit.speed * hashRate;
		let fees = hashRate * unit.fee;
		let feesInBTC = fees/BTC;

		let BTCPerDay = (blockReward * hashSpeed * secondsPerDay) / (difficulty * Math.pow(2,32));
		let USDPerDay = BTC * BTCPerDay;
		let USDPerDayWithFee = BTC * BTCPerDay - fees;
		let BTCPerDayWithFee = BTCPerDay - feesInBTC; 

		return {
			BTCPerDay: BTCPerDay,
			USDPerDay: USDPerDay,
			USDPerDayWithFee: USDPerDayWithFee,
			BTCPerDayWithFee: BTCPerDayWithFee,
			USDTotalFee: (USDPerDay - USDPerDayWithFee),
			BTCTotalFee: (BTCPerDay - BTCPerDayWithFee),
			hashRate: parseFloat(hashRate)
		}
	}

	static reinvestCalc(hashRate, unit, BTC, difficulty, days = 1, day = 0, calcDays = []) {
		let calcDay = this.dayCalc(hashRate, unit, BTC, difficulty);
		calcDays.push(calcDay);
		hashRate += (calcDay.USDPerDayWithFee / unit.USDPrice).toFixed(2) - 0;
		day++;
		return day == days ? calcDays : this.reinvestCalc(hashRate, unit, BTC, difficulty, days, day, calcDays);
	}
}