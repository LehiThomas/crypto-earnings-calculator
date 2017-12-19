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
    let projections = props.reinvestmentData;
    let finalDay = projections.length - 1;

    return (
        <Card title="Reinvestment Projections" 
            containerStyle={styles.cardContainer} 
            titleStyle={styles.titleStyle}>
            <Text style={{marginBottom:10}}>If you reinvest {projections.length} days your projections are: </Text>
            <View style={styles.topBorder}></View>
            <View style={styles.projView}>
                <Text style={styles.projTextLeft}>Daily Earnings</Text>
                <Text style={styles.projTextRight}>${projections[finalDay].USDPerDayWithFee.toFixed(2)}</Text>
            </View>
            <View style={styles.topBorder}></View>
            <View style={styles.projView}>
                <Text style={styles.projTextLeft}>Projected Total Hashrate</Text>
                <Text style={styles.projTextRight}>{(projections[finalDay].hashRate).toFixed(2)}</Text>
            </View>
        </Card>)
}

export default ReinvestmentDescription;

