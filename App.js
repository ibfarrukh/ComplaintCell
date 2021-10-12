import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SplashScreen from './Screens/SplashScreen';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Dashboard from './Screens/Dashboard';
import Complaints from './Screens/Complaints';
import Profile from './Screens/Profile';
import Departments from './Screens/Departments';
import ComplaintForm from './Screens/ComplaintForm';
import ResolvedComplaints from './Screens/ResolvedComplaints';
import InProgressComplaints from './Screens/InProgressComplaints';
import InCompleteComplaints from './Screens/InCompleteComplaints';
import Notifications from './Screens/Notifications';
import ForgetPassword from './Screens/ForgetPassword';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Dashboard"
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Departments" component={Departments} />
      <Stack.Screen name="ComplaintForm" component={ComplaintForm} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="ResolvedComplaints" component={ResolvedComplaints} />
      <Stack.Screen name="InProgressComplaints" component={InProgressComplaints} />
      <Stack.Screen name="InCompleteComplaints" component={InCompleteComplaints} />
    </Stack.Navigator>
  )
}

const ComplaintStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Complaints"
    >
      <Stack.Screen name="Complaints" component={Complaints} />
      <Stack.Screen name="ResolvedComplaints" component={ResolvedComplaints} />
      <Stack.Screen name="InProgressComplaints" component={InProgressComplaints} />
      <Stack.Screen name="InCompleteComplaints" component={InCompleteComplaints} />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#29C17A"
      inactiveColor="#D2D5DB"
      barStyle={{
        backgroundColor: '#f4f4f4',
        elevation: 5,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}

    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./Assets/home.png')}
              resizeMode='contain'
              style={{
                height: 24,
                width: 24,
                tintColor: focused ? "#29C17A" : "#D2D5DB"
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ComplaintStack"
        component={ComplaintStack}
        options={{
          tabBarLabel: 'COMPLAINTS',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./Assets/error_green.png')}
              resizeMode='contain'
              style={{
                height: 24,
                width: 24,
                tintColor: focused ? "#29C17A" : "#D2D5DB"
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./Assets/person.png')}
              resizeMode='contain'
              style={{
                height: 24,
                width: 24,
                tintColor: focused ? "#29C17A" : "#D2D5DB"
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;