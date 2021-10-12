import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const ForgetPassword = ({ navigation }) => {

    const [cnic, setCnic] = React.useState('')

    return (
        <View
            style={styles.mainContainer}
        >
            <View
                style={styles.headingContainer}
            >
                <Text
                    style={styles.headingText}
                >
                    Are you sure, you forgot your password?
                </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text
                        style={styles.text}
                    >
                        enter your cnic
                    </Text>
                    <Text
                        style={styles.text}
                    >
                        اپنا قومی شناختی کارڈ نمبر لکھیں
                    </Text>
                </View>
                <View style={styles.separator} />
                <TextInput
                    value={cnic}
                    onChangeText={(cnic) => setCnic(cnic)}
                    placeholder={'e.g 11111-1111111-1'}
                    style={styles.input}
                    placeholderTextColor="#AFAFAF"
                />
                <View style={styles.separator} />
                <View style={styles.textContainer}>
                    <Text
                        style={styles.text}
                    >
                        enter your mobile number
                    </Text>
                    <Text
                        style={styles.text}
                    >
                        اپنا موبائل نمبر لکھیں
                    </Text>
                </View>
                <View style={styles.separator} />
                <TextInput
                    value={cnic}
                    onChangeText={(cnic) => setCnic(cnic)}
                    placeholder={'e.g 11111-1111111-1'}
                    style={styles.input}
                    placeholderTextColor="#AFAFAF"
                />
            </View>
        </View>
    )
}

export default ForgetPassword;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: 'white'
    },
    headingContainer: {
        padding: 50,
        // backgroundColor: 'red'
    },
    headingText: {
        color: '#29C17A',
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    container: {
        marginHorizontal: 20,
        // backgroundColor: 'red',
        flex: 1
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingBottom: 10
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase'
    },
    input: {
        width: "100%",
        padding: 10,
        // marginTop: 20,
        // marginBottom: 10,
        borderWidth: 1,
        borderColor: '#8D8D8D',
        borderRadius: 5,
        color: 'black'
    },
    separator: {
        height: 10
    }
})