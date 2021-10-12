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


const SignIn = ({ navigation }) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <ScrollView style={styles.mainContainer} >
            <StatusBar
                barStyle="light-content"
                backgroundColor="#29C17A"
            />
            <Image
                source={require('../Assets/Header1.png')}
                resizeMode='contain'
                style={styles.image}
            />
            <View style={{ position: 'absolute', left: 30, top: 200 }}>
                <Text style={{ fontSize: 30, color: 'white' }}>Login</Text>
                <Text style={{ fontSize: 20, color: 'white' }}>Please log in to your account</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '90%' }}>
                    <TextInput
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        placeholder={'E-mail'}
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
                    <View style={{ alignItems: 'flex-end' }} >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgetPassword')}
                        >
                            <Text style={{ color: '#29C17A', fontSize: 16 }} >Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 10 }} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Tabs')}
                    >
                        <View style={styles.button}>
                            <Text style={{ color: '#fff', fontSize: 18 }} >Sign In</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 10 }} />
                    <View style={styles.bottomContainer}>
                        <Text style={{ color: '#000', fontSize: 14 }} >Don't have an account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text style={{ color: '#29C17A', fontSize: 14, fontWeight: 'bold' }} > Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
        height: 398
    },
    button: {
        height: 50,
        backgroundColor: '#29C17A',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        height: 50,
        borderRadius: 5,
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