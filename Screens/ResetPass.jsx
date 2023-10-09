import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Styles } from '../Components/Styles'
import { COLORS, FONTS } from '../constants/theme'
import Input from '../Components/InputComponent/Input'
import Button from '../Components/Button'

const ResetPass = (props) => {
    const handlePress = () => {
        alert('Password Changed');
        props.navigation.replace('BottomNav');
    }
    return (
        <View style={Styles.container}>
            <View style={[Styles.container2, { paddingTop: height * 0.1 }]}>
                <Text
                    style={[Styles.headText,{textAlign: "center"}]}>
                    Reset Password
                </Text>
                <Input placeholder={'Enter new password'} top={height * 0.04} />
                <Input placeholder={'Confirm password'} />
                <Button title={'RESET'} bgColor={COLORS.red} top={height * 0.04} onPress={() => handlePress()} />
            </View>
        </View>
    )
}

export default ResetPass

const { height, width } = Dimensions.get('window');