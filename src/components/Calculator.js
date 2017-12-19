import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { BlockChainService } from '../services/BlockChainService';
import { CalculationService } from '../services/CalculationService';
import { HASHUNITS } from '../consts/HASHUNITS';

import Form from './Form';
import ReinvestmentDescription from './ReinvestmentDescription';

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            hashRate: 0,
            unit: HASHUNITS.find(unit => unit.key = "TH"),
            BTC: this.props.BTC,
            dollarPerDay: 0,
            bitcoinPerDay: 0,
            showTheThing: false,
            reinvestmentData: [],
            days: 1
        };

        this.loadExternalData();

        this.setHashRate = this.setHashRate.bind(this);
        this.setUnit = this.setUnit.bind(this);
        this.setDays = this.setDays.bind(this);
    }

    componentDidMount(){
        this.setState({
            BTC: this.props.BTC
        });
    }

    async loadExternalData(){
        this.state.difficulty = await BlockChainService.getDifficulty();
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
                    <ReinvestmentDescription reinvestmentData={this.state.reinvestmentData} />
                </View>
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
})


export default Calculator;