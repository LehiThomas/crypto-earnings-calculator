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
			BTCPerDay: BTCPerDay.toFixed(8),
			USDPerDay: USDPerDay.toFixed(2),
			USDPerDayWithFee: USDPerDayWithFee.toFixed(2),
			BTCPerDayWithFee: BTCPerDayWithFee.toFixed(8),
			USDTotalFee: (USDPerDay - USDPerDayWithFee).toFixed(2),
			BTCTotalFee: (BTCPerDay - BTCPerDayWithFee).toFixed(8)
		}
	}

	static reinvestCalc(hashRate, unit, BTC, difficulty, days = 1, day = 0, calcDays = []) {
		let calcDay = this.dayCalc(hashRate, unit, BTC, difficulty);
		calcDays.push(calcDay);
		hashRate += calcDay.USDPerDayWithFee / unit.USDPrice;
		day++;
		return day === days ? calcDays : this.reinvestCalc(hashRate, unit, BTC, difficulty, days, day, calcDays);
	}
}