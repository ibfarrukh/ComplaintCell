import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Personal from './Personal';
import Contact from './Contact';

const FirstRoute = () => (
    <Personal />
);

const SecondRoute = () => (
    <Contact />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

const renderTabBar = (props) => (
    <TabBar
        {...props}
        style={{
            backgroundColor: "#fff",
            shadowOpacity: 1,
            elevation: 0,
        }}
        labelStyle={{ fontSize: 14, color: "#29C17A", textTransform: 'uppercase' }}
        indicatorStyle={{ backgroundColor: "#29C17A" }}
        inactiveColor="#29C17A"
        activeColor="#29C17A"
    />
);


const Profile = ({ navigation }) => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Personal' },
        { key: 'second', title: 'Contact' },
    ]);

    return (
        <View style={styles.mainContainer}>
            <View>
                <Image
                    source={require('../Assets/Header2.png')}
                    resizeMode='contain'
                    style={styles.image}
                />
                <View style={styles.headingContainer}>
                    <View style={{ paddingLeft: 40 }} />
                    <Text style={styles.heading}>My Profile</Text>
                    <View style={{ left: 0, top: 0 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Notifications")}
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
            <TabView
                indicatorStyle={{ backgroundColor: 'white' }}
                style={{ backgroundColor: 'pink' }}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: wp('100%'),
        height: 180.5
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
    },
    heading: {
        fontSize: 25,
        color: 'white'
    },
})
