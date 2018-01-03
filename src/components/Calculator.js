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
            reinvestmentData: [],
            currentPrice: 0,
            coinAmount: 0,
            originalCost: 0,
            coin: {}
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
        this.setState({coin});
    }

    setCurrentPrice(currentPrice){
        this.setState({currentPrice});
    }

    setOriginalCost(originalCost){
        this.setState({originalCost});
    }

    figureItOut = () => {
        console.log("Figuring it out...")
    }

    render() {
        console.log(this.state.coins)
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