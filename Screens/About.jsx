import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../Components/Styles";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const About = (props) => {
  return (
    <View
      style={[Styles.container, { backgroundColor: "#fff", paddingHorizontal: width * 0.06 }]}>
      <View style={[Styles.rowView, { paddingVertical: height * 0.01, alignItems: "center" }]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={height * 0.05}
            color="black"
          />
        </TouchableOpacity>
        <Text style={[Styles.headText, { fontWeight: "bold", marginLeft: width * 0.2 }]}>
          About Us
        </Text>
      </View>

      <View style={{ marginTop: height * 0.01 }}>
        <Text style={{ textAlign: 'justify', fontFamily:'Lato-Medium', fontSize: height*0.02 }}>Hello Everyone, I am Shitanshu Tripathi. I am a React Native Developer and this is a Demo App of Fantacy Cricket category which display informations such as Live Cricket and other data. In this project I used Firebase for Login and Authentication and other third party libraries.</Text>
      </View>
    </View>
  )
}

export default About