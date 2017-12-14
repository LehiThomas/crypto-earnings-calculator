import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Picker } from 'react-native';
import { Header, Card, FormLabel, FormInput, Button } from 'react-native-elements';
import { BlockChainService } from '../services/BlockChainService';
import { HASHUNITS } from '../consts/HASHUNITS';

import Profits from './Profits';
import Projection from './Projection';
import Chart from './Chart';
import Form from './Form';

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            hashRate: 0,
            unit: HASHUNITS[0],
            BTC: 0,
            dollarPerDay: 0,
            bitcoinPerDay: 0,
            showTheThing: false
        };

        this.loadExternalData();

        this.setHashRate = this.setHashRate.bind(this);
        this.setUnit = this.setUnit.bind(this);
    }

    async loadExternalData(){
        this.state.difficulty = await BlockChainService.getDifficulty();
        this.state.BTC = await BlockChainService.getBTCPrice();
    }

    setHashRate(hash){
        this.setState({
            hashRate: hash - 0
        });
    }

    setUnit(unit){
        this.setState({unit});
    }

    calculateDay = () => {
        const hashRate = this.state.hashRate;
        const unit = this.state.unit;        
        const BTC = this.state.BTC;
        const blockReward = 12.5;
        const difficulty = this.state.difficulty;

        const hashSpeed = unit.speed * hashRate;
        const fees = hashRate * unit.fee;
        const feesInBTC = fees/BTC;

        let bitcoinPerDay = (blockReward * hashSpeed * 86400) / (difficulty * Math.pow(2,32));
        bitcoinPerDay = bitcoinPerDay;
        let dollarPerDay = BTC*bitcoinPerDay - fees;
        bitcoinPerDay = bitcoinPerDay - feesInBTC; 

        this.setState({
            bitcoinPerDay: bitcoinPerDay.toFixed(8),
            dollarPerDay: dollarPerDay.toFixed(2),
            showTheThing: true
        });
    } 

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Form unit={this.state.unit} setHash={this.setHashRate} setUnit={this.setUnit} calculate={this.calculateDay}/>
                { this.state.showTheThing && 
                <View>
                    <Profits BTC={this.state.BTC} dollarPerDay={this.state.dollarPerDay} bitcoinPerDay={this.state.bitcoinPerDay} />
                    <Projection 
                        dollarPerDay={this.state.dollarPerDay} 
                        bitcoinPerDay={this.state.bitcoinPerDay}
                        hashRate={this.state.hashRate}  />
                    <Chart />
                </View>
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100
    }
})


export default Calculator;


// H = Hashrate (hashes / second)
// D = Difficulty (Reference for values below)
// B = Reward per Block (Reference for value below)
// N = Number of days per month (default = 30)
// S = Number of seconds per day (S = 60 * 60 * 24 = 86400)

// N * B * H * 86400 / D * 2^32