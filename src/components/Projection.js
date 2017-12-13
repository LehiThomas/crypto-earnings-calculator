import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class Projection extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            today: new Date()
        }
        console.log(this.state);
    }

    render(){
        const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
        const tableData = [
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd'],
        ];

        return (
            <Card title="Future Projections">
                <Table>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
                </Table>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { marginLeft: 5 },
    row: { height: 30 }
  })

export default Projection;