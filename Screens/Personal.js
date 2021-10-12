import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Platform } from 'react-native';

import { Avatar } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

const Personal = () => {

    const [fullName, setFullName] = React.useState('');
    const [urduName, setUrduName] = React.useState('');
    const [cnic, setCnic] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
    const [text, setText] = React.useState("Date of Birth");
    const [ProfessionOpen, setProfessionOpen] = React.useState(false);
    const [professionValue, setProfessionValue] = React.useState(null);
    const [professionItems, setProfessionItems] = React.useState([
        { label: 'Doctor', value: 'doctor' },
        { label: 'Engineer', value: 'engineer' },
        { label: 'Pilot', value: 'pilot' },
        { label: 'Accoutant', value: 'accountant' },
        { label: 'Developer', value: 'developer' },
        { label: 'Other', value: 'other' },
    ]);
    const [qualificationOpen, setQualificationOpen] = React.useState(false);
    const [qualificationValue, setQualificationValue] = React.useState(null);
    const [qualificationItems, setQualificationItems] = React.useState([
        { label: 'Matric', value: 'matric' },
        { label: 'FA/FSc', value: 'fa/fsc' },
        { label: 'BA', value: 'ba' },
        { label: 'BBA/BS/BE', value: 'bba/bs/be' },
        { label: 'MA', value: 'ma' },
        { label: 'MS/MPhil', value: 'ms/mphil' },
        { label: 'PhD', value: 'phd' },
        { label: 'Other', value: 'other' },
    ]);
    const [religionOpen, setReligionOpen] = React.useState(false);
    const [religionValue, setReligionValue] = React.useState(null);
    const [religionItems, setReligionItems] = React.useState([
        { label: 'Islam', value: 'Islam' },
        { label: 'Christian', value: 'christian' },
        { label: 'Jew', value: 'jew' },
        { label: 'Hindu', value: 'hindu' },
        { label: 'Sikh', value: 'sikh' },
        { label: 'Buddhism', value: 'buddhism' },
        { label: 'Atheist', value: 'atheist' },
        { label: 'Other', value: 'other' },
    ]);
    const [bloodOpen, setBloodOpen] = React.useState(false);
    const [bloodValue, setBloodValue] = React.useState(null);
    const [bloodItems, setBloodItems] = React.useState([
        { label: 'A+', value: 'a+' },
        { label: 'A-', value: 'a-' },
        { label: 'B+', value: 'b+' },
        { label: 'B-', value: 'b-' },
        { label: 'AB+', value: 'ab+' },
        { label: 'AB-', value: 'ab-' },
        { label: 'O+', value: '0+' },
        { label: 'O-', value: 'o-' },
    ]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios')
        setDate(currentDate)

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + ' - ' + (tempDate.getMonth() + 1) + ' - ' + tempDate.getFullYear();
        setText(fDate)

        console.log(fDate)
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }


    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.avatarContainer}>
                <Avatar.Image
                    size={100}
                    source={require("../Assets/man.png")}
                />
                <Image
                    source={require("../Assets/plus.png")}
                    style={{
                        height: 30,
                        width: 30,
                        position: 'absolute',
                        top: 100,
                        right: 160
                    }}
                />
            </View>
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
                            Full Name
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            پورا نام
                        </Text>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        value={fullName}
                        onChangeText={(fullName) => setFullName(fullName)}
                        placeholder={'Full Name'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.separator} />
                {/* ONE DONE */}
                <View
                    style={[styles.textContainer, { justifyContent: 'flex-start' }]}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                        <Text style={styles.text}>
                            URDU NAME (NADRA VERIFIED)
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
                </View>
                <View>
                    <TextInput
                        value={urduName}
                        onChangeText={(urduName) => setUrduName(urduName)}
                        placeholder={'اردو میں اپنا نام درج کریں'}
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
                            cnic (NADRA vERIFIED)
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
                            شناختی کارڈ نمبر
                        </Text>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        value={cnic}
                        onChangeText={(cnic) => setCnic(cnic)}
                        placeholder={'e.g 22222-2222222-2'}
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
                            REGISTERED MOBILE # (VERIFIED)
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
                            منظور شدہ موبائل نمبر
                        </Text>
                        <Text style={[styles.text, { color: 'red' }]}>
                            *
                        </Text>
                    </View>
                </View>
                <View>
                    <TextInput
                        value={mobile}
                        onChangeText={(mobile) => setMobile(mobile)}
                        placeholder={'e.g 0323-8776655'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                </View>
                <View style={styles.separator} />
                {/* FOUR DOWN */}
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            Date of Birth
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            تاریخ پیدائش
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => showMode('date')}
                >
                    <View
                        style={[styles.input, { alignItems: 'center', flexDirection: 'row' }]}
                    >
                        <Text
                            style={{ color: '#AFAFAF' }}
                        >
                            {text}
                        </Text>
                    </View>
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        testID="DateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={false}
                        display="default"
                        onChange={onChange}
                    />
                )}
                <View style={styles.separator} />
                {/* FIVE DOWN */}
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            PROFESSION
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            پیشہ
                        </Text>
                    </View>
                </View>
                <DropDownPicker
                    open={ProfessionOpen}
                    value={professionValue}
                    items={professionItems}
                    setOpen={setProfessionOpen}
                    setValue={setProfessionValue}
                    setItems={setProfessionItems}
                    placeholder="Select a Profession"
                    placeholderStyle={{
                        color: "#AFAFAF",
                    }}
                    style={styles.input}
                    listMode="SCROLLVIEW"
                    dropDownContainerStyle={{
                        borderColor: '#888',
                    }}
                    listItemLabelStyle={{
                        color: '#AFAFAF'
                    }}
                    zIndex={4000}
                />
                <View style={styles.separator} />
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            Qualification
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            پیشہ
                        </Text>
                    </View>
                </View>
                <DropDownPicker
                    open={qualificationOpen}
                    value={qualificationValue}
                    items={qualificationItems}
                    setOpen={setQualificationOpen}
                    setValue={setQualificationValue}
                    setItems={setQualificationItems}
                    placeholder="Select a Qualification"
                    placeholderStyle={{
                        color: "#AFAFAF",
                    }}
                    style={styles.input}
                    listMode="SCROLLVIEW"
                    dropDownContainerStyle={{
                        borderColor: '#888'
                    }}
                    zIndex={3000}
                    listItemLabelStyle={{
                        color: '#AFAFAF'
                    }}
                />
                <View style={styles.separator} />
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            rELIGION
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            مذہب
                        </Text>
                    </View>
                </View>
                <DropDownPicker
                    open={religionOpen}
                    value={religionValue}
                    items={religionItems}
                    setOpen={setReligionOpen}
                    setValue={setReligionValue}
                    setItems={setReligionItems}
                    placeholder="Select a Religion"
                    placeholderStyle={{
                        color: "#AFAFAF",
                    }}
                    style={[styles.input]}
                    listMode="SCROLLVIEW"
                    dropDownDirection="TOP"
                    dropDownContainerStyle={{
                        borderColor: '#888'
                    }}
                    listItemLabelStyle={{
                        color: '#AFAFAF'
                    }}
                    zIndex={2000}
                />
                <View style={styles.separator} />
                <View
                    style={styles.textContainer}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            Blood Group
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>
                            خون گروپ
                        </Text>
                    </View>
                </View>
                <DropDownPicker
                    open={bloodOpen}
                    value={bloodValue}
                    items={bloodItems}
                    setOpen={setBloodOpen}
                    zIndex={1000}
                    setValue={setBloodValue}
                    setItems={setBloodItems}
                    placeholder="Select a Blood Group"
                    placeholderStyle={{
                        color: "#AFAFAF",
                    }}
                    style={styles.input}
                    listMode="SCROLLVIEW"
                    dropDownContainerStyle={{
                        borderColor: '#888'
                    }}
                    listItemLabelStyle={{
                        color: '#AFAFAF'
                    }}
                />
                <View style={styles.separator} />
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