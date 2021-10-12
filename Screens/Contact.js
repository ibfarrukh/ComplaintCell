import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const Personal = () => {

    const [province, setProvince] = React.useState('');
    const [district, setDistrict] = React.useState('');
    const [tehsil, setTehsil] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [landline, setLandline] = React.useState('');
    const [address, setAddress] = React.useState('');
    return (
        <ScrollView style={styles.mainContainer}>
            <View
                style={styles.Container}
            >
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                        <Text style={styles.text}>
                            Province
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            صوبہ
                        </Text>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        value={province}
                        onChangeText={(province) => setProvince(province)}
                        placeholder={'Province'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.separator} />
                {/* ONE DONE */}
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                        <Text style={styles.text}>
                            District
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            ضلع
                        </Text>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        value={district}
                        onChangeText={(district) => setDistrict(district)}
                        placeholder={'District'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.separator} />
                {/* TWO DOWN */}
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                        <Text style={styles.text}>
                            Tehsil
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            تحصیل
                        </Text>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        value={tehsil}
                        onChangeText={(tehsil) => setTehsil(tehsil)}
                        placeholder={'Tehsil'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.separator} />
                {/* THREE DOWN */}
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                        <Text style={styles.text}>
                            Email (VERIFIED)
                        </Text>
                        <Image
                            source={require('../Assets/check.png')}
                            resizeMode='contain'
                            style={{
                                height: 13,
                                width: 13,
                                paddingLeft: 20
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            ای میل (منظور شدہ)
                        </Text>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        placeholder={'e.g someone@something.com'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.separator} />
                {/* FOUR DOWN */}
                <View style={styles.separator} />
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.text}>
                            Landline #
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            ٹیلیفون نمبر
                        </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        value={landline}
                        onChangeText={(landline) => setLandline(landline)}
                        placeholder={'e.g 051-1234567'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.separator} />
                {/* FIVE DOWN */}
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                        <Text style={styles.text}>
                            Adress
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            پتہ
                        </Text>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        value={address}
                        onChangeText={(address) => setAddress(address)}
                        placeholder={'Address'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.separator} />
                {/* SIX DOWN */}
                <TouchableOpacity
                // onPress={() => navigation.navigate('Tabs')}
                >
                    <View style={styles.button}>
                        <Text style={{ color: '#fff', fontSize: 18 }} >UPDATE</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.separator} />
            </View>
        </ScrollView>
    )
};

export default Personal;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white'
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    Container: {
        paddingHorizontal: 20
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        textTransform: "uppercase",
        color: "#29C17A"
    },
    input: {
        width: "100%",
        height: 50,
        padding: 10,
        // marginTop: 20,
        // marginBottom: 10,
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 5,
        color: 'black'
    },
    separator: {
        width: '100%',
        paddingVertical: 5,
        // backgroundColor: "red"
    },
    button: {
        height: 50,
        backgroundColor: '#29C17A',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
})