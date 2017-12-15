import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, FormLabel, FormInput, Button } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import moment from 'moment';

import { HASHFLARE_PRICES } from '../utils/HASHFLARE_PRICES';

class Projection extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 0
        }        
    }

    setDays(days){
        this.set
    }

    reinvest(){
        this.props.reinvest(this.state.days);
   }

    render(){
        return (
            <Card title="Future Projections" style={styles.container}>
                <FormLabel>Reinvest for ? days: </FormLabel>
                <FormInput 
                    keyboardType="numeric" 
                    onSubmitEditing={this.props.reinvest}
                    onChangeText={(days) => this.setDays(days)}/>
                <Button 
                    title='Submit' 
                    backgroundColor='#3D6DCC' 
                    onPress={this.props.reinvest} />
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { marginLeft: 5 },
    row: { height: 30 },
    container: { marginBottom: 50 }
  })

export default Projection;