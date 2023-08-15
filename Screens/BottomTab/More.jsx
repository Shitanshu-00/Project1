import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fonts, main } from '../../Components/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, db } from '../../Utils/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import icons from '../../constants/icons';

const {height, width} = Dimensions.get('screen');

const More = (props) => {

const [name, setName] = useState('');
const email = auth.currentUser.email;

useEffect(()=>{readData()},[])

  const handleLogout=()=>{
    AsyncStorage.removeItem('AccessToken');
    props.navigation.navigate('Login');
  }

  const readData=async()=>{
    const docRef = doc(db, "users", auth.currentUser.uid);
    const userData = await getDoc(docRef);
    if(userData.exists()){
    setName(userData.data().name)
    }
  }

  return (
    <View>
      
    </View>
  )
}

export default More