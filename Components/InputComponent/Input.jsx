import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Input = ({title, placeholder}) => {
  return (
    <View>
      <View style={styles.labelWrapper} >
        <Text style={styles.label}>{title}</Text>
      </View>
      <TextInput style={styles.input} placeholder={placeholder}/>
    </View>
  )
}

export default Input