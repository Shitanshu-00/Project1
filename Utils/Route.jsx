import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Splash';
import Register from '../Screens/Register'
import Login from '../Screens/Login';
import BottomNav from '../Screens/BottomNav';
import Profile from '../Screens/Profile';

const Stack = createNativeStackNavigator();

export default function Route() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor='#010' style='light'/>
            <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='BottomNav' component={BottomNav} />
                <Stack.Screen name='Profile' component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}