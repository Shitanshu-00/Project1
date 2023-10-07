import { View, Text, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { styles } from './styles'

const {height, width} = Dimensions.get('window')

const Input = ({title, placeholder, editable}) => {
  return (
    <View style={{marginVertical: height*0.01}}>
      <View style={styles.labelWrapper} >
        <Text style={styles.label}>{title}</Text>
      </View>
      <TextInput style={styles.input} placeholder={placeholder} editable={editable}/>
    </View>
  )
}

export default Input