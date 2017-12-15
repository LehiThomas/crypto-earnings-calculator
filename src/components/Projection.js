import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import moment from 'moment';

import { HASHFLARE_PRICES } from '../utils/HASHFLARE_PRICES';

class Projection extends Component{
    constructor(props){
        super(props);
        this.state = {
            today: moment().format("MMM Do"),
            earnedPerDay: this.props.dollarPerDay - 0,
            tableData: []
        }        
    }

    getNewDailyEarnings = (yesterday) => {
        return (yesterday / .99).toFixed(2);
    }

    getNewHashRate(index){
        for (let i = 0; i < HASHFLARE_PRICES.length; i++) {
            if(this.state.tableData[index][1] == HASHFLARE_PRICES[i].cost){
                this.state.tableData[index][2] = HASHFLARE_PRICES[i].th;
            } else if(this.state.tableData[index][1] > HASHFLARE_PRICES[i].cost && this.state.tableData[index][1] < HASHFLARE_PRICES[i+1].cost) {
                this.state.tableData[index][2] = HASHFLARE_PRICES[i].th;
            }
        }
    }

    createProjectionsByDay = () => {
        this.state.tableData[0] = []
        this.state.tableData[0][0] = this.state.today;   
        this.state.tableData[0][1] = this.state.earnedPerDay;
        this.state.tableData[0][2] = this.getNewHashRate(0);

        for (let index = 1; index < 15; index++) {
            this.state.tableData[index] = [];
            this.state.tableData[index][0] = moment().add(index, 'd').format("MMM Do");

            this.state.tableData[index][1] = this.getNewDailyEarnings(this.state.tableData[index-1][1]);
    
            this.getNewHashRate(index);
        }
    }

    render(){
        const tableHead = ['Date', '$/Day', 'TH/s'];
        const tableData = [
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd'],
        ];
        this.createProjectionsByDay();
        return (
            <Card title="Future Projections" style={styles.container}>
                <Table>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={this.state.tableData} style={styles.row} textStyle={styles.text}/>
                </Table>
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