import { View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Styles } from '../Components/Styles'
import images from '../constants/images'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = (props) => {

    useEffect(() => {
        setTimeout(() => checkLogin(), 2000);
        
    }, []);

    const checkLogin =async()=>{
        token = await AsyncStorage.getItem("AccessToken");
        token ? (props.navigation.replace("BottomNav")) : (props.navigation.replace("Register"))
        console.log(token);
    }

    return (
        <View style={[Styles.container,{alignItems:'center', justifyContent:'center'}]}>
            <Image source={images.Splash} />
        </View>
    )
}

export default Splash