import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { fonts, main } from "../../Components/Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc } from "firebase/firestore";
import icons from "../../constants/icons";
import { Styles } from "./Styles.BottomTab";
import { COLORS } from "../../constants/theme";
import auth from "@react-native-firebase/auth";
import images from "../../constants/images";
import firestore from "@react-native-firebase/firestore";

const { height, width } = Dimensions.get("screen");

const More = (props) => {
  const dbRef = firestore().collection('users');
  const [users, setUsers] = useState([]);
  const email = auth().currentUser.email;
  const name = auth().currentUser.displayName;

  useEffect(() => {
    readData();
    console.log(users);
  }, []);

  const handleLogout = () => {
    auth().signOut().then(alert("User signed out!"));
    props.navigation.navigate("Login");
  };

  const readData = async () => {
    await dbRef.onSnapshot(querySnapshot => {
      const user = [];
      querySnapshot.forEach((doc) => {
        const { name, contact, city, state, pincode } = doc.data();
        user.push({
          name,
          contact,
          city,
          state,
          pincode,
        });
        setUsers(user);
      });
    });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={[Styles.container, { backgroundColor: "#1C1B1D" }]}>
        <View
          style={[
            Styles.rowView,
            { marginTop: height * 0.05, paddingHorizontal: width * 0.04 },
          ]}>
          <Image source={icons.Dp} />
          <View style={{ paddingHorizontal: width * 0.02 }}>
            <Text style={{ color: COLORS.white }}>{name}</Text>
            <Text style={{ color: COLORS.white }}>{email}</Text>
          </View>
        </View>
        <View style={Styles.line}></View>
        <Text style={{ color: COLORS.white, textAlign: 'center' }} onPress={() => handleLogout()}>Logout</Text>
      </View>
    </SafeAreaView>
  );
};

export default More;
