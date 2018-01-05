import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import colors from '../styles/colors'

const styles = StyleSheet.create({
    cardContainer: {
        margin: 5,
    },
    projView:{
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    projTextLeft: {
        fontWeight: "bold",
        fontSize: 13,
    },
    projTextRight: {
        fontWeight: "bold",
        fontSize: 13,
        color: colors.gold,
    },
    topBorder: {
        backgroundColor: colors.grey5,
        height: 1,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
    },
    titleStyle:{
        fontSize: 15,
    }
})

function ReinvestmentDescription(props) {
    let earnings = props.earningsData.ROI;
    let difference = props.earningsData.difference
    let name = props.earningsData.name

    return (
        <Card title="Total Earnings" 
            containerStyle={styles.cardContainer} 
            titleStyle={styles.titleStyle}>
            <Text style={{marginBottom:10}}>Your Return On {name} is: </Text>
            <View style={styles.topBorder}></View>
            <View style={styles.projView}>
                <Text style={styles.projTextLeft}>ROI</Text>
                <Text style={styles.projTextRight}>${earnings.toFixed(2)}</Text>
            </View>
            <View style={styles.topBorder}></View>
            <View style={styles.projView}>
                <Text style={styles.projTextLeft}>Individual Coin Increase</Text>
                <Text style={styles.projTextRight}>{difference.toFixed(2)}</Text>
            </View>
        </Card>)
}

export default ReinvestmentDescription;

