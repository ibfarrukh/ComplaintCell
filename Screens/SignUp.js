import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';


const SignUp = ({ navigation }) => {

    const [fullName, setFullName] = React.useState('')
    const [cnic, setCnic] = React.useState('')
    const [mobile, setMobile] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [city, setCity] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [conPassword, setConPassword] = React.useState('')

    return (
        <ScrollView style={styles.mainContainer} >
            <StatusBar
                barStyle="light-content"
                backgroundColor="#29C17A"
            />
            <Image
                source={require('../Assets/Header3.png')}
                resizeMode='contain'
                style={styles.image}
            />
            <View style={{ position: 'absolute', left: 30, top: 110 }}>
                <Text style={{ fontSize: 30, color: 'white' }}>Sign Up</Text>
                <Text style={{ fontSize: 20, color: 'white' }}>Please sign up for your account</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '90%' }}>
                    <TextInput
                        value={fullName}
                        onChangeText={(fullName) => setFullName(fullName)}
                        placeholder={'Full Name'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                    <View style={{ height: 10 }} />
                    <TextInput
                        value={cnic}
                        onChangeText={(cnic) => setCnic(cnic)}
                        placeholder={'CNIC No.'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                    <View style={{ height: 10 }} />
                    <TextInput
                        value={mobile}
                        onChangeText={(mobile) => setMobile(mobile)}
                        placeholder={'Mobile No.'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                    <View style={{ height: 10 }} />
                    <TextInput
                        value={address}
                        onChangeText={(address) => setAddress(address)}
                        placeholder={'Address'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                    <View style={{ height: 10 }} />
                    <TextInput
                        value={city}
                        onChangeText={(city) => setCity(city)}
                        placeholder={'City'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                    <View style={{ height: 10 }} />
                    <TextInput
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        placeholder={'Email'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                    <View style={{ height: 10 }} />
                    <TextInput
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        placeholder={'Password'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                    <View style={{ height: 10 }} />
                    <TextInput
                        value={conPassword}
                        onChangeText={(conPassword) => setConPassword(conPassword)}
                        placeholder={'Confirm Password'}
                        style={styles.input}
                        placeholderTextColor="#AFAFAF"
                    />
                    <View style={{ height: 10 }} />
                    <TouchableOpacity
                        onPress={() => console.log("Sign In Clicked!!")}
                    >
                        <View style={styles.button}>
                            <Text style={{ color: '#fff', fontSize: 18 }} >Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 10 }} />
                    <View style={styles.bottomContainer}>
                        <Text style={{ color: '#000', fontSize: 14 }} >Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignIn')}
                        >
                            <Text style={{ color: '#29C17A', fontSize: 14, fontWeight: 'bold' }} > Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 20 }} />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 283.5
    },
    button: {
        height: 50,
        backgroundColor: '#29C17A',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        // height: 50,
        // borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
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
    }
})