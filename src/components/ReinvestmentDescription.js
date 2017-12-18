import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

function ReinvestmentDescription(props) {
    let projections = props.reinvestmentData;
    let finalDay = projections.length - 1;

    return (
        <Card title="Reinvestment Projections">
            <Text>If you reinvested {projections.length} days your projections are: </Text>
            <Text>Daily Earnings: ${projections[finalDay].USDPerDayWithFee.toFixed(2)}</Text>
            <Text>Projected Total Hashrate: {(projections[finalDay].hashRate).toFixed(2)}</Text>
        </Card>)
}

export default ReinvestmentDescription;