import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = (props) => {
    let BTC = props.BTC;
    
    return (
        <View style={headerContainer}>
            <Text style={header}>Bitcoin Reinvest Mining Calculator</Text>
            <View style={subHeaderContainer}>
                <Image
                    style={styles.coinImg}
                    source={require('../../assets/bitcoin.png')}
                    />
                <Text style={subHeader}>1 BTC = ${BTC}</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        paddingTop: 30,
        paddingBottom: 10,
        alignItems: "center",
        backgroundColor: '#063040',
    },
    subHeaderContainer:{
        display: "flex",
        flexDirection: 'row',
        marginBottom: 10
    },
    coinImg:{
        width:16,
        height:16,
        marginRight: 3,
        marginTop: 4
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        color: 'white',
        marginBottom: 10
    },
    subHeader: {
        fontWeight: "bold",
        fontSize: 17,
        color: 'white'
    }
})

const { headerContainer, header, subHeader, subHeaderContainer } = styles;

export default Header;