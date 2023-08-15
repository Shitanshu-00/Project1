import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './BottomTab/HomeScreen';
import Matches from './BottomTab/Matches'
import Fantacy from './BottomTab/Fantacy'
import News from './BottomTab/News'
import More from './BottomTab/More'

const Bottom = createBottomTabNavigator();

const BottomNav = () => {
  return (
   <Bottom.Navigator screenOptions={{headerShown:false}}initialRouteName='HomeScreen'>
    <Bottom.Screen name='HomeScreen' component={HomeScreen}/>
    <Bottom.Screen name='Matches' component={Matches}/>
    <Bottom.Screen name='Fantacy' component={Fantacy}/>
    <Bottom.Screen name='News' component={News}/>
    <Bottom.Screen name='More' component={More}/>
   </Bottom.Navigator>
  )
}

export default BottomNav