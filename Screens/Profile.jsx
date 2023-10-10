import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { Styles } from "../Components/Styles";
import icons from "../constants/icons";
import { Entypo } from "@expo/vector-icons";
import Input from "../Components/InputComponent/Input";
import Button from "../Components/Button";
import { COLORS } from "../constants/theme";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

const Profile = (props) => {

  const dbRef = firestore().collection('user');

  useEffect(()=>{
    getData();
  },[])

  const getData = async()=>{
    const data = dbRef.doc().get()
    console.log(data);
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View style={[Styles.rowView, { paddingHorizontal: width * 0.02 }]}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <Entypo name="chevron-small-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={[Styles.title, { marginLeft: width * 0.32 }]}>
          Profile
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: height * 0.04,
        }}>
        <Image source={icons.Profile} />
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: width * 0.05,
        }}>
        <View style={{ width: "100%" }}>
          <Input title={"Name*"} top={height*0.015}/>
          <Input title={"Email*"} editable={false} top={height*0.015}/>
          <Input title={"Contact*"} top={height*0.015}/>
          <Input title={"Date of Birth"} top={height*0.015}/>
          <Input title={"Country"} top={height*0.015}/>
          <Input title={"State"}top={height*0.015}/>
          <Input title={"City"} top={height*0.015}/>
          <Button
            title={"Edit Profile"}
            bgColor={COLORS.red}
            top={height * 0.04}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const { height, width } = Dimensions.get("window");
