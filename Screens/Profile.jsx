import { SafeAreaView, View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { Styles } from '../Components/Styles'
import { AllStyles } from './Styles/screenStyles'
import icons from '../constants/icons'
import { Entypo } from '@expo/vector-icons';
import Input from '../Components/InputComponent/Input'
import Button from '../Components/Button'

const Profile = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={[Styles.rowView, { paddingHorizontal: width * 0.02 }]}>
        <Entypo name="chevron-small-left" size={24} color="white" />
        <Text style={[Styles.title, { marginLeft: width * 0.34 }]}>Profile</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: height * 0.02 }}>
        <Image source={icons.Profile} />
      </View>
      <ScrollView>
        <Input title={'Name'} />
        <Button title={'Edit Profile'}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const { height, width } = Dimensions.get('window');