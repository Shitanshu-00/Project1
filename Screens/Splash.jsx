import { View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Styles } from '../Components/Styles'
import images from '../constants/images'

const Splash = (props) => {

    useEffect(() => {
        setTimeout(() => { props.navigation.replace('Register') }, 2000)
    }, []);

    return (
        <View style={Styles.container}>
            <Image source={images.Splash} />
        </View>
    )
}

export default Splash