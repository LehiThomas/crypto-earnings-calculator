import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo';

const Header = (props) => {
    let BTC = props.BTC;
    
    return (
        <View style={headerContainer}>
        <LinearGradient
          colors={['#052332', '#063544']}
          style={styles.gradient}>
            <Text style={header}>Bitcoin Reinvest Mining Calculator</Text>
            <View style={subHeaderContainer}>
                <Image
                    style={styles.coinImg}
                    source={require('../../assets/bitcoin.png')}
                    />
                <Text style={subHeader}>1 BTC = ${BTC}</Text>
            </View>   
            </LinearGradient>         
        </View>
    )
}

const styles = StyleSheet.create({
    gradient:{
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 10,
        width: '100%'
    },
    headerContainer: {
        display: "flex",       
        alignItems: "center",
        backgroundColor: '#063544',
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