import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RadioButton } from 'react-native-paper';

const Dashboard = ({ navigation }) => {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [checked, setChecked] = React.useState('first');

    return (
        <View style={styles.mainContainer} >
            <View>
                <Image
                    source={require('../Assets/Header2.png')}
                    resizeMode='contain'
                    style={styles.image}
                />
                <View style={styles.headingContainer}>
                    <View style={{ paddingLeft: 40 }} />
                    <Text style={styles.heading}>Complaint Portal</Text>
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
            <View style={styles.container} >
                <TouchableOpacity
                    onPress={() => navigation.navigate('ComplaintStack')}
                >
                    <View style={styles.card}>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={styles.normalText} >
                                Total Complaints
                            </Text>
                            <Text style={styles.normalText} >
                                مکمل شکایات
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={styles.largeText}>
                                01
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View
                    style={styles.seperator}
                />
                <View style={styles.card1}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ResolvedComplaints')}
                    >
                        <View style={[styles.card2, { backgroundColor: '#29C17A' }]}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.largeText}>
                                    00
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.normalText} >
                                    Resolved Complaints
                                </Text>
                                <Text style={styles.normalText} >
                                    حل شدہ شکایت
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("InProgressComplaints")}
                    >
                        <View style={[styles.card2, { backgroundColor: '#F8AB00' }]}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.largeText}>
                                    00
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.normalText} >
                                    In Progress Complaints
                                </Text>
                                <Text style={styles.normalText} >
                                    پیش رفت شکایت
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.seperator}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("InCompleteComplaints")}
                >
                    <View style={[styles.card, { backgroundColor: '#FF0000' }]}>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={styles.normalText} >
                                incomplete Complaints
                            </Text>
                            <Text style={styles.normalText} >
                                نامکمل شکایت
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={styles.largeText}>
                                0
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        onPress={() => setModalOpen(true)}
                    >
                        <Image
                            resizeMode="contain"
                            source={require("../Assets/add_green.png")}
                            style={{ height: 60, width: 60 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                visible={modalOpen}
                animationType='fade'
                transparent={true}
            >
                <View style={styles.modalMainContainer}>
                    <View style={styles.modalContainer}>
                        <View style={styles.headerModal}>
                            <Text
                                style={styles.modalHeaderText}
                            >
                                Select Role
                            </Text>
                            <Text
                                style={styles.modalHeaderText}
                            >
                                کردار کا انتخاب کریں
                            </Text>
                        </View>
                        <View style={styles.seperator} />
                        <View style={styles.modalRadioButton}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                    color="#29C17A"
                                />
                                <View>
                                    <Text style={[styles.normalText, { color: '#000', fontWeight: 'normal' }]} >
                                        Personal Grievance / Complaint
                                    </Text>
                                    <Text style={[styles.normalText, { color: '#000', fontWeight: 'normal' }]} >
                                        ذاتی شکایت
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.seperator} />
                            <View style={styles.seperator} />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                    color="#29C17A"
                                />
                                <View>
                                    <Text style={[styles.normalText, { color: '#000', fontWeight: 'normal' }]} >
                                        Complaint as a Social Responsibilty
                                    </Text>
                                    <Text style={[styles.normalText, { color: '#000', fontWeight: 'normal' }]} >
                                        سماجی ذمہ داری
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.seperator} />
                            <View style={styles.buttonContainerModal}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("Departments")
                                        setModalOpen(false)
                                    }}
                                >
                                    <View style={styles.buttonModal} >
                                        <Text style={{ fontSize: 18, color: 'white' }}>
                                            OK
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: hp('0.5%') }} />
                                <TouchableOpacity
                                    onPress={() => setModalOpen(false)}
                                >
                                    <View style={[styles.buttonModal, { backgroundColor: 'white' }]} >
                                        <Text style={{ fontSize: 18 }}>
                                            Cancel
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Dashboard;

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
        // backgroundColor: 'red',
        flex: 1,
        // padding: 10,
        marginHorizontal: 20
    },
    card: {
        height: hp("13%"),
        width: '100%',
        backgroundColor: '#4E95FF',
        borderRadius: 15,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    seperator: {
        height: hp("1%")
    },
    card1: {
        height: hp("18%"),
        width: '100%',
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card2: {
        height: hp('18%'),
        width: wp("43%"),
        // backgroundColor: '#29C17A',
        borderRadius: 15,
        justifyContent: "center",
        alignItems: 'center'
    },
    normalText: {
        fontSize: 17,
        color: "white",
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    largeText: {
        fontSize: 36,
        color: 'white'
    },
    modalMainContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: "center",
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        // height: hp('38%'),
        width: wp('85%'),
        borderRadius: 20
    },
    closeModal: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    headerModal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalHeaderText: {
        fontSize: 24,
        color: '#29C17A'
    },
    buttonContainerModal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonModal: {
        width: wp('65%'),
        height: hp('6%'),
        backgroundColor: '#29C17A',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
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