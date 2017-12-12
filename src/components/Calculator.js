import React, { Component } from 'react';
import { View, Text,  StyleSheet, Picker } from 'react-native';
import { Header, Card, FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            hashRate: 0,
            unit: "TH",
            BTC: 0,            
            //ticker: {}
            dollarPerDay: 0,
            bitcoinPerDay: 0
        };
    }

    componentDidMount() {
        axios.get('https://blockchain.info/q/getdifficulty')
        .then( res => {
            this.state.difficulty = res.data;
        })
        .catch( err => console.log(err));


        axios.get('https://blockchain.info/ticker')
        .then( res => {
            //this.state.ticker = res.data;
            this.state.BTC = res.data.USD.last;
        })
        .catch( err => console.log(err));
    }
 
    componentDidUpdate(){
        console.log(this.state);    
    }

    setHashRate(hash){
        this.setState({
            hashRate: hash - 0
        });
    }

    setUnit(unit){
        this.setState({
            unit: unit
        });
    }

    setSpeed(unit){
        let speed = 0;

        if (unit === "TH") {
            speed = 1000000000000;
        } else if (unit === "GH") {
            speed = 1000000000;
        } else if (unit === "MH") {
            speed = 1000000;
        } else if (unit === "KH") {
            speed = 1000;
        }

        return speed;
    }

    calculateDay = () => {
        console.log(this.state);

        const hashRate = this.state.hashRate;
        const unit = this.state.unit;        
        const BTC = this.state.BTC;
        const speed = this.setSpeed(unit);
        const hashSpeed = speed * hashRate;
        const maintenanceFee = .35;
        const blockReward = 12.5;
        const difficulty = this.state.difficulty;
        // console.log("top:", blockReward * hashSpeed * 86400 );
        // console.log("Bottom: ", difficulty * Math.pow(2,32))

        let bitcoinPerDay = (blockReward * hashSpeed * 86400) / (difficulty * Math.pow(2,32));
        bitcoinPerDay = bitcoinPerDay.toFixed(8)
        let dollarPerDay = BTC*bitcoinPerDay;

        this.setState({
            bitcoinPerDay: bitcoinPerDay,
            dollarPerDay: dollarPerDay.toFixed(2)
        });

    } 

    render() {
        return (
            <View>
                <Card title='HELLO MATE'>
                    <View>
                        <View>
                            <FormLabel>Hashrate</FormLabel>
                            <FormInput keyboardType="numeric" onChangeText={(hash) => this.setHashRate(hash)}/>
                        </View>
                        <View>
                            <Picker selectedValue={this.state.unit} mode='dropdown' onValueChange = {(unit) => this.setUnit(unit)}>
                                <Picker.Item label = "TH/s" value = "TH" />
                                <Picker.Item label = "GH/s" value = "GH" />
                                <Picker.Item label = "MH/s" value = "MH" />
                            </Picker>
                        </View>
                    </View>
                    <Button 
                        title='CALCULATE' 
                        backgroundColor='#3D6DCC' 
                        onPress={this.calculateDay} />
                </Card>
                <Card>
                    <Text>1 BTC = { this.state.BTC }</Text>
                    <Text>Daily Earning: ${ this.state.dollarPerDay } ({ this.state.bitcoinPerDay })</Text>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flexWidth:{
        flex:1
    },
})


export default Calculator;


// H = Hashrate (hashes / second)
// D = Difficulty (Reference for values below)
// B = Reward per Block (Reference for value below)
// N = Number of days per month (default = 30)
// S = Number of seconds per day (S = 60 * 60 * 24 = 86400)

// N * B * H * 86400 / D * 2^32