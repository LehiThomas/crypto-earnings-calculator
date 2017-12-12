import React, { Component } from 'react';
import { View, Text,  StyleSheet, Picker } from 'react-native';
import { Header, Card, FormLabel, FormInput, Button } from 'react-native-elements';

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            hashRate: 0,
            unit: "TH",
            speed: 1000000000000,
            powerConsumption: 0,
            kwCost: 0
        };
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

    setPowerCom(power){
        this.setState({
            powerConsumption: power
        });
    }

    setKWcost(cost){
        this.setState({
            kwCost: cost
        });
    }

    setSpeed(){
        let unit = this.state.unit;
        if (unit === "TH") {
            speed = 1000000000000;
        } else if (unit === "GH") {
            speed = 1000000000;
        } else if (unit === "MH") {
            speed = 1000000;
        }

        this.setState({
            speed: speed
        });
    }

    render() {
        return (
            <Card
                title='HELLO MATE'
            >
            <View>
                <View>
                    <FormLabel>Hashrate</FormLabel>
                    <FormInput onChangeText={(hash) => this.setHashRate(hash)}/>
                </View>
                <View>
                    <Picker selectedValue={this.state.unit} mode='dropdown' onValueChange = {(unit) => this.setUnit(unit)}>
                        <Picker.Item label = "TH/s" value = "TH" />
                        <Picker.Item label = "GH/s" value = "GH" />
                        <Picker.Item label = "MH/s" value = "MH" />
                    </Picker>
                </View>
            </View>  
                <FormLabel>Power consumption (w)</FormLabel>
                <FormInput onChangeText={(power) => this.setPowerCom(power)}/>
                <FormLabel>Cost per KW/h ($)</FormLabel>
                <FormInput onChangeText={(cost) => this.setKWcost(cost)}/>
                <Button title='CALCULATE' backgroundColor='#3D6DCC' />
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    flexWidth:{
        flex:1
    },
})


export default Calculator;