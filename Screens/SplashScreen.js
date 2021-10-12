import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../Assets/App_logo.png')}
                    resizeMode='contain'
                    style={styles.logo}
                />
            </View>
            <View style={{ paddingBottom: 190 }}>
                <Text style={styles.text}>
                    PM Complaint
                </Text>
                <Text style={styles.text}>
                    Facilitation Cell
                </Text>
            </View>
            <View style={styles.footer}>
                <Image
                    source={require('../Assets/Footer.png')}
                    resizeMode='contain'
                    style={styles.footerImage}
                />
            </View>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        // flex: 1,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    footer: {
        height: "30%",
        width: "100%",
        // backgroundColor: 'red',
        justifyContent: 'flex-end',
        // flex: 1
    },
    footerImage: {
        width: '100%',
        height: 390
    }
})