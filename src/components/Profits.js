import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class Profits extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    perWeek = (amount) => {
        return amount * 7;
    }

    perMonth = (amount) => {
        return amount * 30;
    }

    perYear = (amount) => {
        return amount * 365;
    }

    render(){
        let cardTitle = `1 BTC = ${ this.props.BTC }`;

        const tableHead = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
        const tableData = [
          ['$'+this.props.dollarPerDay, '$'+this.perWeek(this.props.dollarPerDay).toFixed(2), 
            '$'+this.perMonth(this.props.dollarPerDay).toFixed(2), '$'+this.perYear(this.props.dollarPerDay).toFixed(2)],
          [this.props.bitcoinPerDay, this.perWeek(this.props.bitcoinPerDay).toFixed(6), 
            this.perMonth(this.props.bitcoinPerDay).toFixed(6), this.perYear(this.props.bitcoinPerDay).toFixed(4)],
        ];

        return (           
            <View> 
                <Card title={cardTitle} >
                    <Text>Daily: ${ this.props.dollarPerDay } (Ƀ { this.props.bitcoinPerDay })</Text>
                    <Text>Weekly: ${ this.perWeek(this.props.dollarPerDay).toFixed(2) } (Ƀ { this.perWeek(this.props.bitcoinPerDay).toFixed(8) })</Text>
                    <Text>Monthly: ${ this.perMonth(this.props.dollarPerDay).toFixed(2) } (Ƀ { this.perMonth(this.props.bitcoinPerDay).toFixed(8) })</Text>
                    <Text>Yearly: ${ this.perYear(this.props.dollarPerDay).toFixed(2) } (Ƀ { this.perYear(this.props.bitcoinPerDay).toFixed(8) })</Text>
                </Card>
                <Card title={cardTitle} >
                    <Table>
                        <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
                    </Table>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { marginLeft: 5 },
    row: { height: 30 }
});

export default Profits;