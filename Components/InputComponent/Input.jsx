import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import { styles } from "./styles";
import { COLORS } from "../../constants/theme";

const { height, width } = Dimensions.get("window");

const Input = ({
  title,
  placeholder,
  editable,
  top,
  onChangeText,
  value,
  onBlur,
  defaultValue,
}) => {
  return (
    <View style={{ marginTop: top }}>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        editable={editable}
        cursorColor={COLORS.red}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
      />
    </View>
  );
};

export default Input;
