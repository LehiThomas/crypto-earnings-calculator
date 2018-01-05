import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { BlockChainService } from '../services/BlockChainService';
import { CalculationService } from '../services/CalculationService';
import { COINS } from '../consts/COINS';

import Form from './Form';
import ReinvestmentDescription from './ReinvestmentDescription';

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            coins: this.props.coins,
            showTheThing: false,
            earningsData: {},
            currentPrice: this.props.coins[0].price_usd,
            coinAmount: 0,
            originalCost: 0,
            coin: this.props.coins[0]
        };

        this.setCoinAmount = this.setCoinAmount.bind(this);
        this.setCoin = this.setCoin.bind(this);
        this.setCurrentPrice = this.setCurrentPrice.bind(this);
        this.setOriginalCost = this.setOriginalCost.bind(this);
    }

    componentDidMount(){
        this.setState({
            coins: this.props.coins
        });
    }

    setCoinAmount(coinAmount){
        this.setState({ coinAmount });
    }

    setCoin(coin){
        console.log("here I am", coin)
        this.setState({ coin });
    }

    setCurrentPrice(currentPrice){
        console.log("current price called", currentPrice)
        this.setState({ currentPrice });
    }

    setOriginalCost(originalCost){
        this.setState({ originalCost });
    }

    figureItOut = () => {
        console.log("figuring it out...")
        console.log(this.state.currentPrice,
            this.state.coin,)

        let earningsData = CalculationService.calculateEarnings(
            this.state.currentPrice,
            this.state.originalCost,
            this.state.coin,
            this.state.coinAmount
        );

        console.log("data", earningsData)
        this.setState({
            earningsData,
            showTheThing: true
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Form
                    coins={this.state.coins}
                    setOriginalCost={this.setOriginalCost}
                    setCurrentPrice={this.setCurrentPrice}
                    setCoinAmount={this.setCoinAmount}
                    setCoin={this.setCoin}
                    figureItOut={this.figureItOut} />
                { this.state.showTheThing &&
                <View>
                    <ReinvestmentDescription earningsData={this.state.earningsData} />
                </View>
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
})


export default Calculator;