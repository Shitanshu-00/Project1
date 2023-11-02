import { View, Text, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from '../Components/Styles'
import { COLORS } from '../constants/theme'
import images from '../constants/images'
import { styles } from '../Components/InputComponent/styles'

const Contact = () => {
    return (
        <View style={[Styles.container, { backgroundColor: COLORS.white, paddingTop: 0 }]}>
            <View style={{ backgroundColor: COLORS.black, height: height * 0.5, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={images.contact} />
            </View>

            <View style={[styles.labelWrapper, { marginTop: height * 0.02 }]}>
                <Text style={styles.label}>Name*</Text>
            </View>
            <TextInput style={[styles.input, { borderRadius: 5, width: width * 0.92, alignSelf: 'center' }]} placeholder='Enter your name' />

            <View style={[styles.labelWrapper, { marginTop: height * 0.01 }]}>
                <Text style={styles.label}>Email*</Text>
            </View>
            <TextInput style={[styles.input, { borderRadius: 5, width: width * 0.92, alignSelf: 'center' }]} placeholder='Enter your email address' />

            <View style={[styles.labelWrapper, { marginTop: height * 0.01 }]}>
                <Text style={styles.label}>Message*</Text>
            </View>
            <TextInput style={[styles.input, { borderRadius: 5, width: width * 0.92, height: height * 0.18, alignSelf: 'center', textAlignVertical:'top', paddingTop: height*0.01 }]} placeholder='Message' multiline={true}  numberOfLines={10}/>

            <TouchableOpacity style={[Styles.btn, { backgroundColor: COLORS.red, width: width * 0.92, alignSelf: 'center', borderRadius: 5 }]}>
                <Text style={Styles.btnTxt}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Contact

const { height, width } = Dimensions.get('window');