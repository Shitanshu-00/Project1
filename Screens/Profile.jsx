import { SafeAreaView, View, Text, Image } from 'react-native'
import React from 'react'
import { Styles } from '../Components/Styles'
import { AllStyles } from './Styles/screenStyles'
import icons from '../constants/icons'
import { Entypo } from '@expo/vector-icons';

const Profile = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.rowView}>
      <Entypo name="chevron-small-left" size={24} color="white" />
      </View>
    </SafeAreaView>
  )
}

export default Profile