import * as React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Modal,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';

const ComplaintForm = ({ navigation }) => {

    const [fullName, setFullName] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [cnic, setCnic] = React.useState("");
    const [complaintID, setComplaintID] = React.useState("");
    const [details, setDetails] = React.useState("")
    const [modalOpen, setModalOpen] = React.useState(false);
    const [image, setImage] = React.useState('')
    const [multipleFile, setMultipleFile] = React.useState([]);

    const takePhotoFormCamera = () => {
        return (
            ImagePicker.openCamera({
                width: 400,
                height: 400,
                cropping: false,
                multiple: true
            }).then(image => {
                console.log(image);
                setImage(image.path)
            })
        )
    };

    const selectMultipleFile = async () => {
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.allFiles],
            });
            for (const res of results) {
                console.log('res : ' + JSON.stringify(res));
            }
            setMultipleFile(results);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('Canceled from multiple doc picker');
            } else {
                console.log('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };

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
                    <Text style={styles.heading}>Complaint form</Text>
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
                <View>
                    {/* Full Name */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={styles.headingText}>
                            Full Name
                        </Text>
                        <Text style={styles.headingText}>
                            پورا نام
                        </Text>
                    </View>
                    <TextInput
                        value={fullName}
                        onChangeText={(fullName) => setFullName(fullName)}
                        placeholder={'e.g Liaqat Ali Khan'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.seperator} />
                <View>
                    {/* Mobile Number */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.headingText}>
                            Mobile Number
                        </Text>
                        <Text style={styles.headingText}>
                            موبائل نمبر
                        </Text>
                    </View>
                    <TextInput
                        value={mobile}
                        onChangeText={(mobile) => setMobile(mobile)}
                        placeholder={'e.g 0333-1111111'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.seperator} />
                <View>
                    {/* National ID */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.headingText}>
                            CNIC No.
                        </Text>
                        <Text style={styles.headingText}>
                            شناختی کارڈ نمبر
                        </Text>
                    </View>
                    <TextInput
                        value={cnic}
                        onChangeText={(cnic) => setCnic(cnic)}
                        placeholder={'e.g 11111-1111111-1'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.seperator} />
                <View>
                    {/* PM Citizen Portal Number */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.headingText, { color: 'red', paddingVertical: 0 }]}>
                                *
                            </Text>
                            <View>
                                <Text style={[styles.headingText, { paddingTop: 5, paddingBottom: 0 }]}>
                                    Citizen Portal
                                </Text>
                                <Text style={[styles.headingText, { paddingBottom: 5, paddingTop: 0 }]}>
                                    Complaint ID No.
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.headingText, { paddingTop: 5, paddingBottom: 0 }]}>
                                سٹیزن پورٹل
                            </Text>
                            <Text style={[styles.headingText, { paddingBottom: 5, paddingTop: 0 }]}>
                                کمپلینٹ آئی ڈی نمبر
                            </Text>
                        </View>
                    </View>
                    <TextInput
                        value={complaintID}
                        onChangeText={(complaintID) => setComplaintID(complaintID)}
                        placeholder={'e.g 123456'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.seperator} />
                <View>
                    {/* Attachments */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.headingText}>
                            Attach Proof
                        </Text>
                        <Text style={styles.headingText}>
                            منسلک ثبوت
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <View style={{
                            width: '50%',
                            // alignItems: 'center'
                        }}>
                            <TouchableOpacity
                                onPress={selectMultipleFile}
                            >
                                <View style={{ paddingleft: 15 }}>
                                    <Image
                                        source={require('../Assets/clip.png')}
                                        resizeMode="contain"
                                        style={{
                                            height: 24,
                                            width: 24
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                            {multipleFile.map((item, key) => (
                                <View
                                    key={key}
                                    style={{
                                        width: '90%'
                                    }}
                                >
                                    <Text
                                        ellipsizeMode="tail"
                                        numberOfLines={1}
                                        style={{
                                            color: "#888"
                                        }}>
                                        {item.name ? item.name : ''}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            width: '50%',
                            justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity
                                onPress={takePhotoFormCamera}
                            >
                                <View style={{
                                    backgroundColor: "#E1E1E1",
                                    height: 80,
                                    width: 80,
                                    border: 2,
                                    borderColor: '#707070',
                                    justifyContent: "center",
                                    alignItems: 'center'
                                }} >
                                    <Text style={{ color: '#AFAFAF' }}>
                                        Take Photo
                                    </Text>
                                    <Text style={{ color: '#AFAFAF' }}>
                                        تصویر کینچھیں
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View
                                style={{
                                    backgroundColor: "#E1E1E1",
                                    height: 80,
                                    width: 80,
                                    border: 2,
                                    borderColor: '#707070',
                                    justifyContent: "center",
                                    alignItems: 'center'
                                }}
                            >
                                <Image
                                    resizeMode='contain'
                                    source={{
                                        uri: image
                                    }}
                                    style={{
                                        height: 80,
                                        width: 80
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.seperator} />
                <View>
                    {/* Complaints Deta */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.headingText}>
                            Complaint Details
                        </Text>
                        <Text style={styles.headingText}>
                            شکایت کی تفصیل
                        </Text>
                    </View>
                    <TextInput
                        value={details}
                        onChangeText={(details) => setDetails(details)}
                        placeholder={'Enter Details Here'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                        numberOfLines={7}
                    />
                </View>
                <View style={styles.seperator} />
                <TouchableOpacity
                    onPress={() => setModalOpen(true)}
                >
                    <View style={styles.button} >
                        <Text style={{ color: '#fff', fontSize: 18 }} >
                            Submit
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.seperator} />
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
                                    navigation.navigate("Dashboard")
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
                                Notification
                            </Text>
                            <Text
                                style={[styles.modalHeaderText, { paddingBottom: 5 }]}
                            >
                                نوٹیفکیشن
                            </Text>
                            <Image
                                source={require('../Assets/check1.png')}
                                resizeMode="contain"
                                style={{
                                    height: 64,
                                    width: 64
                                }}
                            />
                            <View style={{ padding: 10 }}>
                                <Text style={{ textAlign: 'center', fontSize: 18, color: '#95989A' }}>
                                    Your Complaint against WAPDA department Is successfully registered with
                                    Complaint No. 12345 against PM CMS Complaint Id "Abc1234"
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

export default ComplaintForm;

const styles = StyleSheet.create({
    image: {
        width: wp('100%'),
        height: 180.5
    },
    mainContainer: {
        // flex: 1,
        backgroundColor: 'white'
    },
    container: {
        marginTop: 10,
        flex: 1,
        marginHorizontal: 20,
        // backgroundColor: 'red',
        paddingHorizontal: 10
    },
    seperator: {
        height: hp("1%")
    },
    headingText: {
        fontSize: 16,
        paddingVertical: 5
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
    },
    inputLong: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: '#8D8D8D',
        borderRadius: 5,
        height: 100
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#29C17A',
        borderRadius: 5,
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
        // height: hp('35%'),
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
})
