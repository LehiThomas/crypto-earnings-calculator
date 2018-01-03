import React, { Component } from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import { Card, FormLabel, FormInput, Button } from 'react-native-elements';
import colors from '../styles/colors'

class Form extends Component {
    constructor(props){
        super(props);

        this.state= {
            coins: this.props.coins,
            coin: this.props.coins[1],
            currentPrice :this.props.coins[1].price_usd
        }

        this.setCoinAmount = this.setCoinAmount.bind(this);
        this.setCoin = this.setCoin.bind(this);
        this.setCurrentPrice = this.setCurrentPrice.bind(this);
        this.setOriginalCost = this.setOriginalCost.bind(this);
    }

    setCoinAmount(coinAmount){
        this.props.setCoinAmount(coinAmount);
    }

    setCoin(coin){
        this.setState({
            currentPrice: coin.price_usd
        })
        this.props.setCoin(coin);
    }

    setOriginalCost(cost){
        this.props.setOriginalCost(cost);
    }

    setCurrentPrice(currentPrice){
        this.setState({ currentPrice })
        this.props.setCurrentPrice(this.state.currentPrice);
    }

    onSubmit = () => {
        this.props.figureItOut()
    }

    render(){
        return (
            <Card title='Enter your Hashrate'
                containerStyle={styles.cardContainer}
                titleStyle={styles.titleStyle} >
                <View style={styles.pickerStyles} >
                    <Picker
                        selectedValue={this.props.coins[1].symbol}
                        mode='dropdown'
                        style={styles.picker}
                        onValueChange = {(coin) => this.setCoin(coin)} >
                        { this.props.coins.map((coin) => <Picker.Item label={coin.symbol} value={coin} key={coin.id}/>) }
                    </Picker>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.formHashRate}>
                        <FormLabel labelStyle={styles.formLabel}>Coin Amount Owned</FormLabel>
                        <FormInput
                            containerStyle={styles.formInput}
                            underlineColorAndroid={colors.outlines}
                            keyboardType="numeric"
                            onChangeText={(coins) => this.setCoinAmount(coins)}/>
                    </View>
                </View>
                <View style={styles.daysForm}>
                        <FormLabel labelStyle={styles.formLabel}>Price at Purchase: </FormLabel>
                        <FormInput
                            containerStyle={styles.formInput}
                            inputStyle={{}}
                            keyboardType="numeric"
                            onChangeText={(cost) => this.setOriginalCost(cost)}/>
                </View>
                <View style={styles.daysForm}>
                        <FormLabel labelStyle={styles.formLabel}>Current Price: </FormLabel>
                        <FormInput
                            value={this.state.currentPrice}
                            containerStyle={styles.formInput}
                            inputStyle={{}}
                            keyboardType="numeric"
                            onChangeText={(currentPrice) => this.setCurrentPrice(currentPrice)}/>
                </View>
                <View style={styles.buttonView} >
                    <Button
                        title='Calculate'
                        backgroundColor={colors.backgrounds}
                        buttonStyle={styles.button}
                        onPress={this.onSubmit}
                        fontSize={18}  />
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 5,
        marginBottom: 0
    },
    titleStyle:{
        fontSize: 15,
    },
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    formLabel:{
        height: 16,
        marginTop: 0
    },
    formInput:{
         height:40,
         marginBottom:10
    },
    formHashRate:{
        flex: 1,
    },
    button:{
        width: 200,
        borderRadius: 4,
        borderColor: colors.outlines,
        borderWidth: 1.2
    },
    buttonView:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:0
    },
    pickerStyles:{
        flex: .5,
        padding: 0,
        borderRadius: 5,
        borderColor: colors.outlines,
        borderWidth: 1.3,
        marginBottom: 10
    },
    daysForm: {
        width: '63%',
        marginBottom: 5
    },
    picker:{
        padding: 0,
        margin: 0
    }
})

export default Form;