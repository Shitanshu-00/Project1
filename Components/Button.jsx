import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { Styles } from './Styles';

export default function Button({title, onPress, bgColor, top, disable}) {
  return (
    <View>
      <TouchableOpacity
        style={[Styles.btn, {backgroundColor: bgColor, marginTop: top}]}
        onPress={onPress}
        disabled={disable}>
        <Text style={Styles.btnTxt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
