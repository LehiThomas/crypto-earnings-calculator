import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Picker } from 'react-native';
import { Header, Card, FormLabel, FormInput, Button } from 'react-native-elements';
import { BlockChainService } from '../services/BlockChainService';
import { CalculationService } from '../services/CalculationService';
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
        let calcRes = CalculationService.dayCalc(
            this.state.hashRate,
            this.state.unit,
            this.state.BTC,
            this.state.difficulty
        );
        calcRes.showTheThing = true;

        let days = 10;
        let test = CalculationService.reinvestCalc(
            this.state.hashRate,
            this.state.unit,
            this.state.BTC,
            this.state.difficulty,
            days
        );

        console.log(test);

        this.setState(calcRes);
    } 

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Form unit={this.state.unit} setHash={this.setHashRate} setUnit={this.setUnit} calculate={this.calculateDay}/>
                { this.state.showTheThing && 
                <View>
                    <Profits BTC={this.state.BTC} dollarPerDay={this.state.USDPerDayWithFee} bitcoinPerDay={this.state.BTCPerDayWithFee} />
                    <Projection 
                        dollarPerDay={this.state.USDPerDayWithFee} 
                        bitcoinPerDay={this.state.BTCPerDayWithFee}
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
    },
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    formHashRate:{
        flex: 1,
        marginBottom: 20
    },
    pickerStyles:{
        flex: .6,
        marginBottom: 15
    },
})


export default Calculator;


// H = Hashrate (hashes / second)
// D = Difficulty (Reference for values below)
// B = Reward per Block (Reference for value below)
// N = Number of days per month (default = 30)
// S = Number of seconds per day (S = 60 * 60 * 24 = 86400)

// N * B * H * 86400 / D * 2^32