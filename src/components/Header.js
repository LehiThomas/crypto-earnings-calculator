import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    let BTC = props.BTC;
    
    return (
        <View style={headerContainer}>
            <Text style={header}>Bitcoin Reinvest Mining Calculator</Text>
            <Text style={subHeader}>1 BTC = ${BTC}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        paddingTop: 30,
        paddingBottom: 10,
        alignItems: "center",
        backgroundColor: '#3D6DCC',
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        color: 'white'
    },
    subHeader: {
        fontWeight: "bold",
        fontSize: 15,
        color: 'white'
    }
})

const { headerContainer, header, subHeader } = styles;

export default Header;