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
import ReinvestmentDescription from './ReinvestmentDescription';

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            hashRate: 0,
            unit: HASHUNITS.find(unit => unit.key = "TH"),
            BTC: 0,
            dollarPerDay: 0,
            bitcoinPerDay: 0,
            showTheThing: false,
            reinvestmentData: [],
            days: 0
        };

        this.loadExternalData();

        this.setHashRate = this.setHashRate.bind(this);
        this.setUnit = this.setUnit.bind(this);
        this.setDays = this.setDays.bind(this);
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

    setDays(days){
        this.setState({days});
    }

    // calculateDay = () => {
    //     let calcRes = CalculationService.dayCalc(
    //         this.state.hashRate,
    //         this.state.unit,
    //         this.state.BTC,
    //         this.state.difficulty
    //     );

    //     this.setState({
    //         ...calcRes,
    //         dollarPerDay: calcRes.USDPerDayWithFee,
    //         bitcoinPerDay: calcRes.BTCPerDayWithFee,
    //         showTheThing: true
    //     });

    //     this.reinvest();
    // } 

    reinvest = () => {
        let reinvestmentData = CalculationService.reinvestCalc(
            this.state.hashRate,
            this.state.unit,
            this.state.BTC,
            this.state.difficulty,
            this.state.days
        );

        this.setState({
            reinvestmentData,
            showTheThing: true
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Form 
                    BTC={this.state.BTC} 
                    unit={this.state.unit} 
                    setHash={this.setHashRate} 
                    setUnit={this.setUnit} 
                    setDays={this.setDays} 
                    reinvest={this.reinvest} />
                { this.state.showTheThing && 
                <View>
                    {/* <Profits 
                        BTC={this.state.BTC} 
                        dollarPerDay={this.state.USDPerDayWithFee} 
                        bitcoinPerDay={this.state.BTCPerDayWithFee} /> */}
                    <ReinvestmentDescription reinvestmentData={this.state.reinvestmentData} />
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