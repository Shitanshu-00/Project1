import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../Components/Styles";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const About = (props) => {
  return (
    <View
      style={[
        Styles.container,
        { backgroundColor: "#fff", paddingHorizontal: width * 0.06},
      ]}>
       <View
        style={[
          Styles.rowView,
          { paddingVertical: height * 0.01, alignItems: "center" },
        ]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={height * 0.05}
            color="black"
          />
        </TouchableOpacity>
        <Text
          style={[
            Styles.headText,
            { fontWeight: "bold", marginLeft: width * 0.2 },
          ]}>
         About Us
        </Text>
      </View>

      <View style={{ marginTop: height*0.01}}>
        <Text style={{textAlign:'justify'}}>India strolled to a nine-wicket win against Thailand in the Women's T20 Asia Cup after spinners Deepti Sharma, Sneh Rana and Rajeshwari Gayakwad shared seven wickets between them. Thailand were restricted to 37, their third-lowest total in the Asia Cup, which table-toppers India then chased down in six overs, losing just one wicket.</Text>
      </View>
    </View>
  )
}

export default About