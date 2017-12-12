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
            BTC: 16297.99,
            maintenanceFee: .35
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

    setSpeed(unit){
        let speed = 0;

        if (unit === "TH") {
            speed = 1000000000000;
        } else if (unit === "GH") {
            speed = 1000000000;
        } else if (unit === "MH") {
            speed = 1000000;
        }

        return speed;
    }

    calculate = () => {
        console.log(this.state);

        const hashRate = this.state.hashRate;
        const unit = this.state.unit;
        const speed = this.setSpeed(unit);
        const maintenanceFee = this.state.maintenanceFee;

        
    } 

    render() {
        return (
            <Card
                title='HELLO MATE'
            >
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
                <FormLabel>Power consumption (w)</FormLabel>
                <FormInput keyboardType="numeric" onChangeText={(power) => this.setPowerCom(power)}/>
                <FormLabel>Cost per KW/h ($)</FormLabel>
                <FormInput keyboardType="numeric" onChangeText={(cost) => this.setKWcost(cost)}/>
                <Button 
                    title='CALCULATE' 
                    backgroundColor='#3D6DCC' 
                    onPress={this.calculate} />
            </Card>
            <Card>
                <Text>: </Text>
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