import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Styles } from "./Styles.BottomTab";
import images from "../../constants/images";
import icons from "../../constants/icons";
import auth from "@react-native-firebase/auth";

const HomeScreen = (props) => {
  const [name, setName] = useState("");
  // const users =  firestore().collection('users').doc(auth().currentUser.uid).get();

  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    // if (auth().currentUser.displayName) {
    //   setName(auth().currentUser.displayName);
    // } else if {
      
    // }
  };

  return (
    <SafeAreaView style={Styles.container}>
      {/*-----Header----- */}
      <View style={[Styles.rowView, Styles.header]}>
        <View style={{ marginLeft: 12 }}>
          <Image source={images.Logo_sm} />
        </View>
        <View style={[Styles.rowView, { gap: 20 }]}>
          <TouchableOpacity>
            <Image source={icons.search} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.notification_bell} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => props.navigation.navigate("Profile")}>
            <Image source={icons.Profile_Sm} resizeMode="contain" />
            <Text style={Styles.title_sm}>
              {name.length > 10 ? name.substring(0, 10) + "..." : name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
