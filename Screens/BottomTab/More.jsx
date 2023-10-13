import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import icons from "../../constants/icons";
import { Styles } from "./Styles.BottomTab";
import { COLORS, SIZES } from "../../constants/theme";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");

// <<-------------------- Main Function --------------------->>
const More = (props) => {
  const uid = auth().currentUser.uid;
  const dbRef = firestore().collection("users");
  const [users, setUsers] = useState([]);
  const email = auth().currentUser.email;

  useEffect(() => {
    readData();
  }, []);

  // <<-------------------- Logout Function --------------------->>
  const handleLogout = () => {
    auth().signOut().then(alert("User signed out!"));
    props.navigation.navigate("Login");
  };

  // <<-------------------- Reading Data from Firestore Database --------------------->>
  const readData = async () => {
    await dbRef.onSnapshot((querySnapshot) => {
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
        setUsers([...user]);
      });
    });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={[Styles.container, { backgroundColor: "#1C1B1D" }]}>
        <View
          style={[
            Styles.rowView,
            { paddingTop: height * 0.06, paddingHorizontal: width * 0.04 },
          ]}>
          <Image
            source={icons.Dp}
            style={{ height: height * 0.07, width: height * 0.07 }}
          />
          <View style={{ paddingHorizontal: width * 0.04 }}>
            <Text style={{ color: COLORS.white, fontSize: height * 0.024 }}>
              {users.map((user) => user.name)}
            </Text>
            <Text style={{ color: COLORS.white }}>{email}</Text>
          </View>
        </View>
        <View style={[Styles.line, { marginTop: height * 0.03 }]}></View>

        <View style={[Styles.rowView, { paddingHorizontal: width * 0.04 }]}>
          <MaterialCommunityIcons name="cricket" size={20} color="#fff" />
          <Text style={[styles.text, { marginHorizontal: width * 0.02 }]}>
            Cricket
          </Text>
        </View>
        <View style={[Styles.rowView, { paddingHorizontal: width * 0.04 }]}>
          <Ionicons name="football" size={20} color="#fff" />
          <Text style={[styles.text, { marginHorizontal: width * 0.02 }]}>
            Football
          </Text>
        </View>
        <View style={[Styles.rowView, { paddingHorizontal: width * 0.04 }]}>
          <MaterialCommunityIcons
            name="horse-variant-fast"
            size={20}
            color="#fff"
          />
          <Text style={[styles.text, { marginHorizontal: width * 0.02 }]}>
            Horse Racing
          </Text>
        </View>
        <View style={[Styles.rowView, { paddingHorizontal: width * 0.04 }]}>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <Text style={[styles.text, { marginHorizontal: width * 0.02 }]}>
            Esport
          </Text>
        </View>
        <View style={Styles.line}></View>

        <View style={{ paddingHorizontal: width * 0.04 }}>
          <Text
            style={styles.text}
            onPress={() => props.navigation.navigate("Fantacy")}>
            Fantacy
          </Text>
          <Text style={styles.text}>Predictions</Text>
        </View>
        <View style={Styles.line}></View>

        <View style={{ paddingHorizontal: width * 0.04 }}>
          <Text style={styles.text}>Subscription</Text>
          <Text style={styles.text} onPress={()=>props.navigation.navigate('About')}>About Us</Text>
          <Text style={styles.text}>Contact Us</Text>
          <Text style={styles.text} onPress={()=>props.navigation.navigate('Advertise')}>Advertise with Us</Text>
          <Text style={styles.text}>Privacy Policy</Text>
          <Text style={styles.text} onPress={() => handleLogout()}>
            Logout
          </Text>
        </View>

        {/* <<-------------------- Footer Section --------------------->> */}
        <View style={{ alignItems: "center", marginVertical: height * 0.05 }}>
          <Text style={[styles.text, { fontWeight: "800" }]}># FOLLOW US</Text>
          <View style={[Styles.rowView, { gap: width * 0.02 }]}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.facebook.com/shitanshu.tripathi.351"
                )
              }>
              <Entypo name="facebook-with-circle" size={30} color="#337FFF" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.twitter.com/shitanshu__00")
              }>
              <Entypo name="twitter-with-circle" size={30} color="#33CCFF" />
            </TouchableOpacity>

                <TouchableOpacity
                  style={{ backgroundColor: "transparent" }}
                  onPress={() =>
                    Linking.openURL("https://www.instagram.com/Shitanshu_0")
                  }>
                  <Entypo
                    name="instagram-with-circle"
                    size={30}
                    color="#5B4FE9"
                  />
                </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default More;

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontSize: height * 0.02,
    marginVertical: height * 0.005,
  },
});
