import React, { useState } from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './InputComponent/styles';


const DatePicker = ({ top, title, value }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState('01/01/1923');

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == 'set') {
    const currentDate = selectedDate;
    setDate(currentDate);
    togglePicker();
    setBirthDate(currentDate.toDateString());
    } else {
    togglePicker();
    }
  }

  return (
    <View style={{ marginTop: top }}>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <Pressable onPress={togglePicker}>
        <TextInput
          style={styles.input}
          defaultValue={birthDate}
          value={birthDate}
          onChangeText={setBirthDate}
          editable={false}
        />
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            is24Hour={true}
            onConfirm={onChange}
          />
        )}

        <TouchableOpacity onPress={togglePicker} style={{
          position: 'absolute',
          right: '5%', top: '20%'
        }}>
          <AntDesign name="calendar" size={24} color="white" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

export default DatePicker;
