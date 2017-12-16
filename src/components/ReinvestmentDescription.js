import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

function ReinvestmentDescription(props) {
    console.log(props.reinvestmentData)
    let projections = props.reinvestmentData;
    let finalDay = projections.length - 1;

    return (
        <Card>
            <Text>If you reinvested {projections.length} days your projections are: </Text>
            <Text>Daily Earnings: ${projections[finalDay].USDPerDayWithFee.toFixed(2)}</Text>
            <Text>Projected Total Hashrate: {projections[finalDay].hashRate}</Text>
        </Card>)
}

export default ReinvestmentDescription;