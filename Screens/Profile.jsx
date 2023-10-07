import { SafeAreaView, View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { Styles } from '../Components/Styles'
import icons from '../constants/icons'
import { Entypo } from '@expo/vector-icons';
import Input from '../Components/InputComponent/Input'
import Button from '../Components/Button'
import { COLORS } from '../constants/theme'

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
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingHorizontal:width*0.05}}>
        <View style={{width:'100%'}}>
          <Input title={'Name*'} />
          <Input title={'Email*'} editable={false} />
          <Input title={'Contact*'} />
          <Input title={'Date of Birth'} />
          <Input title={'Country'} />
          <Input title={'State'} />
          <Input title={'City'} />
          <Button title={'Edit Profile'} bgColor={COLORS.red} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const { height, width } = Dimensions.get('window');