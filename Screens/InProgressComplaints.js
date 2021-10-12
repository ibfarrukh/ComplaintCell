import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Modal,
    Button
} from 'react-native';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Spinner from 'react-native-loading-spinner-overlay';

const dummyArray = [
    { id: '1', ComplaintNumber: '01', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '27-09-2013' },
    { id: '2', ComplaintNumber: '02', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '10-03-2014' },
    { id: '3', ComplaintNumber: '03', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '01-07-2017' },
    { id: '4', ComplaintNumber: '04', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '06-03-2013' },
    { id: '5', ComplaintNumber: '05', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '03-06-2014' },
    { id: '6', ComplaintNumber: '06', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '08-10-2016' },
    { id: '7', ComplaintNumber: '07', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '12-05-2018' },
    { id: '8', ComplaintNumber: '08', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '13-04-2013' },
    { id: '9', ComplaintNumber: '09', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '09-09-2017' },
    { id: '10', ComplaintNumber: '10', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '30-10-2018' },
    { id: '11', ComplaintNumber: '11', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '31-03-2021' },
    { id: '12', ComplaintNumber: '12', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '21-05-2020' },
    { id: '13', ComplaintNumber: '13', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '29-08-2021' },
    { id: '14', ComplaintNumber: '14', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '01-11-2018' },
    { id: '15', ComplaintNumber: '15', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '01-01-2021' },
    { id: '16', ComplaintNumber: '16', ComplaintBody: 'This is Dummy Text and will be changed in the future.', Status: 'In Progress', ComplaintDate: '28-07-2020' },
]

const InProgressComplaints = ({ navigation }) => {

    const [listItems, setListItems] = React.useState(dummyArray);
    const [loading, setLoading] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [item, setItem] = React.useState({ id: '', ComplaintNumber: '', ComplaintBody: '', Status: '', ComplaintDate: '' })

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setModalOpen(true);
            setLoading(false);
        }, 1000);
    };


    const ItemView = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    console.log(item);
                    startLoading();
                    setItem(item);
                }
                }
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15 }}>
                    <View style={{
                        width: wp('10%'),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                        <Image
                            source={require('../Assets/error_green.png')}
                            resizeMode='contain'
                            style={{
                                height: 35,
                                width: 35
                            }}
                        />
                    </View>
                    <View style={{
                        width: wp('70%'),
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingHorizontal: 10
                    }} >
                        <Text style={{
                            fontSize: 16,
                            color: "#434A5E"
                        }}>
                            Complaint {item.ComplaintNumber}
                        </Text>
                        <Text ellipsizeMode="tail" numberOfLines={1} style={{ color: "#888" }} >
                            {item.ComplaintBody}
                        </Text>
                    </View>
                    <View style={{
                        width: wp('10%'),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                        <Image
                            source={require('../Assets/right.png')}
                            resizeMode="contain"
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: '#949494'
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const ItemSeparatorView = () => {
        return (
            <View style={styles.separator} />
        );
    };

    const MyModal = () => {
        return (
            <Modal
                visible={modalOpen}
                animationType='fade'
                transparent={true}
            >
                <View style={styles.modalMainContainer}>
                    <View style={styles.modalContainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', padding: 5 }} >
                            <TouchableOpacity
                                onPress={() => {
                                    setModalOpen(false);
                                }}
                            >
                                <Image
                                    source={require("../Assets/cancel.png")}
                                    resizeMode="contain"
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: '#AFAFAF'
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headerModal}>
                            <Text
                                style={[styles.modalHeaderText, { paddingTop: 5 }]}
                            >
                                Complaint Details
                            </Text>
                            <Text
                                style={[styles.modalHeaderText, { paddingBottom: 5 }]}
                            >
                                شکایت کی تفصیل
                            </Text>
                        </View>
                        {/* <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Text>Hello</Text>
                        </View> */}
                        <View style={styles.itemContainer}>
                            <View style={styles.itemLeftContainer} >
                                <Text>
                                    Complaint ID
                                </Text>
                                <Text>
                                    شکایت ای ڈی نمبر
                                </Text>
                            </View>
                            <View style={styles.itemCenterContainer} >
                                <Text style={{ fontWeight: 'bold' }}>
                                    :
                                </Text>
                            </View>
                            <View style={styles.itemRightContainer} >
                                <Text>{item.ComplaintNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemLeftContainer} >
                                <Text>
                                    PM CMS ID
                                </Text>
                                <Text>
                                    سٹیزن پورٹل ای ڈی نمبر
                                </Text>
                            </View>
                            <View style={styles.itemCenterContainer} >
                                <Text>
                                    :
                                </Text>
                            </View>
                            <View style={styles.itemRightContainer} >
                                <Text>123456</Text>
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemLeftContainer} >
                                <Text>
                                    Complaint Status
                                </Text>
                                <Text>
                                    شکایت کی تفصیلات
                                </Text>
                            </View>
                            <View style={styles.itemCenterContainer} >
                                <Text>
                                    :
                                </Text>
                            </View>
                            <View style={styles.itemRightContainer} >
                                <Text>
                                    {item.Status}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemLeftContainer} >
                                <Text>
                                    Complaint Date
                                </Text>
                                <Text>
                                    شکایت درج تاریخ
                                </Text>
                            </View>
                            <View style={styles.itemCenterContainer} >
                                <Text>
                                    :
                                </Text>
                            </View>
                            <View style={styles.itemRightContainer} >
                                <Text>{item.ComplaintDate}</Text>
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={styles.itemLeftContainer} >
                                <Text>
                                    Department
                                </Text>
                                <Text>
                                    ادارہ
                                </Text>
                            </View>
                            <View style={styles.itemCenterContainer} >
                                <Text>
                                    :
                                </Text>
                            </View>
                            <View style={styles.itemRightContainer} >
                                <Text>CDA</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.itemContainer}>
                                <View style={[styles.itemLeftContainer, { alignItems: "flex-start", width: '50%' }]} >
                                    <Text>
                                        Complaint Details:
                                    </Text>
                                </View>
                                <View style={[styles.itemRightContainer, { alignItems: "flex-end", width: '50%' }]} >
                                    <Text>
                                        شکایت کی تفصیل
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.itemContainer}>
                                <Text ellipsizeMode="tail" numberOfLines={1}>
                                    {item.ComplaintBody}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.itemContainer}>
                                <View style={[styles.itemLeftContainer, { alignItems: "flex-start", width: '50%' }]} >
                                    <Text>
                                        Attachment Proof:
                                    </Text>
                                </View>
                                <View style={[styles.itemRightContainer, { alignItems: "flex-end", width: '50%' }]} >
                                    <Text>
                                        منسلک ثبوت
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 5 }}>
                                <View
                                    style={{
                                        width: 70,
                                        height: 70,
                                        // backgroundColor: "red",
                                        borderColor: '#888',
                                        borderWidth: 2
                                    }}
                                />
                                <View
                                    style={{
                                        width: 70,
                                        height: 70,
                                        // backgroundColor: "red",
                                        borderColor: '#888',
                                        borderWidth: 2
                                    }}
                                />
                                <View
                                    style={{
                                        width: 70,
                                        height: 70,
                                        // backgroundColor: "red",
                                        borderColor: '#888',
                                        borderWidth: 2
                                    }}
                                />
                                <View
                                    style={{
                                        width: 70,
                                        height: 70,
                                        // backgroundColor: "red",
                                        borderColor: '#888',
                                        borderWidth: 2
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

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
                    <Text style={styles.heading}>In-Progress Complaints</Text>
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
            <View
                style={styles.container}
            >
                <View style={{ margin: 10 }}>
                    <Text style={styles.nameHeading}>
                        In-Progress Complaints
                    </Text>
                    <FlatList
                        data={listItems}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemView}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <Spinner
                        visible={loading}
                        textContent={'Loading...'}
                        textStyle={{ color: 'white' }}
                    />
                    <MyModal />
                </View>
            </View>

        </View>
    )
}

export default InProgressComplaints;

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
    container: {
        marginVertical: 10,
        // backgroundColor: 'red',
        flex: 1,
        paddingHorizontal: 10,

    },
    nameHeading: {
        fontSize: 18,
        color: "#29C17A",
        textTransform: "uppercase"
    },
    separator: {
        backgroundColor: '#333',
        width: '100%',
        height: 1
    },
    complaintHeading: {
        fontSize: 16,
        color: '#434A5E'
    },
    complaintbody: {
        color: "#888"
    },
    right: {
        height: 22,
        width: 22,
        tintColor: '#949494'
    },
    seperator1: {
        height: hp("1%")
    },
    modalMainContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        // height: hp('65%'),
        width: wp('85%'),
        borderRadius: 20
    },
    headerModal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalHeaderText: {
        fontSize: 24,
        color: '#29C17A',
    },
    itemContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        // backgroundColor: 'red',
        paddingVertical: 5
    },
    itemLeftContainer: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemCenterContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemRightContainer: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})