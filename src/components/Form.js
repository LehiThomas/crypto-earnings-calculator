import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { Card, FormLabel, FormInput, Button } from 'react-native-elements';
import { HASHUNITS } from '../consts/HASHUNITS';

class Form extends Component {
    constructor(props){
        super(props);
    }

    setHashRate(hash){
        this.props.setHash(hash);
    }

    setUnit(unit){
        this.props.setUnit(unit);
    }

    setDays(days){
        this.props.setDays(days);
    }

    render(){
        return (
            <Card title='Enter your Hashrate'>
                <View style={styles.formContainer}>
                    <View style={styles.formHashRate}>
                        <FormLabel>Hashrate</FormLabel>
                        <FormInput 
                            keyboardType="numeric" 
                            onChangeText={(hash) => this.setHashRate(hash)}/>
                    </View>
                    <View style={styles.pickerStyles} >
                        <Picker
                            selectedValue={this.props.unit}
                            mode='dropdown'
                            style={{padding:0}} 
                            onValueChange = {(unit) => this.setUnit(unit)}>
                                { HASHUNITS.map((unit) => <Picker.Item label={unit.label} value={unit} key={unit}/>) }
                        </Picker>
                    </View>                    
                </View>
                <View style={styles.daysForm} >
                        <FormLabel># of Days to Reinvest: </FormLabel>
                        <FormInput 
                            keyboardType="numeric" 
                            onChangeText={(days) => this.setDays(days)}/>
                </View>
                <Button 
                    title='CALCULATE'
                    backgroundColor='#3D6DCC'
                    onPress={this.props.reinvest} />
            </Card>
        );
    }
}

const styles = StyleSheet.create({
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
    daysForm: {
        flex: 1,
        marginBottom: 20
    }
})

export default Form;