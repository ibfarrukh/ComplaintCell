import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RadioButton } from 'react-native-paper';

const Departments = ({ navigation }) => {

    return (
        <ScrollView style={styles.mainContainer} >
            <View>
                <Image
                    source={require('../Assets/Header2.png')}
                    resizeMode='contain'
                    style={styles.image}
                />
                <View style={styles.headingContainer}>
                    <View style={{ paddingLeft: 40 }} />
                    <Text style={styles.heading}>Departments</Text>
                    <View style={{ left: 0, top: 0 }}>
                        <TouchableOpacity
                            onPress={() => console.log("Notifications Clicked")}
                        >
                            <Image
                                source={require('../Assets/bell_white.png')}
                                resizeMode="contain"
                                style={{ height: 25, width: 25 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.container} >
                <View style={styles.cardContainer} >
                    {/* 
                        card 01
                        sui gas
                    */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ComplaintForm")}
                    >
                        <View style={styles.card}>
                            <Image
                                source={require('../Assets/Departments/Sui_logo.png')}
                                resizeMode='contain'
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Department 01
                            </Text>
                            <Text style={styles.cardText}>
                                ڈیپارٹمنٹ 1
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* 
                        card 02
                        iesco
                    */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ComplaintForm")}
                    >
                        <View style={styles.card}>
                            <Image
                                source={require('../Assets/Departments/iesco.png')}
                                resizeMode='contain'
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Department 02
                            </Text>
                            <Text style={styles.cardText}>
                                ڈیپارٹمنٹ 2
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.seperator} /> */}
            </View>
            <View style={styles.container} >
                <View style={styles.cardContainer} >
                    {/* 
                        card 03
                        NADRA
                    */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ComplaintForm")}
                    >
                        <View style={styles.card}>
                            <Image
                                source={require('../Assets/Departments/nadra.png')}
                                resizeMode='contain'
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Department 03
                            </Text>
                            <Text style={styles.cardText}>
                                ڈیپارٹمنٹ 3
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* 
                        card 04
                        Islamabad Police
                    */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ComplaintForm")}
                    >
                        <View style={styles.card}>
                            <Image
                                source={require('../Assets/Departments/police.png')}
                                resizeMode='contain'
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Department 04
                            </Text>
                            <Text style={styles.cardText}>
                                ڈیپارٹمنٹ 4
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.seperator} /> */}
            </View>
            <View style={styles.container} >
                <View style={styles.cardContainer} >
                    {/* 
                        card 05
                        ITP
                    */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ComplaintForm")}
                    >
                        <View style={styles.card}>
                            <Image
                                source={require('../Assets/Departments/ITP.png')}
                                resizeMode='contain'
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Department 05
                            </Text>
                            <Text style={styles.cardText}>
                                ڈیپارٹمنٹ 5
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* 
                        card 06
                        CDA
                    */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ComplaintForm")}
                    >
                        <View style={styles.card}>
                            <Image
                                source={require('../Assets/Departments/CDA.png')}
                                resizeMode='contain'
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Department 06
                            </Text>
                            <Text style={styles.cardText}>
                                ڈیپارٹمنٹ 6
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.seperator} /> */}
            </View>
            <View style={styles.container} >
                <View style={styles.cardContainer} >
                    {/* 
                        card 07
                        MCI
                    */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ComplaintForm")}
                    >
                        <View style={styles.card}>
                            <Image
                                source={require('../Assets/Departments/MCI.png')}
                                resizeMode='contain'
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Department 07
                            </Text>
                            <Text style={styles.cardText}>
                                ڈیپارٹمنٹ 7
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* 
                        card 08
                        Federal Gov
                    */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ComplaintForm")}
                    >
                        <View style={styles.card}>
                            <Image
                                source={require('../Assets/Departments/gov_pak.png')}
                                resizeMode='contain'
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Department 08
                            </Text>
                            <Text style={styles.cardText}>
                                ڈیپارٹمنٹ 8
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.seperator} /> */}
            </View>
            <View style={styles.container} >
                <View style={styles.cardContainer} >
                    {/* 
                        card 09
                        Punjab Gov
                    */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ComplaintForm")}
                    >
                        <View style={styles.card}>
                            <Image
                                source={require('../Assets/Departments/gov_punjab.png')}
                                resizeMode='contain'
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Department 09
                            </Text>
                            <Text style={styles.cardText}>
                                ڈیپارٹمنٹ 9
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* 
                        card 10
                        FBR
                    */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ComplaintForm")}
                    >
                        <View style={styles.card}>
                            <Image
                                source={require('../Assets/Departments/FBR.png')}
                                resizeMode='contain'
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>
                                Department 10
                            </Text>
                            <Text style={styles.cardText}>
                                ڈیپارٹمنٹ 10
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.seperator} />
        </ScrollView>
    )
}

export default Departments;

const styles = StyleSheet.create({
    image: {
        width: wp('100%'),
        height: 180.5
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        marginTop: 10,
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center'
    },
    seperator: {
        height: hp("1%")
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    card: {
        width: wp('30%'),
        alignItems: 'center',
        padding: hp('1%'),
        // backgroundColor: '#f4f4f4',
        elevation: 1
    },
    cardImage: {
        height: 90,
        width: 90
    },
    cardText: {
        fontSize: 16,
        color: "#000"
    },
    heading: {
        fontSize: 25,
        color: 'white'
    },
    headingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 70,
        paddingRight: 15,
    }
})