import { View, Image, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Styles } from '../Components/Styles'
import images from '../constants/images'
import auth from '@react-native-firebase/auth';


const Splash = (props) => {

    useEffect(() => {
        setTimeout(() => checkLogin(), 2000);

    }, []);

    const checkLogin = () => {
        auth().onAuthStateChanged(user => {
            user ? (props.navigation.replace("BottomNav")) : (props.navigation.replace("Register"));
        })
    }

    return (
        <View style={[Styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
            <Image source={images.Splash} />
        </View>
    )
}

export default Splash