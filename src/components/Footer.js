import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    
    return (
        <View style={styles.footerContainer} >
            <Text style={styles.footer} >https://hashflare.io/r/B855B218</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        display: "flex",
        alignItems: "center"
    },
    footer: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: 'center'
    },

})

export default Footer;