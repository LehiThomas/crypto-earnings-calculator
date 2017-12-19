import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { AdMobBanner, PublisherBanner, AdMobRewarded } from 'expo';
import { config } from '../config'

const Footer = () => {

    return (
        <View style={styles.footerContainer} >
            <Text 
                style={styles.footer} 
                onPress={() => Linking.openURL('https://hashflare.io/r/B855B218')}>
                https://hashflare.io/r/B855B218
            </Text>
            <AdMobBanner
                bannerSize="banner"
                adUnitID="{config.adunit}"
                testDeviceID="EMULATOR"
                didFailToReceiveAdWithError={this.bannerError} />
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
        textAlign: 'center',
        color: 'blue',
        marginBottom: 10
    },

})

export default Footer;