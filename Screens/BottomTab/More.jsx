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
import { COLORS } from "../../constants/theme";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { bottomStyles } from "./Styles.BottomTab";

const { height, width } = Dimensions.get("screen");

// <<-------------------- Main Function --------------------->>
const More = (props) => {
  const [user, setUser] = useState(null);
  const email = auth().currentUser.email;
  const [name, setName] = useState('')

  useEffect(() => {
    readData();
  }, []);

  // <<-------------------- Logout Function --------------------->>
  const handleLogout = () => {
    auth().signOut()
      .then(() => {
        alert("User signed out!");
        props.navigation.navigate("Login")
      })
  };

  // <<-------------------- Reading Data from Firestore Database --------------------->>
  const dbRef = firestore().collection("users").doc(`${auth().currentUser.uid}`); // Reference to current user's document
  const readData = async () => {
    dbRef.onSnapshot(dataSnap => {
      const userData = dataSnap.data();
      setUser(userData)
    });
    if (!user.name) {
      setName("Ananymous");
    } else {
      setName(user.name)
    }
  };

  return (
    <SafeAreaView style={bottomStyles.container}>
      <View style={[bottomStyles.container, { backgroundColor: "#1C1B1D" }]}>
        <View
          style={[
            bottomStyles.rowView,
            { paddingTop: height * 0.02, paddingHorizontal: width * 0.04 },
          ]}>
          <Image
            source={icons.Dp}
            style={{ height: height * 0.07, width: height * 0.07 }}
          />
          <View style={{ paddingHorizontal: width * 0.04 }}>
            <Text style={{ color: COLORS.white, fontSize: height * 0.024, fontFamily: 'Roboto-Bold' }}>
              {name}
            </Text>
            <Text style={{ color: COLORS.white, fontFamily: 'Roboto-Regular' }}>{email}</Text>
          </View>
        </View>
        <View style={[bottomStyles.line, { marginTop: height * 0.03 }]}></View>

        <View style={[bottomStyles.rowView, { paddingHorizontal: width * 0.04 }]}>
          <MaterialCommunityIcons name="cricket" size={20} color="#fff" />
          <Text style={[styles.text, { marginHorizontal: width * 0.02 }]}>
            Cricket
          </Text>
        </View>
        <View style={[bottomStyles.rowView, { paddingHorizontal: width * 0.04 }]}>
          <Ionicons name="football" size={20} color="#fff" />
          <Text style={[styles.text, { marginHorizontal: width * 0.02 }]}>
            Football
          </Text>
        </View>
        <View style={[bottomStyles.rowView, { paddingHorizontal: width * 0.04 }]}>
          <MaterialCommunityIcons
            name="horse-variant-fast"
            size={20}
            color="#fff"
          />
          <Text style={[styles.text, { marginHorizontal: width * 0.02 }]}>
            Horse Racing
          </Text>
        </View>
        <View style={[bottomStyles.rowView, { paddingHorizontal: width * 0.04 }]}>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <Text style={[styles.text, { marginHorizontal: width * 0.02 }]}>
            Esport
          </Text>
        </View>
        <View style={bottomStyles.line}></View>

        <View style={{ paddingHorizontal: width * 0.04 }}>
          <Text
            style={styles.text}
            onPress={() => props.navigation.navigate("Fantacy")}>
            Fantacy
          </Text>
          <Text style={styles.text}>Predictions</Text>
        </View>
        <View style={bottomStyles.line}></View>

        <View style={{ paddingHorizontal: width * 0.04 }}>
          <Text style={styles.text}>Subscription</Text>
          <Text style={styles.text} onPress={() => props.navigation.navigate('About')}>About Us</Text>
          <Text style={styles.text} onPress={() => props.navigation.navigate('Contact')}>Contact Us</Text>
          <Text style={styles.text} onPress={() => props.navigation.navigate('Advertise')}>Advertise with Us</Text>
          <Text style={styles.text} onPress={() => props.navigation.navigate('Privacy')}>Privacy Policy</Text>
          <Text style={styles.text} onPress={() => handleLogout()}>
            Logout
          </Text>
        </View>

        {/* <<-------------------- Footer Section --------------------->> */}
        <View style={{ alignItems: "center", marginVertical: height * 0.005 }}>
          <Text style={[styles.text, { fontFamily: 'Lato-Bold' }]}># FOLLOW US</Text>
          <View style={[bottomStyles.rowView, { gap: width * 0.02 }]}>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', borderRadius: 20 }}
              onPress={() =>
                Linking.openURL(
                  "https://www.facebook.com/shitanshu.tripathi.351"
                )
              }>
              <Entypo name="facebook-with-circle" size={30} color="#337FFF" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', borderRadius: 20 }}
              onPress={() =>
                Linking.openURL("https://www.twitter.com/shitanshu__00")
              }>
              <Entypo name="twitter-with-circle" size={30} color="#33CCFF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: '#fff', borderRadius: 20 }}
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
    fontFamily: 'Roboto-Regular',
    color: COLORS.white,
    fontSize: height * 0.02,
    marginVertical: height * 0.008,
  },
});
